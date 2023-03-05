export default defineNuxtPlugin((nuxtApp) => {
  const domain = "http://localhost:3000/api/";
  //   const username = "abcdef";
  //   const password = "123456";
  //   const token = `${username}:${password}`;
  //   const encodedToken = Buffer.from(token).toString("base64");

  let publicApi = nuxtApp.$axios.create({
    baseUrl: domain,
    // headers: {
    //   common: {
    //     Authorization: `Basic ${encodedToken}`,
    //   },
    // },
  });

  return {
    provide: {
      publicApi: publicApi,
    },
  };
});
