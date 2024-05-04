/*
import time

time_scale_factor = 4.2857
start_unix = 4865702400

# current unix = start unix + 100 years in seconds
current_real_unix = time.time() + 3_155_673_600

difference = current_real_unix - start_unix

current_se_unix = int(start_unix + difference * time_scale_factor)

# convert current_se_unix to human readable format
current_human_readable = time.strftime("%a, %d %b %Y %H:%M:%S %Z", time.localtime(current_se_unix))

print(current_human_readable)
*/

// convert the above to javascript
// const time_scale_factor = 4.2857;
// const start_unix = 4865702400;
// const current_real_unix = Math.floor(Date.now() / 1000) + 3155673600;
// const difference = current_real_unix - start_unix;
// const current_se_unix = Math.floor(start_unix + difference * time_scale_factor);
// const current_human_readable = new Date(current_se_unix * 1000);

// put the above in a function, which returns current_human_readable

function getCurrentTime() {
    const startUnix = 4865702400;
    const timeScaleFactor = 4.2857;
    const currentRealUnix = (Date.now() / 1000) + 3155673600;
    const difference = currentRealUnix - startUnix;
    const currentSecondEarthUnix = Math.floor(startUnix + difference * timeScaleFactor);
    return new Date(currentSecondEarthUnix * 1000);
}
