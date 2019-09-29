const Line1arr = [[280, 803], [540, 580], [830, 440]]
const Line2arr = [[290, 1031], [540, 904], [800, 780]]
const Line3arr = [[300, 1360], [544, 1206], [800, 1100]]
const Train = [[655, 1810], [840, 1700], [942, 1655]]
const AllBuildings = Line1arr.concat(Line2arr).concat(Line3arr)
const jgmPkgName = 'com.tencent.jgm'
const swipeDelay = 400
const swipeSleep = 400
const uploadDelay = 1000
const totalLoopCount = 10000000000000000
auto()
launch(jgmPkgName)
//等待启动成功
sleep(6000)
function uploadPkg() {
    AllBuildings.forEach(build => {
        const [buildx, buildy] = build
        Train.forEach(tra => {
            const [trax, tray] = tra
            // 点击一下 防止弹窗影响
            press(trax, tray, 10)
            swipe(trax, tray, buildx, buildy, swipeDelay)
            sleep(swipeSleep)
        })
    })
}
function start() {
    for (let index = 1; index < totalLoopCount; index++) {
        toast('第'+index+'次 上货')
        uploadPkg()
        sleep(uploadDelay)
    }
}

start()
