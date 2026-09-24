function sayHello(name, callback) {
    console.log("Hello, " + name + "!");

    // simulate condition
    if (!name) {
        callback("Name is required", null);   // ❌ error case
        return;
    }

    callback(null, name);   // ✅ success case

    console.log("How are you doing today?");
}

function sayThanks(err, name) {
    if (err) {
        console.error("Error:", err);
        return;
    }

    setTimeout(() => {
        console.log("Thanks for calling,", name + "!");
    }, 2000);
}

// Test
sayHello("", sayThanks);