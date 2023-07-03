export const fetchResult = async () => {
  // Between 1 and 10
  const rnd = Math.floor(Math.random() * 9) + 1;
  const data = await new Promise((resolve, reject) => {
    setTimeout(() => {
      rnd > 5
        ? resolve("You are welcome.")
        : reject(":( Error happened. Repeat again plz.");
    }, rnd * 500);
  });
  return data;
};
