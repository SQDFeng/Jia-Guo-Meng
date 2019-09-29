const Line1arr = [[300, 838], [566, 733], [814, 650]]
const Line2arr = [[307, 1081], [560, 990], [820, 860]]
const Line3arr = [[320, 1790], [560, 1245], [820, 1127]]
const Train = [[640, 1640], [795, 1720], [920, 1660]]
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
