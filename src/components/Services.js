import React from "react";
import Title from "./Title";
import { service } from "./Service";
const Services = () => {
  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" subTitle="services" />
        <div className="section-center services-center">
          {service.map((services) => {
            const { title, icon, text } = services;
            return (
              <article key={services.id} className="service">
                <span className="service-icon">
                  <i className={icon}></i>
                </span>
                <div className="service-info">
                  <h4 className="service-title">{title}</h4>
                  <p className="service-text">{text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
