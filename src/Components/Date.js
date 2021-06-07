import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates'
import '../App.css'

export function Date(){

       const [dateExam, setDateExam] = useState({ startDate: "", endDate: "" });
       
       
        
        return (
            
            <div className="Date">

                <DateRangePicker
                startDate = {dateExam.startDate}
                startDateId="your_unique_start_date_id"
                endDate = {dateExam.endDate}
                endDateId="your_unique_end_date_id"
                onDatesChange={({dateExam}) => setDateExam({dateExam})}
                />
                 
            </div>
        )
    }


