export function signIn() {
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve({
        token:'0120eojsaasdsfkjfaas1aslasadkjasldkjap1o2e3krnlfndlk',
        user: {
          name:'Lazaro',
          email:'lazaroq11@gmail.com',
        },
      });
    },2000)
  });
}