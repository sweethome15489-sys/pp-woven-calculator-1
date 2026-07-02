function calculate(){

    let cm = Number(document.getElementById("cm").value);
    let gsm = Number(document.getElementById("gsm").value);
    let pp = Number(document.getElementById("pp").value);
    let co2 = Number(document.getElementById("co2").value);
    let ppp = Number(document.getElementById("ppp").value);
    let co2p = Number(document.getElementById("co2p").value);
    let conversion = Number(document.getElementById("conversion").value);
    let lamination = Number(document.getElementById("lamination").value);

    if(cm<=0 || gsm<=0){
        alert("Please enter Width and GSM");
        return;
    }

    let inch = cm / 2.54;
    let gram = (cm * gsm) / 100;

    let compound = ((pp * ppp) + (co2 * co2p)) / 100;

    let finalcost = compound + conversion + lamination;

    document.getElementById("inch").innerHTML = inch.toFixed(2) + " inch";

    document.getElementById("gram").innerHTML = gram.toFixed(2) + " g/m";

    document.getElementById("compound").innerHTML = "₹ " + compound.toFixed(2) + "/kg";

    document.getElementById("final").innerHTML = "₹ " + finalcost.toFixed(2) + "/kg";
}