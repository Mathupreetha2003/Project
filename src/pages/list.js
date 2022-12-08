
function List()
{
    const array=[
        {
            id:1,
            name:'mathu',
            roll:'23'
        },
        {
            id:2,
            name:'gayu',
            roll:'24'
        }
    ];
    return(
        <div>
            {array.map(data=>
                (
                    <div key={data.id}>
                        <p style={{backgroundColor:'red'}}>My name is {data.name}</p>
                        <p>My roll no is {data.roll}</p>
              
              </div> ) )}
                
        </div>
    )
}
export default List;