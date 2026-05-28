# Pracy Site - Deployment Guide

## VPS Easypanel Setup

### Credenciais
- **URL:** https://vrdrcy.easypanel.host/
- **Email:** paularacy@gmail.com

### Passos para Deploy

#### 1. Clonar o repositório na VPS
```bash
cd /home/pracy
git clone https://github.com/pracy1983/pracynovo.git
cd pracynovo
```

#### 2. Instalar dependências
```bash
npm install
```

#### 3. Build do projeto
```bash
npm run build
```

#### 4. Iniciar o servidor
```bash
npm start
```

O site estará disponível em: `http://localhost:3000`

#### 5. Configurar com Docker (Recomendado)
```bash
docker-compose up -d
```

#### 6. Configurar Nginx como reverse proxy
```nginx
server {
    listen 80;
    server_name pracy.com.br www.pracy.com.br;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

#### 7. SSL com Let's Encrypt
```bash
certbot certonly --standalone -d pracy.com.br -d www.pracy.com.br
```

### Estrutura de Pastas na VPS
```
/home/pracy/
├── pracynovo/          # Repositório do site
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── styles/
│   ├── package.json
│   ├── Dockerfile
│   └── docker-compose.yml
└── nginx/              # Configuração Nginx
    └── pracy.conf
```

### Monitoramento
- Logs: `docker logs -f pracy-site`
- Status: `docker ps`
- Restart: `docker-compose restart`

### Atualizações
```bash
cd /home/pracy/pracynovo
git pull origin master
npm install
npm run build
docker-compose restart
```

---

## Próximas Etapas

1. ✅ Site desenvolvido e testado
2. ⏳ Deploy na VPS
3. ⏳ Configurar domínio pracy.com.br
4. ⏳ SSL/HTTPS
5. ⏳ Monitoramento e manutenção