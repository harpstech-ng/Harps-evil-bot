const { sock } = require("./core/sock")
const { getPlatformInfo } = require("./core/dclient")
const { spawn } = require("child_process")
const http = require("http")

const run = async () => {
  try {
    console.log(`🔥 HARPS TECH BOT v3.0 STARTING...`) // NEW
    const platform = getPlatformInfo?.().platform?.toLowerCase() || ""
    
    if (!platform.includes("pterodactyl")) {
      const server = http.createServer((req, res) => {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("HARPS TECH BOT IS RUNNING 24/7\n") // CHANGED
      })
      
      const PORT = process.env.PORT || 5000
      server.listen(PORT, () => {
        console.log(`HARPS BOT Listening on port ${PORT}`)
      })
    }
    
    await sock()
  } catch (e) {
    console.error("HARPS BOT CRASHED:", e) // CHANGED
    process.exit(1) // Auto restart
  }
}

if (!process.env.PM2_HOME && !process.env.STARTED_BY_NPM) {
  const pm2p = spawn("npm", ["start"], {
    stdio: "inherit",
    shell: true,
    env: { ...process.env, STARTED_BY_NPM: "true" }
  })
  
  pm2p.on("error", err => console.error("Failed to start:", err))
  pm2p.on("exit", code => {
    console.error("Process exited with code:", code)
    process.exit(code) // Auto restart again
  })
  return
}

run()
