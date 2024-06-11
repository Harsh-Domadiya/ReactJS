// // const weddingServices = [
//     {
//         title: "Wedding Ceremony",
//         description: "A beautiful and meaningful wedding ceremony.",
//         price: 500,
//     },
//     {
//         title: "Reception",
//         description: "A delicious and elegant reception for your guests.",
//         price: 1000,
//     },
//     {
//         title: "Wedding Photography",
//         description: "We capture your special day in stunning photos that you'll cherish for a lifetime.",
//         price: 1000,
//     },
//     {
//         title: "Wedding Videography",
//         description: "We capture your wedding day in a cinematic video that you'll love to watch over and over again.",
//         price: 1500,
//     },
//     {
//         title: "Wedding DJ",
//         description: "We provide the music and entertainment for your wedding reception, ensuring that everyone has a great time.",
//         price: 2000,
//     },
// ];
// // console.log(weddingServices);

// // const WeddingServices = (service) => {
// //     return (
// //         <div className="wedding-services">
// //             {weddingServices.map((service, index) => (
// //                 <WeddingServices key={index} service={service} />
// //             ))}
// //         </div>
// //     );
// // };

// // export default WeddingServices;


// const WeddingServiceCard = (service) => {
//         const { title, description, price } = service;
//         const inputRef = useRef();

//         const handleInputChange = () => {
//                 console.log(inputRef.current.value);
//         };

//         return (
//                 <div className="wedding-service-card">
//                         <h3 className="wedding-service-card-title">{title}</h3>
//                         <p className="wedding-service-card-description">{description}</p>
//                         <p className="wedding-service-card-price">${price}</p>
//                         <input type="text" ref={inputRef} onChange={handleInputChange} />
//                 </div>
//         );
// };

// const service = {
//         title: "Wedding Photography",
//         description: "High-quality photography services for your special day.",
//         price: 1500,
// };

// const rootElement = document.getElementById("root");
// // ReactDOM.render(<WeddingServiceCard service={service} />, rootElement);


// export default WeddingServiceCard;