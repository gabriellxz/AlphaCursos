import { IconMessageCirclePin, IconCalendar, IconUser } from "@tabler/icons-react";
import AlphaLogo from '@/assets/iconCursos/alphaCursosLogoType.svg'
import Image from "next/image";

/*icons cursos*/
import admIcon from '@/assets/iconCursos/adm.png'
import ccIcon from '@/assets/iconCursos/corteCostura.png'
import cnIcon from '@/assets/iconCursos/culinaria.png'
import dsIcon from '@/assets/iconCursos/designSombrancelha.png'
import ftIcon from '@/assets/iconCursos/fotografia.png'
import inforIcon from '@/assets/iconCursos/infor.png'
import ndIcon from '@/assets/iconCursos/nailDesign.png'
import ocIcon from '@/assets/iconCursos/oprCaixa.png'

/*icons patrocinadores*/
import assai from '@/assets/iconPatrocinadores/assai.png'
import casaBlanca from '@/assets/iconPatrocinadores/casaBlanca.png'
import correios from '@/assets/iconPatrocinadores/correios.png'
import ibyte from '@/assets/iconPatrocinadores/ibyte.jpg'
import mercadoLivre from '@/assets/iconPatrocinadores/mercadoLivre.png'
import oBoticario from '@/assets/iconPatrocinadores/oBoticario.png'
import superR from '@/assets/iconPatrocinadores/superR.png'
import { useState } from "react";

