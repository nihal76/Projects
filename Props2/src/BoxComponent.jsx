export default function BoxComponent({value,children}){
  return(
    <div style={{width:'300px',height:'300px',backgroundColor:"lightgray" }}>
           <h1 >Children Props</h1>
           {value}
           {children}
    </div>
  )
}