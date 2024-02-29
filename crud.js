var selrow=null;
function submittion(){
    var formData=readData();
    if(selrow==null)
    insertData(formData);
    else
    updateData(formData);
}
function readData(){
    var getData={};
    getData["Fname"]=document.getElementById("Fname").value;
    getData["Age"]=document.getElementById("Age").value;
    getData["gender"]=document.getElementById("Male").value;
    getData["email"]=document.getElementById("email").value;
    return getData;
}
function insertData(data){
    var table=document.getElementById("tab1").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    c1=newRow.insertCell(0);
    c1.innerHTML=data.Fname;
    c2=newRow.insertCell(1);
    c2.innerHTML=data.Age;
    c3=newRow.insertCell(2);
    c3.innerHTML=data.gender;
    c4=newRow.insertCell(3);
    c4.innerHTML=data.email;
    c5=newRow.insertCell(4);
    c5.innerHTML='<button onClick="editData(this)">Edit</button>';
    c6=newRow.insertCell(5);
    c6.innerHTML='<button onClick="deleteData(this)">Delete</button>'
}
function editData(td){
    selrow=td.parentElement.parentElement;
    document.getElementById("Fname").value=selrow.cells[0].innerHTML;
    document.getElementById("Age").value=selrow.cells[1].innerHTML;
    document.getElementById("Male").value=selrow.cells[2].innerHTML;
    document.getElementById("email").value=selrow.cells[3].innerHTML;
}
function updateData(formData){
    selrow.cells[0].innerHTML=formData.Fname;
    selrow.cells[1].innerHTML=formData.Age;
    selrow.cells[2].innerHTML=formData.gender;
    selrow.cells[3].innerHTML=formData.email;
}
function deleteData(td){
    if(confirm('Do you want to delete your data')){
        row=td.parentElement.parentElement;
        document.getElementById("tab1").deleteRow(row.rowIndex);
    }
}