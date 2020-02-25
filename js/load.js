fetch('https://api.eshows.com.br/g', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: '{ presentations { label value } }' }),
})
  .then(res => res.json())
  .then(res => {
  console.log('presentations: ',res.data)
  if(res.errors){
    console.log(res.errors[0].message)
  }
//   document.write(JSON.stringify(res))
});
