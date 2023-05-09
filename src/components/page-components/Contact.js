function Contact() {
    return ( 
        <div className="col-12">
            <h2>Contact</h2>

            <img src="./team.jpg" alt="Mars" className="img-fluid" />

            <table className="table">
                <tbody>
                <tr>
                    <th>Dr. Bennet Radlow</th>
                    <td>Mars Mission Dept Head</td>
                    <td>555-358-8346</td>
                    <td>b.radlow@nasa.gov</td>
                </tr>
                <tr>
                    <th>Dr. Janet Pickelow</th>
                    <td>Astro Physicist</td>
                    <td>555-276-9947</td>
                    <td>j.pickelow@nasa.gov</td>
                </tr>
                <tr>
                    <th>Dr. Susan Kent</th>
                    <td>Head Robotics Engineer</td>
                    <td>555-354-1285</td>
                    <td>s.kent@nasa.gov</td>
                </tr>
                <tr>
                    <th>Dr. Seth Skeleton</th>
                    <td>Rover Engineer</td>
                    <td>555-456-3467</td>
                    <td>s.kent@nasa.gov</td>
                </tr>
                </tbody>
            </table>
        </div>
     );
}

export default Contact;