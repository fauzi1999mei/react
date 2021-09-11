import logo from './logo.svg';
import './App.css';
import React from 'react';
const {useState} = React;


function App() {

  const [counter,setCounter]= useState(0);

  return (
    
    
    
    <div className="App">
      <header className="App-header">
        <div class = "nav">
          <a href = "#profile">Profile</a>
          <a href = "#website">My Website</a>
          <a href = "#app">My App</a>
          <a href = "#desktop">My Web desktop code</a>
        </div>
      <div id = "profile">  
      <h1>MY PORTOFOLIO</h1>
       <img src = "foto.png"></img>
       
     <h1>Mohommad Rizki Fauzi</h1>
     <h2>Addres : Jalan Samratulangi Gang Onta, Singaraja, Buleleng, Bali, Indonesia</h2>
     <h2>Post Code : 81151 </h2>
     <h2>Universitas Pendidikan Ganesha</h2>
      <h2>GPA : 3.67</h2>
      <h2>Understanding Indonesian and English Language</h2>
      <center>
     <table>
       <tr>
         <th>Gmail</th>
         <th >GitHub</th>
         <th>Handphone Number</th>
       </tr>
       <tr>
         <td>riskysingaraja2018@gmail.com</td>
         <td><em><a className = "git" href = "https://github.com/fauzi1999mei">https://github.com/fauzi1999me</a></em></td>
         <td><em>+62881037134211</em></td>
       </tr>
       </table>
       </center>
       </div>
      </header>
    
    <body>
     
     <h2>Experience With : </h2>
     <center>
     
     <ol className = "center">
       <li>HTML</li>
       <li>CSS</li>
       <li>JavaScript</li>
       <li>Java</li>
       <li>ReactJS</li>
       <li>ReactNative</li>
       <li>MongoDB</li>
       <li>Express</li>
       <li>NodeJS</li>
     </ol>
     
     </center>
     <h2>My Projects : </h2>
     
    
    <center>
      
        
     <ol className="left">
       <li>WebSite for the link : <a href="#website"> WebSite</a></li>
       <li>Mobile App           : <a href = "#app">My Mobile App</a></li>
       <li>Web Desktop          : <a href = "#desktop">Bank System Management</a></li>
     </ol>
     
     
     </center>
     
     
     <strong>Graduated : 27th August 2021</strong>
     <div class = "Mywebsite">
     <h1 id = "website">My WebSite</h1>
     <h2>Free Ebook</h2>
     <h3>You Just Only Need Click Download Button To Get The EBook :)</h3>
     <center>
     <table>
       <tr>
         <th>
           Number
         </th>
         <th>
           Title of Book
         </th>
         <th>
           Figure
         </th>
       </tr>
       <tr>
         <td>
           1
         </td>
         <td>
           General relativity
         </td>
         <td>
           <img src ="gr.png" class = "gr"></img>
           <button><a href = "Classical Fields - General Relativity and Guage Theory by M. Carmeli (z-lib.org).pdf">Download</a></button>
         </td>
       </tr>
       <tr>
         <td>
           2
         </td>
         <td>
           Teleparallel Gravity
         </td>
         <td>
           <img src ="tg.png" class = "gr"></img>
           
           <button>< a href = "Principles of Physics From Quantum Field Theory to Classical Mechanics by Jun Ni (z-lib.org).pdf" > Download</a></button>
           
         </td>
       </tr>
       <tr>
         <td>
           3
         </td>
         <td>
           Quantum mechanics
         </td>
         <td>
           <img src ="qm.png" class = "gr"></img>
           <button> <a href = "Problems and Solutions in Quantum Mechanics by Kyriakos Tamvakis (z-lib.org).pdf">Download</a></button>
         </td>
       </tr>
       <tr>
         <td>
           4
         </td>
         <td>
           Quantum Field Theory
         </td>
         <td>
           <img src ="qf.png" class = "gr"></img>
           <button><a href = "Principles of Physics From Quantum Field Theory to Classical Mechanics by Jun Ni (z-lib.org).pdf" >Download </a></button>
         </td>
       </tr>
       <tr>
         <td>
           5
         </td>
         <td>
           Al-Qur'an
         </td>
         <td>
           <img src ="quran.png" class = "gr"></img>
           <button href = "Principles of Physics From Quantum Field Theory to Classical Mechanics by Jun Ni (z-lib.org).pdf">< a href = "Principles of Physics From Quantum Field Theory to Classical Mechanics by Jun Ni (z-lib.org).pdf">Download</a></button>
         </td>
       </tr>
     </table></center>
     </div>
     
     
     <div class = "mobile">
       <h1 id = "app">My Mobile App</h1>
     </div>
     <div class = "dektop">
       <h1 id = "desktop">My web Desktop Using Java Programing Languages</h1>
       <img class = "ayam" src = "Capture.png"></img>
       <h2><a href = "https://github.com/fauzi1999mei/Bank/blob/main/Main.java">Get The Code</a></h2>
     </div>
     <div class = "nava">
          <a href = "#profile">Profile</a>
          <a href = "#website">My Website</a>
          <a href = "#app">My App</a>
          <a href = "#desktop">My Web desktop code</a>
        </div>
     <footer class = "fauzi">
       <em>copyRigth2021 By Fauzi</em>
     </footer>


     

     


    </body>
    
    </div>

   
  );
}
export default App;
