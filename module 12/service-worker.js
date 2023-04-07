self.addEventListener('notificationclose', event => {
    console.log('notification closed', event)
})

self.addEventListener('notificationclick', event => {
    if(event.action === "search"){
        const githubuser = event.notification.data.githubuser;
        clients.openWindow("https://github.com/${githubuser}");
    } else if (event.action === "close"){
        clients.openWindow('https://www.pointpark.edu');
    }
    console.log('notification clicked', event.notification.data)
})
