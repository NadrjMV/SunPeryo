# Sun Plan - Sistema de Gestão de Rondas

**Sun Plan** é uma aplicação web completa e robusta, projetada para o gerenciamento e monitoramento de rondas de segurança. O sistema oferece interfaces distintas e seguras para administradores e vigilantes, garantindo controle total sobre as operações e facilidade de uso em campo.

---

## Funcionalidades

O sistema é dividido em dois painéis principais, cada um com funcionalidades específicas para o seu tipo de usuário.

### Painel do Administrador

Acessado via desktop, o painel do administrador é a central de controle completa da operação.

* **Dashboard Geral:** Visualização rápida de estatísticas importantes, como o número de vigilantes ativos e o total de rondas realizadas no dia.
* **Gerenciamento de Vigilantes:** Cadastre, visualize e edite os perfis dos vigilantes. Atribua ou altere permissões de acesso (promover para admin ou rebaixar para vigilante).
* **Gestão de Pontos de Verificação:**
    * Crie e delete pontos de ronda oficiais.
    * **Gerador de QR Code:** Ao criar um ponto, o sistema gera automaticamente um QR Code personalizado com a logo da empresa, pronto para ser baixado e impresso.
* **Visualização de Rondas:** Acesse o histórico completo de rondas de qualquer vigilante, filtrado por data.
* **Mapa de Calor:** Analise um mapa de calor gerado a partir dos dados de geolocalização de cada ronda, permitindo identificar áreas com maior ou menor cobertura.
* **Central de Alertas:** Envie mensagens e alertas importantes para todos os vigilantes de uma só vez.
* **Relatórios:** Uma seção dedicada para a visualização de resumos e estatísticas gerais da operação.

### Painel do Vigilante

Projetado com uma abordagem "mobile-first", mas totalmente funcional no desktop, o painel do vigilante é a ferramenta de campo para o registro das atividades.

* **Registro de Rondas Simplificado:**
    * **Escaneamento de QR Code:** O vigilante utiliza a câmera do celular para escanear os QR Codes cadastrados, validando sua passagem pelo ponto. O app impede o registro de códigos não autorizados.
    * **Registro Fotográfico:** Possibilidade de tirar uma foto como evidência visual do local, que fica atrelada ao registro da ronda.
* **Geolocalização Automática:** Cada registro (QR Code ou foto) é salvo automaticamente com as coordenadas geográficas precisas do local.
* **Status de Localização:** A interface exibe um status claro sobre a permissão de localização, guiando o usuário a ativá-la caso esteja bloqueada.
* **Operação Offline:** Rondas podem ser registradas mesmo sem conexão com a internet. Os dados são salvos localmente e sincronizados automaticamente assim que a conexão for restabelecida.
* **Histórico Pessoal:** O vigilante pode acessar seu próprio histórico de rondas, organizado por data.
* **Recebimento de Alertas:** Um ícone de notificação alerta o vigilante sobre novas mensagens enviadas pelo administrador.

---

## Tecnologias Utilizadas

* **Frontend:** HTML5, CSS3 com TailwindCSS, JavaScript (ES6 Modules)
* **Backend & Banco de Dados:** Google Firebase (Authentication, Firestore Database)
* **Bibliotecas:** Leaflet.js (Mapas), Leaflet.heat (Mapa de Calor), html5-qrcode (Scanner de QR Code), qrcode-generator (Gerador de QR Code), JSZip (Download de Fotos).

---

## Direitos Autorais e Uso

Este é um projeto de autoria própria e de código fechado. Todos os direitos sobre o código-fonte, design e funcionalidades são reservados.

**A cópia, distribuição, modificação ou replicação deste software, no todo ou em parte, não é permitida.** Este repositório serve exclusivamente como um portfólio para demonstrar as capacidades técnicas e funcionais da aplicação.
