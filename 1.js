function jsonReturn(name,age){
    dataJson = {
        name : name,
        age : age,
        address : 'Kp.Jati Parung 04/05',
        hobbies : ['coding','fishing'],
        is_married : false,
        list_school : [{
            name : 'SDN Parung 02',
            year_in: '2003',
            year_out:'2009',
            major: null,
        },{
            name : 'SMPN 1 Parung',
            year_in: '2009',
            year_out:'2012',
            major: null,
        },{
            name : 'SMAN 1 Parung',
            year_in: '2012',
            year_out:'2015',
            major: 'IPS',
        },{
            name : 'Universitas Gunadarma',
            year_in: '2015',
            year_out:'2019',
            major: 'Sistem Informasi',
        }],
        skills : [{
            skill_name : 'javascript',
            level : 'advanced'
        },{
            skill_name : 'php',
            level : 'advanced'
        },{
            skill_name : 'python',
            level : 'beginner'
        }],
        interest_in_coding : true,

    }
    return dataJson;
}

const data = jsonReturn('Roni',22);
console.log(data);