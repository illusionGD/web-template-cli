#!/usr/bin/env node
import { program } from 'commander'
import { readFileSync } from 'fs'
import path from 'path'
import { cwd } from 'process'
import pt from './commands/pullTemplate.ts'

const globalData = {
    version: '',
    pkgName: '',
}
const commandList = [pt]

init()

function init() {
    initGlobalData()
    registerCommand()
}

/** 初始化全局数据 */
function initGlobalData() {
    const pkgJson: any = readFileSync(path.join(cwd(), 'package.json'), 'utf-8')
    const { version, name } = JSON.parse(pkgJson)
    globalData.pkgName = name
    globalData.version = version

    return globalData
}

/** 注册command命令 */
function registerCommand() {
    program.version(globalData.version)
    for (let index = 0; index < commandList.length; index++) {
        const { command, description, action, options } = commandList[
            index
        ] as {
            command: string
            description: string
            options: [[string, string]]
            action: () => void
        }
        const curProgram = program
            .command(command)
            .description(description)
            .action(action)

        if (options && options instanceof Array) {
            options.forEach((op) => curProgram.option(...op))
        }
    }

    program.parse(process.argv)
}
