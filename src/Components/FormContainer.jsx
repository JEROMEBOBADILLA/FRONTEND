const FormContainer = () => {
    return (
    <>

    <section>
               <h2>Student Form</h2>
                <form id="student-form">
                    <div>
                        <label htmlFor="studentName">Name:</label>
                        <input type="text" id="studentName" name="studentName"></input>
                    </div>
                    <div>
                        <label htmlFor="program">Program:</label>
                        <input type="text" id="program" name="program"></input>
                    </div>
                    <button type="submit">Submit</button>
                    </form>   
               </section>
    </>
    );
}    

export default FormContainer;