export default function Home() {

  const [aberto, setAberto] = useState(false)

  return (
    <>
      <header className="header-ac fixed w-[100%]">
        <div className="header-information-ac px-1">
          <div className="box-header-information-ac">
            <IconMessageCirclePin />
            <p>
              <span className="font-bold">Fale conosco</span><br />
              (85) 9999-9999
            </p>
          </div>
          <div className="box-header-information-ac bg-zinc-700 p-3">
            <IconCalendar />
            <p>
              <span className="font-bold">Atendimento</span><br />
              seg à qui das 8:30h às 15h
            </p>
          </div>
          <div className="box-header-information-ac">
            <IconUser />
            <span className="font-bold bg-zinc-700 p-1 rounded-md">Área do cliente</span><br />
          </div>
        </div>
        <nav className="nav-ac">
          <div>
            <Image src={AlphaLogo} alt="logo-icon" width={90} />
          </div>
          <div className="ul-nav-ac">
            <ul className="ul-container">
              <li>
                <a href="#inicio">Início</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#cursos">Cursos</a>
              </li>
              <li>
                <a href="#parcerias">Parcerias</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
              <li>
                <button className="btn-ul w-[100%]">Matricula</button>
              </li>
            </ul>
          </div>
          <button className="btn-mobile">Matricula</button>

          {/* NavBar mobile */}
          <button className="btn-mobile" onClick={() => setAberto(!aberto)}>
            Menu
          </button>
          {aberto &&
            <div className="ul-nav-ac-mobile">
              <ul className="ul-container-mobile">
                <li>
                  <a href="#inicio">Início</a>
                </li>
                <li>
                  <a href="#sobre">Sobre</a>
                </li>
                <li>
                  <a href="#cursos">Cursos</a>
                </li>
                <li>
                  <a href="#parcerias">Parcerias</a>
                </li>
                <li>
                  <a href="#contato">Contato</a>
                </li>
                <li>
                  <button className="btn-ul w-[100%]">Matricula</button>
                </li>
              </ul>
            </div>
          }
        </nav>
      </header>
      <main>
        {/* <Background /> */}
        <section className="section-init" id="inicio">
          <div className="container-text-init">
            <h2 className={`
                text-2xl font-bold text-white
              `}>Formando microempreendedores!</h2>
            <p className="max-w-[500px] w-[100%] bg-zinc-600 text-white p-1 rounded-md">
              A Alpha cursos oferece um ensino profissional ao aluno,
              com uma estrutura de ponta com tempo integral e ótimos educadores.
            </p>
          </div>
          <div className="container-logo">
            <Image src={AlphaLogo} alt="logo-alpha" />
          </div>
        </section>
        <section className="section-about" id="sobre">
          <div className="container-section-about">
            <div className="box-section-about">
              <div>
                <h2 className="text-2xl font-bold">Quem somos?</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facilis itaque numquam reprehenderit.
                  Saepe velit inventore pariatur consectetur iusto! Voluptates officia iste neque rerum qui perspiciatis
                  inventore dolor delectus beatae.
                </p>
              </div>
            </div>
            <div className="box-section-about">
              <div>
                <h2 className="text-2xl font-bold">Objetivos</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facilis itaque numquam reprehenderit.
                  Saepe velit inventore pariatur consectetur iusto! Voluptates officia iste neque rerum qui perspiciatis
                  inventore dolor delectus beatae.
                </p>
              </div>
            </div>
            <div className="box-section-about">
              <div>
                <h2 className="text-2xl font-bold">Processo seletivo</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facilis itaque numquam reprehenderit.
                  Saepe velit inventore pariatur consectetur iusto! Voluptates officia iste neque rerum qui perspiciatis
                  inventore dolor delectus beatae.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section" id="cursos">
          <div className="container-currents p-3">
            <div>
              <h2 className="text-center text-2xl font-bold">Cursos</h2>
              <div className="container-currents">
                <div className="container-box">
                  <div className="box">
                    <Image src={admIcon} alt="admIcon" width={150} className="image" />
                    <span>Administração</span>
                  </div>
                  <div className="box">
                    <Image src={ccIcon} alt="ccIcon" width={150} className="image" />
                    <span>Corte e costura</span>
                  </div>
                  <div className="box">
                    <Image src={cnIcon} alt="cnIcon" width={150} className="image" />
                    <span>Culinária</span>
                  </div>
                  <div className="box">
                    <Image src={dsIcon} alt="dsIcon" width={150} className="image" />
                    <span>Design de sombrancelha</span>
                  </div>
                  <div className="box">
                    <Image src={ftIcon} alt="ftIcon" width={150} className="image" />
                    <span>Fotográfia</span>
                  </div>
                  <div className="box">
                    <Image src={inforIcon} alt="inforIcon" width={150} className="image" />
                    <span>Informática</span>
                  </div>
                  <div className="box">
                    <Image src={ndIcon} alt="ndIcon" width={150} className="image" />
                    <span>Nail design</span>
                  </div>
                  <div className="box">
                    <Image src={ocIcon} alt="ocIcon" width={150} className="image" />
                    <span>Operador de caixa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-zinc-200" id="parcerias">
          <div className="container-currents p-3">
            <div>
              <h2 className="text-center text-2xl font-bold">Parcerias</h2>
              <div className="container-currents">
                <div className="container-box-parcerias">
                  <div className="box">
                    <Image src={assai} alt="assai" width={150} className="image" />
                  </div>
                  <div className="box">
                    <Image src={casaBlanca} alt="cb" width={150} className="image" />
                  </div>
                  <div className="box">
                    <Image src={correios} alt="correios" width={150} className="image" />
                  </div>
                  <div className="box">
                    <Image src={ibyte} alt="ibyte" width={150} className="image" />
                  </div>
                  <div className="box">
                    <Image src={mercadoLivre} alt="mlivre" width={150} className="image" />
                  </div>
                  <div className="box">
                    <Image src={oBoticario} alt="oBoticario" width={150} className="image" />
                  </div>
                  <div className="box">
                    <Image src={superR} alt="superR" width={150} className="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-contact" id="contato">
          <div className="container-form">
            <form className="form">
              <div>
                <label>Seu nome*</label> <br />
                <input type="text" className="input" />
              </div>
              <div className="box-email-tel">
                <div className="max-w-[300px] w-[100%]">
                  <label>Seu e-mail*</label><br />
                  <input type="email" className="input" />
                </div>
                <div className="max-w-[300px] w-[100%]">
                  <label>Seu telefone*</label><br />
                  <input type="text" className="input" />
                </div>
              </div>
              <div>
                <label>Mensagem</label><br />
                <textarea name="" id="" cols={30} rows={10}></textarea>
              </div>
              <button className="btn-form w-[100%]">Enviar</button>
            </form>
          </div>
          <div className="text-white ">
            <h2 className="text-2xl font-bold">Fale conosco</h2>
            <p className="max-w-[300px]">
              Nos envie uma mensagem preenchendo o formulário,
              entraremos em contato o mais rápido possivel!
            </p>
          </div>
        </section>
      </main>
      <footer className="flex justify-center p-2">
        <div className="flex justify-around items-center">
          <div>
            <Image src={AlphaLogo} alt="logo-icon" width={90} />
          </div>
          <div>
            Alpha cursos 	&copy; 2023
          </div>
        </div>
      </footer>
    </>
  )
}
