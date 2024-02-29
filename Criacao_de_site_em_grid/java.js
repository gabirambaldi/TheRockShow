function Nome() {
document.getElementById("nome").innerHTML = "Digite seu nome:";
}

var Form = {txtname: "João",
            txtcpf: "154.534.254-14",
            txtcep: "31.426-111",
            txttelefone: "9 1956-3214",
            txtemail: "nome@gmail.com",
            txtsenha: "2121211",
            txtrepetirsenha: "2121211"
            }

function Tel() {
document.getElementById("txttelefone").placeholder = "(00) 9 1234-5678";
}

function Cep() {
    document.getElementById("txtcep").placeholder = "00.000-000";
}

function Cpf() {
document.getElementById("txtcpf").placeholder = "000.000.000-00";
}

function mascara_telefone()
        {
         var tel = document.getElementById("txttelefone").value
            console.log(tel)
          tel=tel.slice(0,16)
            console.log(tel)
          document.getElementById("txttelefone").value=tel
     tel=document.getElementById("txttelefone").value.slice(0,10)
            console.log(tel)
            var tel_formatado = document.getElementById("txttelefone").value
            if (tel_formatado[0]!="(")
            {
                if(tel_formatado[0]!=undefined)
                {
                    document.getElementById("txttelefone").value="("+tel_formatado[0];
                }
            }

            if (tel_formatado[3]!=")")
            {
                if(tel_formatado[3]!=undefined)
                {
                    document.getElementById("txttelefone").value=tel_formatado.slice(0,3)+")"+tel_formatado[3]
                }
            }

            if (tel_formatado[11]!="-")
            {
                if(tel_formatado[11]!=undefined)
                {
                    document.getElementById("txttelefone").value=tel_formatado.slice(0,11)+"-"+tel_formatado[11]
                }
            }

            if (tel_formatado[4]!=" ")
            {
                if(tel_formatado[4]!=undefined)
                {
                    document.getElementById("txttelefone").value=tel_formatado.slice(0,4)+" "+tel_formatado[4]
                }
            }

            if (tel_formatado[6]!=" ")
            {
                if(tel_formatado[6]!=undefined)
                {
                    document.getElementById("txttelefone").value=tel_formatado.slice(0,6)+" "+tel_formatado[6]
                }
            }
        }

        function mascara_cpf()
        {
         var cpf = document.getElementById("txtcpf").value
            console.log(cpf)
          cpf=cpf.slice(0,14)
            console.log(cpf)
          document.getElementById("txtcpf").value=cpf
     cpf=document.getElementById("txtcpf").value.slice(0,10)
            console.log(cpf)
            var cpf_formatado = document.getElementById("txtcpf").value

            if (cpf_formatado[3]!=".")
            {
                if(cpf_formatado[3]!=undefined)
                {
                    document.getElementById("txtcpf").value=cpf_formatado.slice(0,3)+"."+cpf_formatado[3]
                }
            }

            if (cpf_formatado[7]!=".")
            {
                if(cpf_formatado[7]!=undefined)
                {
                    document.getElementById("txtcpf").value=cpf_formatado.slice(0,7)+"."+cpf_formatado[7]
                }
            }

            if (cpf_formatado[11]!="-")
            {
                if(cpf_formatado[11]!=undefined)
                {
                    document.getElementById("txtcpf").value=cpf_formatado.slice(0,11)+"-"+cpf_formatado[11]
                }
            }
        }
        
        function mascara_cep()
        {
         var cep = document.getElementById("txtcep").value
            console.log(cep)
          cep=cep.slice(0,10)
            console.log(cep)
          document.getElementById("txtcep").value=cep
     cep=document.getElementById("txtcep").value.slice(0,10)
            console.log(cep)
            var cep_formatado = document.getElementById("txtcep").value

            if (cep_formatado[2]!=".")
            {
                if(cep_formatado[2]!=undefined)
                {
                    document.getElementById("txtcep").value=cep_formatado.slice(0,2)+"."+cep_formatado[2]
                }
            }

            if (cep_formatado[6]!="-")
            {
                if(cep_formatado[6]!=undefined)
                {
                    document.getElementById("txtcep").value=cep_formatado.slice(0,6)+"-"+cep_formatado[6]
                }
            }
        }        