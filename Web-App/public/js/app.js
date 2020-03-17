if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("serviceworker.js").then(
        registration => {
          // Registration was successful
          console.log(
            "ServiceWorker registration successful with scope: ",
            registration.scope
          );
          return registration.update();
        },
        err => {
          // registration failed :(
          console.log("ServiceWorker registration failed: ", err);
        }
      );
    });
  }