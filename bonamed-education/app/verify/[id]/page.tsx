import Link from "next/link";
import { certificates } from "../../../data/certificates";

function statusInfo(status: "valid" | "revoked" | "expired") {
  if (status === "valid") {
    return { label: "Сертификат действителен", cls: "valid", icon: "✓" };
  }
  if (status === "revoked") {
    return { label: "Сертификат аннулирован", cls: "revoked", icon: "!" };
  }
  return { label: "Срок действия завершён", cls: "expired", icon: "!" };
}

export default function VerifyPage({ params }: { params: { id: string } }) {
  const id = decodeURIComponent(params.id).trim().toUpperCase();
  const certificate = certificates.find((c) => c.id.toUpperCase() === id);

  if (!certificate) {
    return (
      <main className="verifyPage">
        <div className="verifyTop">
          <Link href="/" className="back">← На главную</Link>
          <div className="brand centered">
            <div className="brandMark">B</div>
            <div><strong>BONAMED</strong><span>EDUCATION</span></div>
          </div>
        </div>

        <section className="resultCard notFound">
          <div className="resultIcon">×</div>
          <h1>Сертификат не найден</h1>
          <p>
            В реестре ТОО «Бонамед» сертификат с номером <b>{id}</b> отсутствует.
          </p>
          <p className="muted">
            Проверьте правильность номера или обратитесь в организацию, выдавшую сертификат.
          </p>
          <Link href="/#verify" className="button primary">Проверить другой сертификат</Link>
        </section>
      </main>
    );
  }

  const s = statusInfo(certificate.status);

  return (
    <main className="verifyPage">
      <div className="verifyTop">
        <Link href="/" className="back">← На главную</Link>
        <div className="brand centered">
          <div className="brandMark">B</div>
          <div><strong>BONAMED</strong><span>EDUCATION</span></div>
        </div>
      </div>

      <section className="resultCard">
        <div className={`statusBadge ${s.cls}`}>
          <span>{s.icon}</span>
          {s.label}
        </div>

        <h1>Сертификат подтверждён</h1>
        <p className="muted">Информация получена из реестра сертификатов ТОО «Бонамед».</p>

        <div className="details">
          <div><span>ФИО</span><b>{certificate.name}</b></div>
          <div><span>Название курса</span><b>{certificate.course}</b></div>
          <div><span>Объём обучения</span><b>{certificate.hours}</b></div>
          <div><span>Период проведения</span><b>{certificate.period}</b></div>
          <div><span>Номер сертификата</span><b>{certificate.id}</b></div>
        </div>

        <div className="verificationNote">
          Данная страница подтверждает факт выдачи сертификата и его регистрацию в электронном реестре ТОО «Бонамед».
        </div>

        <Link href="/#verify" className="button secondary dark">Проверить другой сертификат</Link>
      </section>
    </main>
  );
}
