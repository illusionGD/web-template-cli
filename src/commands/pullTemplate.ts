function action(e, option) {
    console.log('🚀 ~ option:', option)
}
export default {
    command: 'pt',
    description: '拉取代码模板',
    options: [],
    action,
}
