"use client";

import { FormEvent, useState } from "react";

const courses = [
  {
    title: "QADAM 2030",
    text: "Флагманская образовательная программа BONAMED по обновлению методов преподавания в медицинских вузах и развитию цифровой трансформации."
  },
  {
    title: "Современное преподавание",
    text: "PBL, CBL, TBL, обратная связь, оценивание, практико-ориентированное обучение и современные педагогические технологии."
  },
  {
    title: "Искусственный интеллект",
    text: "Практическое применение ИИ преподавателями и руководителями, цифровые инструменты, автоматизация и ответственное внедрение."
  },
  {
    title: "Менеджмент и лидерство",
    text: "Управление командами, стратегическое мышление, лидерство, управление изменениями и развитие организаций."
  },
  {
    title: "Кайдзен и процессы",
    text: "Непрерывное совершенствование, бережливое управление и практическое улучшение процессов."
  },
  {
    title: "Риск-менеджмент и автоматизация",
    text: "Управление рисками, цифровизация и автоматизация рабочих и управленческих процессов."
  }
];

export default function Home() {
  const [id, setId] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const clean = id.trim().toUpperCase();
    if (!clean) return;
    window.location.href = `/verify/${encodeURIComponent(clean)}`;
  }

  return (
    <main>
      <header className="topbar">
        <div className="container nav">
          <div className="brand">
            <div className="brandMark">B</div>
            <div>
              <strong>BONAMED</strong>
              <span>EDUCATION</span>
            </div>
          </div>
          <nav>
            <a href="#qadam">QADAM 2030</a>
            <a href="#courses">Программы</a>
            <a href="#verify">Проверить сертификат</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container heroGrid">
          <div>
            <div className="eyebrow">BONAMED Education</div>
            <h1>Развиваем людей.<br />Трансформируем образование.</h1>
            <p className="lead">
              BONAMED создаёт практические образовательные программы для преподавателей,
              руководителей и организаций. Одно из ключевых направлений — программа QADAM 2030,
              посвящённая обновлению преподавания и цифровой трансформации медицинского образования.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#qadam">О программе QADAM 2030</a>
              <a className="button secondary" href="#verify">Проверить сертификат</a>
            </div>
          </div>

          <div className="heroCard">
            <div className="shield">Q2030</div>
            <h3>QADAM 2030</h3>
            <p>
              Образовательная программа BONAMED, объединяющая современные методы преподавания,
              цифровые технологии, искусственный интеллект и практики развития медицинских вузов.
            </p>
          </div>
        </div>
      </section>

      <section id="qadam" className="section about">
        <div className="container aboutGrid">
          <div>
            <div className="sectionLabel">Флагманская программа</div>
            <h2>QADAM 2030</h2>
          </div>
          <div>
            <p>
              QADAM 2030 — образовательная программа BONAMED, направленная на обновление методов
              преподавания в медицинских вузах, развитие цифровых компетенций преподавателей и
              создание условий для полноценной цифровой трансформации образовательного процесса.
            </p>
            <p>
              В программе объединяются современные подходы к преподаванию, оцениванию,
              искусственному интеллекту, управлению изменениями и внедрению цифровых инструментов
              в реальную работу преподавателей и университетов.
            </p>
            <p>
              Концепция программы вдохновлена передовыми практиками и опытом экспертов Казахстана
              и международного профессионального сообщества в сфере здравоохранения, образования,
              управления и цифровых технологий.
            </p>
          </div>
        </div>
      </section>

      <section id="courses" className="section">
        <div className="container">
          <div className="sectionLabel">Образовательные направления</div>
          <h2>Программы BONAMED</h2>
          <p className="sectionText">
            Программы могут проводиться для университетов, медицинских организаций,
            государственных структур, руководителей и профессиональных команд.
          </p>
          <div className="cards">
            {courses.map((c) => (
              <article className="courseCard" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section formats">
        <div className="container">
          <div className="sectionLabel">Подход BONAMED</div>
          <h2>Обучение, которое приводит к изменениям</h2>
          <div className="formatGrid">
            <div>
              <strong>01</strong>
              <span>Современные практики</span>
              <p>Актуальные международные подходы, адаптированные под реальные задачи организаций Казахстана.</p>
            </div>
            <div>
              <strong>02</strong>
              <span>Практическое применение</span>
              <p>Работа с реальными кейсами, задачами и процессами участников вместо изолированной теории.</p>
            </div>
            <div>
              <strong>03</strong>
              <span>Цифровая трансформация</span>
              <p>ИИ, автоматизация и цифровые инструменты как часть новой образовательной и управленческой среды.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="verify" className="section verifySection">
        <div className="container narrow">
          <div className="sectionLabel">Реестр BONAMED</div>
          <h2>Проверка подлинности сертификата</h2>
          <p className="sectionText">
            Введите уникальный номер сертификата, чтобы подтвердить факт его выдачи
            и основные сведения о пройденной программе.
          </p>

          <form className="verifyBox" onSubmit={handleSubmit}>
            <input
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="BMD-2026-001"
              aria-label="Номер сертификата"
            />
            <button type="submit">Проверить</button>
          </form>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sectionLabel">Форматы обучения</div>
          <h2>Подбираем формат под задачу</h2>
          <div className="formatGrid lightFormats">
            <div><strong>8</strong><span>академических часов</span><p>Практический семинар или интенсив</p></div>
            <div><strong>24</strong><span>академических часа</span><p>Краткосрочная программа обучения</p></div>
            <div><strong>60</strong><span>академических часов</span><p>Расширенная программа развития компетенций</p></div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footerGrid">
          <div>
            <b>BONAMED Education</b><br />
            <span>Образование • управление • цифровая трансформация</span>
          </div>
          <div>Проверка сертификатов: <b>24/7</b></div>
        </div>
      </footer>
    </main>
  );
}
