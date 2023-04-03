const client = (() => {
    let serviceWorkerRegObj = undefined;
    let notificationbutton = document.getElementById("btn-notify");

    const showNotificationButton = () =>{
        notificationbutton.style.display = "block";
    }

    const checkNotificationSupport = () => {
        if(!('Notification' in window)){
            return Promise.reject("This browser doesn't support notifications");
        }
        console.log("The browser supports Notification");
        return Promise.resolve("ok.");
    }

    const registerServiceWorker = () => {
        if(!('serviceWorker') in navigator){
            return Promise.reject("Service worker is not available yet");
        }

        return navigator.serviceWorker.register('service-worker.js')
            .then(regObj => {
                console.log("Service worker is registered successfully");
                serviceWorkerRegObj = regObj;
                showNotificationButton();
            })
    }

    const requestNotificationPermission= () => {
        return Notification.requestPermission(status => {
            console.log("Notifications Permission Status:", status);
        })
    }

    const sendNotification = () => {
        const notificationMessage = {
            title: "Test Notification",
            body: "This is a test notification.",
            icon: "https://via.placeholder.com/48x48",
        };
        const notificationOptions = {
            body: notificationMessage.body,
            icon: notificationMessage.icon,
        };
        if (Notification.permission === "granted") {
            return serviceWorkerRegObj.showNotification(notificationMessage.title, notificationOptions);
        } else if (Notification.permission !== "denied") {
            requestNotificationPermission().then(permission => {
                if (permission === "granted") {
                    return serviceWorkerRegObj.showNotification(notificationMessage.title, notificationOptions);
                }
            });
        }
    }

    // Add event listener to the notification button
    notificationbutton.addEventListener("click", sendNotification);

    // How the constructors are called
    checkNotificationSupport()
        .then(registerServiceWorker)
        .then(requestNotificationPermission)
        .catch(err => console.error(err))

})();
