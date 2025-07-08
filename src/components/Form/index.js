// src/app/components/Form/index.js
'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './form.module.css'
import { FaDownload, FaPaperPlane  } from 'react-icons/fa'


export default function Form() {
  const [form, setForm] = useState({
    company: '',
    cnpj: '',
    applicant: '',
    phone: '',
    email: '',
    sheetLink: '',
    requestType: '',
    quantity: '',
    notes: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    // envie os dados para sua API aqui...
    alert('Formulário enviado com sucesso!')
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.grid2}>
        <div className={styles.field}>
          <label htmlFor="company">Nome da Empresa</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="cnpj">CNPJ</label>
          <input
            id="cnpj"
            name="cnpj"
            type="text"
            value={form.cnpj}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.grid2}>
        <div className={styles.field}>
          <label htmlFor="applicant">Nome do Solicitante</label>
          <input
            id="applicant"
            name="applicant"
            type="text"
            value={form.applicant}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">Telefone</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className={styles.grid2}>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="sheetLink">Link da Planilha</label>
          <div className={styles.inputWithButton}>
            <input
              id="sheetLink"
              name="sheetLink"
              type="url"
              value={form.sheetLink}
              onChange={handleChange}
            />
            <button type="button" className={styles.downloadBtn}>
             <FaDownload color="#fff"  />
            </button>
          </div>
        </div>
      </div>

      <div className={styles.grid2}>
        <div className={styles.field}>
          <label htmlFor="requestType">Tipo de Solicitação</label>
          <select
            id="requestType"
            name="requestType"
            value={form.requestType}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="material">Declaração</option>
            <option value="suporte">Certificado</option>
            <option value="suporte">Outro</option>
            {/* … */}
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="quantity">Quantidade</label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            value={form.quantity}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="notes">Observações (Opcional)</label>
        <textarea
          id="notes"
          name="notes"
          rows="4"
          value={form.notes}
          onChange={handleChange}
        />
      </div>

      <div className={styles.footer}>
       
        <button type="submit" className={styles.submitBtn}>
          <FaPaperPlane color="#fff" style={{ marginRight: '0.5rem' }} />
          Enviar Solicitação
        </button>
      </div>
    </form>
  )
}
