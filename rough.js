function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error happened ❌");
    }, 1000);
  });
}
async function run() {
  let result = await getData();
}

run();