const { app, BrowserWindow } = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        width:550,
        height:325,
        icon: "./resources/app/src_files/_images/_pre/_ico/light.ico",
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('./src_files/_data/index.html')
    win.setMenuBarVisibility(false)

    //win.webContents.openDevTools()
    //  <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';"> <-- tag use in head if no work (:
}

app.whenReady().then(createWindow)

app.on('window-all-closed', ()=>{
    if(process.platform!=='darwin'){
        app.quit()
    }
})