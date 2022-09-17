import Input from "../Input";

export default () =>
    <div className="personal-datas-container">
        <div>
            <Input labelValue="Nome completo" onChange={() => { }} value="" />
            <Input labelValue="Data de nascimento" onChange={() => { }} value="" />
            <Input labelValue="Número de telefone" onChange={() => { }} value="" />
        </div>

        <div>
            <Input labelValue="Código postal (CEP)" onChange={() => { }} value="" />
            <Input labelValue="Cadastro de pessoa física (CPF)" onChange={() => { }} value="" />
        </div>
    </div >