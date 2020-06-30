const path = require('path')
const fs = require('fs-extra')
const dateFns = require('date-fns')
const _ = require('lodash')
const rr = require('recursive-readdir')
const matter = require('gray-matter')
const inquirer = require('inquirer')
const log = require('signale')
const cwd = process.cwd()

const CONTENTS_DIR = '/content/blog'
const TARGET_DIR = `${cwd}${CONTENTS_DIR}`
const IGNORE_DIR = 'images'
const UTF_8 = 'utf8'
const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
const DATE_FORMAT = 'YYYY-MM-DD'

const ignoreFunc = (file, stats) =>
  stats.isDirectory() && path.basename(file) == IGNORE_DIR

const getCategories = async () => {
  const markdownFiles = await rr(TARGET_DIR, [ignoreFunc])

  return _.uniq(
    markdownFiles
      .map(file => fs.readFileSync(file, UTF_8))
      .map(str => matter(str).data.category)
      .filter(val => !!val)
    //.map(str => str.trim().toLowerCase())
  )
}

const getFileName = title =>
  title
    .split(' ')
    .join('-')
    .toLowerCase()

const refineContents = rawContents =>
  matter
    .stringify('', rawContents)
    .split("'")
    .join('')

const fetchCategory = async () => {
  let category
  const customCategoryOption = '[[ CREATE NEW CATEGORY ]]'
  const categories = await getCategories()
  const categoryChoices = [
    ...categories,
    new inquirer.Separator(),
    customCategoryOption,
  ]
  const { selectedCategory } = await inquirer.prompt([
    {
      type: 'list',
      name: 'selectedCategory',
      message: 'Select a category',
      choices: categoryChoices,
    },
  ])

  if (selectedCategory === customCategoryOption) {
    const { customizedCategory } = await inquirer.prompt([
      {
        type: 'input',
        name: 'customizedCategory',
        message: 'Enter the customized category',
        validate: val => {
          if (val.includes("'")) {
            return 'Cannot use single quote'
          }

          if (categories.includes(val)) {
            return `Already exist category name:: ${val}`
          }

          return true
        },
      },
    ])
    category = customizedCategory
  } else {
    category = selectedCategory
  }

  if (!category) {
    throw Error('Unknown Error: Cannot find category!')
  }

  return category
}

const fetchTitle = async category => {
  const { title } = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the title',
      default: () => 'New post title',
      validate: async val => {
        if (val.includes("'")) {
          return 'Cannot use single quote'
        }

        const fileName = getFileName(val)
        const dest = `${TARGET_DIR}/${category}/${fileName}/${fileName}.md`
        const destFileExists = await fs.pathExists(dest)

        if (destFileExists) {
          return `Already exist file name:: ${fileName}.md`
        }

        return true
      },
    },
  ])

  return title
}

module.exports = (async function () {
  const datetime = dateFns.format(new Date(), DATETIME_FORMAT)
  const date = dateFns.format(new Date(), DATE_FORMAT)

  log.info('Create new post:: ', datetime)
  log.start('Start to process!\n')

  var category = await fetchCategory()
  const categoryPath = category.replace(/ /g, '-').toLowerCase()
  log.info('category :', categoryPath)
  const destDir = `${TARGET_DIR}/${categoryPath}`
  const destDirExists = await fs.pathExists(destDir)

  if (!destDirExists) {
    await fs.ensureDir(destDir)
  }

  const draft = "true";
  const title = await fetchTitle(category)
  const fileName = `${date}---` + getFileName(title)
  const tags = ""
  const description = "";
  const contents = refineContents({ draft, title, datetime, category, tags, description })
  const fileDir = `${destDir}/${fileName}`
  const fileDirExists = await fs.pathExists(fileDir)


  if (!fileDirExists) {
    await fs.ensureDir(fileDir)
  }

  fs.writeFile(`${destDir}/${fileName}/${fileName}.md`, contents, err => {
    if (err) {
      log.error('Unknown Error: Cannot write file!')
      return
    }
    console.log('')

    log.success('Success to create new post!')
    log.note(`/${categoryPath}/${fileName}.md\n${contents}`)
  })
})()
