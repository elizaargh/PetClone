import image from '../image.png'

const Layout = (props) => {
    return (
        <>
            <div className="square-filler">
                <h1>Heading 1</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In neque dui, tempus vel ullamcorper non, iaculis nec est. </p>
                <br/>
                <button className="subscribeButton">Find out more</button>
               <p> ⚪️ ⚪️ ⚪️ </p> 
            </div>
            <div className="square-filler-3">
                <h2>Heading 2</h2>
                <img src={image} className="doggy" width="220" height="200" />
                <p> Mauris orci risus, pellentesque vitae massa sit amet, pretium venenatis quam. Mauris orci risus, pellentesque vitae massa sit amet, pretium venenatis quam.    </p>
                <br/>
                <button className="subscribeButton">See more</button>
                
            </div>
        </>
    )
}

export default Layout;