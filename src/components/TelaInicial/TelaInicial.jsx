import React, { useState } from "react";
import { Navbar, Container, Card } from "react-bootstrap";
import { MdClose, MdShare, MdOutlineAdd } from "react-icons/md";

import "./estilo.css";
import logo from "../../assets/logo_branco.png";

const TelaInicial = () => {

    const [nomeUsuario, setNomeUsuario] = useState("");

    return (
        <section className="base-tela-inicial">
            <Navbar bg="dark" variant="dark" className="navbar">
                <Container fluid className="navbar-container">
                    <Navbar.Brand href="/">
                        <img src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Olá, Augusto!
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className="area-cards">
                <Card className="card-nota">
                    <Card.Body>
                        <div className="card-nota-titulo">
                            <span className="span-textarea-cardnota-titulo" role="textbox" contentEditable></span>   
                            <MdClose/>
                        </div>
                        <Card.Text>
                        <span className="span-textarea-cardnota" role="textbox" contentEditable></span>   
                         </Card.Text> 
                        <div className="rodape-card">
                        <Card.Link href="#">Salvar</Card.Link>
                        <MdShare/>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card-nota">
                    <Card.Body>
                        <div className="card-nota-titulo">
                            <span className="span-textarea-cardnota-titulo" role="textbox" contentEditable></span>   
                            <MdClose/>
                        </div>
                        <Card.Text>
                        <span className="span-textarea-cardnota" role="textbox" contentEditable></span>   
                         </Card.Text> 
                        <div className="rodape-card">
                        <Card.Link href="#">Salvar</Card.Link>
                        <MdShare/>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card-nota">
                    <Card.Body>
                        <div className="card-nota-titulo">
                            <span className="span-textarea-cardnota-titulo" role="textbox" contentEditable></span>   
                            <MdClose/>
                        </div>
                        <Card.Text>
                        <span className="span-textarea-cardnota" role="textbox" contentEditable></span>   
                         </Card.Text> 
                        <div className="rodape-card">
                        <Card.Link href="#">Salvar</Card.Link>
                        <MdShare/>
                        </div>
                    </Card.Body>
                </Card>                <Card className="card-nota">
                    <Card.Body>
                        <div className="card-nota-titulo">
                            <span className="span-textarea-cardnota-titulo" role="textbox" contentEditable></span>   
                            <MdClose/>
                        </div>
                        <Card.Text>
                        <span className="span-textarea-cardnota" role="textbox" contentEditable></span>   
                         </Card.Text> 
                        <div className="rodape-card">
                        <Card.Link href="#">Salvar</Card.Link>
                        <MdShare/>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card-nota">
                    <Card.Body>
                        <div className="card-nota-titulo">
                            <span className="span-textarea-cardnota-titulo" role="textbox" contentEditable></span>   
                            <MdClose/>
                        </div>
                        <Card.Text>
                        <span className="span-textarea-cardnota" role="textbox" contentEditable></span>   
                         </Card.Text> 
                        <div className="rodape-card">
                        <Card.Link href="#">Salvar</Card.Link>
                        <MdShare/>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card-nota">
                    <Card.Body>
                        <div className="card-nota-titulo">
                            <span className="span-textarea-cardnota-titulo" role="textbox" contentEditable></span>   
                            <MdClose/>
                        </div>
                        <Card.Text>
                        <span className="span-textarea-cardnota" role="textbox" contentEditable></span>   
                         </Card.Text> 
                        <div className="rodape-card">
                        <Card.Link href="#">Salvar</Card.Link>
                        <MdShare/>
                        </div>
                    </Card.Body>
                </Card>                <Card className="card-nota">
                    <Card.Body>
                        <div className="card-nota-titulo">
                            <span className="span-textarea-cardnota-titulo" role="textbox" contentEditable></span>   
                            <MdClose/>
                        </div>
                        <Card.Text>
                        <span className="span-textarea-cardnota" role="textbox" contentEditable></span>   
                         </Card.Text> 
                        <div className="rodape-card">
                        <Card.Link href="#">Salvar</Card.Link>
                        <MdShare/>
                        </div>
                    </Card.Body>
                </Card>                <Card className="card-nota">
                    <Card.Body>
                        <div className="card-nota-titulo">
                            <span className="span-textarea-cardnota-titulo" role="textbox" contentEditable></span>   
                            <MdClose/>
                        </div>
                        <Card.Text>
                        <span className="span-textarea-cardnota" role="textbox" contentEditable></span>   
                         </Card.Text> 
                        <div className="rodape-card">
                        <Card.Link href="#">Salvar</Card.Link>
                        <MdShare/>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card-nota">
                    <Card.Body>
                        <div className="card-nota-titulo">
                            <span className="span-textarea-cardnota-titulo" role="textbox" contentEditable></span>   
                            <MdClose/>
                        </div>
                        <Card.Text>
                        <span className="span-textarea-cardnota" role="textbox" contentEditable></span>   
                         </Card.Text> 
                        <div className="rodape-card">
                        <Card.Link href="#">Salvar</Card.Link>
                        <MdShare/>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card-nota">
                    <Card.Body>
                        <div className="card-nota-titulo">
                            <span className="span-textarea-cardnota-titulo" role="textbox" contentEditable></span>   
                            <MdClose/>
                        </div>
                        <Card.Text>
                        <span className="span-textarea-cardnota" role="textbox" contentEditable></span>   
                         </Card.Text> 
                        <div className="rodape-card">
                        <Card.Link href="#">Salvar</Card.Link>
                        <MdShare/>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="card-nota">
                    <Card.Body>
                        <div className="card-nota-titulo">
                            <span className="span-textarea-cardnota-titulo" role="textbox" contentEditable></span>   
                            <MdClose/>
                        </div>
                        <Card.Text>
                        <span className="span-textarea-cardnota" role="textbox" contentEditable></span>   
                         </Card.Text> 
                        <div className="rodape-card">
                        <Card.Link href="#">Salvar</Card.Link>
                        <MdShare/>
                        </div>
                    </Card.Body>
                </Card>                <Card className="card-nota">
                    <Card.Body>
                        <div className="card-nota-titulo">
                            <span className="span-textarea-cardnota-titulo" role="textbox" contentEditable></span>   
                            <MdClose/>
                        </div>
                        <Card.Text>
                        <span className="span-textarea-cardnota" role="textbox" contentEditable></span>   
                         </Card.Text> 
                        <div className="rodape-card">
                        <Card.Link href="#">Salvar</Card.Link>
                        <MdShare/>
                        </div>
                    </Card.Body>
                </Card>                <Card className="card-nota">
                    <Card.Body>
                        <div className="card-nota-titulo">
                            <span className="span-textarea-cardnota-titulo" role="textbox" contentEditable></span>   
                            <MdClose/>
                        </div>
                        <Card.Text>
                        <span className="span-textarea-cardnota" role="textbox" contentEditable></span>   
                         </Card.Text> 
                        <div className="rodape-card">
                        <Card.Link href="#">Salvar</Card.Link>
                        <MdShare/>
                        </div>
                    </Card.Body>
                </Card>
            </div>

            <div className="add-card">
                <MdOutlineAdd/>
            </div>
        </section>
    );

}

export default TelaInicial;