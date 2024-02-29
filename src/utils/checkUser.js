export async function checkUser(onSuccess, onError) {
    
  try {
    const res = await axios.post("/api/users/current");
    console.log(res)
    onSuccess();
  } catch (error) {
    onError();
  }
}
