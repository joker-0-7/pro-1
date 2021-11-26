// let myMainElement = document.createElement( "div" );
// let myHeading = document.createElement( "h2" );
// let myParagraph = document.createElement( "p" );

// let myHeadingText = document.createTextNode( "Product Title" );
// let myParagraphText = document.createTextNode( "Product Description" );

// myMainElement.className = 'product';

// myHeading.appendChild( myHeadingText );
// myMainElement.appendChild( myHeading );
// myParagraph.appendChild( myParagraphText );
// myMainElement.appendChild( myParagraph );
// console.log( myMainElement );
// document.body.appendChild( myMainElement );

for ( let i = 0; i < 100; i++ ){
    let myMainElement = document.createElement( "div" );
    let myHeading = document.createElement( "h2" );
    let myParagraph = document.createElement( "p" );
    let num = [ i + 1 ];
    let myHeadingText = document.createTextNode( "Product Title Number" + " " + num );
    let myParagraphText = document.createTextNode( "Product Description" );
    myMainElement.className = 'product';
    myHeading.appendChild( myHeadingText );
    myMainElement.appendChild( myHeading );
    myParagraph.appendChild( myParagraphText );
    myMainElement.appendChild( myParagraph );
    document.body.appendChild( myMainElement );
    console.log( myMainElement );
}