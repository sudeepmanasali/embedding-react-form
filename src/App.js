import React,{useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [cgpa, setCgpa] = useState("");
    const [year, setYear] = useState("");
    const [branch, setBranch] = useState("");
    const [collageName, setCollageName] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log({
            "Name" : name,
            "Email" : email,
            "Phone_number" : phone,
            "cgpa" : cgpa,
            "graduation year" : year,
            "branch": branch,
            "Collage Name" : collageName,
            "password": password,
            "Selected_date": date

        });
    }



  return (
   <div>
                    <form>

                    <div className="form-group">
                        <label for="exampleInputName">Candidate Name</label>
                        <input type="text" className="form-control" id="exampleInputName" onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name"/>

                    </div>


                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputPhone">Phone number</label>
                        <input type="number" limit="10" className="form-control" onChange={(e)=>{setPhone(e.target.value)}} id="exampleInputPhone" placeholder="Phone"/>
                    </div>


                    <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Branch</label>
                    <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={(e)=>{setBranch(e.target.value)}}>
                        <option selected>Choose...</option>
                        <option value="1">Computer science</option>
                        <option value="2">Electronics And Communications</option>
                        <option value="3">Mechanical Engineering</option>
                    </select>



                    <div className="form-group">
                        <label for="exampleInputYear">Year of Graduation</label>
                        <input type="number" className="form-control" id="exampleInputYear" onChange={(e)=>{setYear(e.target.value)}} placeholder="Year of graduation"/>
                    </div>

                    
                    <div className="form-group">
                        <label for="exampleInputCGPA">CGPA</label>
                        <input type="number"  className="form-control" id="exampleInputCGPA" onChange={(e)=>{setCgpa(e.target.value)}} placeholder="CGPA"/>
                    </div>



                    <div className="form-group">
                        <label for="exampleInputCOllage">Collage Name</label>
                        <input type="text" className="form-control" id="exampleInputCOllage" onChange={(e)=>{setCollageName(e.target.value)}} placeholder="Collage"/>
                    </div>




                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setPassword(e.target.value)}} placeholder="Password"/>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputDate">Date</label>
                        <input type="Date" className="form-control" id="exampleInputDate" onChange={(e)=>{setDate(e.target.value)}} placeholder="Date"/>
                    </div>

                    <div className="form-group">
                        <label for="exampleInputCIMAGE">Candidate image</label>
                        <input type="file" className="form-control" id="exampleInputCIMAGE" />
                    </div>



                    <div className="form-group">
                        <label for="exampleInputPassword1">Resume File</label>
                        <input type="file" className="form-control" id="exampleInputPdf" />
                    </div>











                    {/* <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}

                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </form>


</div>


  );
}

export default App;
