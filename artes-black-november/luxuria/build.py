import subprocess, os
from PIL import Image
D = os.path.dirname(os.path.abspath(__file__))
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
RED = '#c8324a'
HEAD = '''<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,500;1,800&family=Montserrat:wght@600;800&display=swap" rel="stylesheet"><style>
*{margin:0;box-sizing:border-box}
body{width:%(w)dpx;height:%(h)dpx;background:#000 url(fotos/%(img)s) %(pos)s/cover no-repeat;position:relative;overflow:hidden;font-family:'Playfair Display',Georgia,serif;color:#fbf1d8}
.g{position:absolute;inset:0;background:%(grad)s}
.frame{position:absolute;inset:24px;border:2px solid #d9a93f;opacity:.75}
.t{font-weight:800;line-height:.95;color:#f3c963;text-shadow:0 4px 24px #000}
.gr{font-style:italic;font-weight:800;color:#e8566c;text-shadow:0 3px 20px #000}
.d{line-height:1.25;text-shadow:0 2px 14px #000}.d b{color:#f3c963}
.price{display:inline-block;font:800 40px Montserrat;color:#1a1207;background:#f3c963;padding:10px 30px;border-radius:14px}
.wa{font:600 27px Montserrat;text-shadow:0 2px 10px #000}
.next{position:absolute;left:60px;right:60px;bottom:%(nb)dpx;border-top:1px solid #8a6a2a;padding-top:14px;font:600 24px Montserrat;color:#e6c98a;text-align:center;text-shadow:0 2px 10px #000}.next b{color:#f3c963}
.cnt{font-family:Montserrat;font-weight:800;color:#fff;background:%(red)s;letter-spacing:2px}
%(css)s
</style></head><body><div class="g"></div><div class="frame"></div>%(body)s
<div class="next">PRÓXIMO RITO COLETIVO: <b>Ritual dos Portais</b> · prosperidade 2027<br>com Bune, Paimon e Belial · inscrições a partir de 05/12</div></body></html>'''
PW = '<div class="price">R$ 225</div><div class="wa" style="margin-top:12px">Chama no WhatsApp: 11 98479-1926</div>'
T = '<div class="t" style="font-size:%dpx">Luxúria</div>'
GR = '<div class="gr" style="font-size:%dpx;margin-top:6px">com Lilith e Asmodeus</div>'
DATA = 'Sábado 28/11, 22h, à distância.'

# layouts: (foto, posição, gradiente, css, corpo)
BOT = 'linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(0,0,0,.85) 62%,#000 100%)'
LEFT = 'linear-gradient(90deg,rgba(0,0,0,.92) 0,rgba(0,0,0,.7) 42%,rgba(0,0,0,0) 62%),linear-gradient(180deg,rgba(0,0,0,0) 70%,#000 100%)'
RIGHT = 'linear-gradient(270deg,rgba(0,0,0,.93) 0,rgba(0,0,0,.7) 42%,rgba(0,0,0,0) 62%),linear-gradient(180deg,rgba(0,0,0,0) 70%,#000 100%)'
TOP = 'linear-gradient(180deg,#000 0,rgba(0,0,0,.75) 30%,rgba(0,0,0,0) 48%,rgba(0,0,0,0) 72%,rgba(0,0,0,.9) 88%)'
TB = 'linear-gradient(180deg,rgba(0,0,0,.85) 0,rgba(0,0,0,0) 22%,rgba(0,0,0,0) 50%,rgba(0,0,0,.88) 68%,#000 100%)'
CSS_BOT = '.blk{position:absolute;left:0;right:0;bottom:var(--b);text-align:center;padding:0 70px}'
CSS_L = '.blk{position:absolute;left:70px;width:560px;top:var(--t)}'
CSS_R = '.blk{position:absolute;right:70px;width:540px;top:var(--t);text-align:right}'
CSS_TOP = '.blk{position:absolute;left:0;right:0;top:70px;text-align:center;padding:0 70px}'
BADGE = '.badge{position:absolute;top:60px;right:60px;width:210px;height:210px;border-radius:50%;background:' + RED + ';color:#fff;text-align:center;font-family:Montserrat;font-weight:800;display:flex;flex-direction:column;justify-content:center;box-shadow:0 0 40px rgba(200,50,74,.6)}.badge .n{font-size:96px;line-height:.9}.badge .s{font-size:24px;letter-spacing:2px}'
PILL = '.cnt{display:inline-block;font-size:30px;padding:12px 26px;border-radius:40px}'
TILT = '.tilt{position:absolute;left:50%;transform:translateX(-50%) rotate(-3deg);bottom:var(--c);font-size:40px;padding:16px 40px;border-radius:12px;white-space:nowrap}'
RIB = '.rib{position:absolute;top:70px;left:-90px;transform:rotate(-35deg);font-size:34px;padding:14px 120px}'
HOJE = '.top{position:absolute;top:60px;left:0;right:0;text-align:center}.top .h{font:800 120px Montserrat;color:#e8566c;letter-spacing:6px;text-shadow:0 0 40px rgba(200,50,74,.7)}.top .s{font:800 34px Montserrat;color:#f3c963;letter-spacing:4px}'

def d(fs, txt): return f'<div class="d" style="font-size:{fs}px;margin-top:16px">{txt}</div>'
def pw(): return '<div style="margin-top:18px">' + PW + '</div>'

L = {
 '22': ('l1.png', 'center top', BOT, BADGE + CSS_BOT,
   '<div class="badge"><div class="s">FALTAM</div><div class="n">6</div><div class="s">DIAS</div></div><div class="blk">' + T % 110 + GR % 54 + d(34, 'Desejo não some. <b>Ele fica trancado.</b> No ritual eu abro o seu magnetismo sensual. <b>' + DATA + '</b>') + pw() + '</div>'),
 '23': ('l2.png', '70% top', LEFT, CSS_L + PILL,
   '<div class="blk"><span class="cnt">FALTAM 5 DIAS</span><div class="gr" style="font-size:104px;margin-top:26px;line-height:.95">Lilith</div><div class="d" style="font-size:28px;margin-top:6px;font-family:Montserrat;font-weight:600;letter-spacing:3px">A MULHER QUE NÃO PEDE LICENÇA</div><div class="t" style="font-size:84px;margin-top:30px">Luxúria</div>' + d(33, 'Pra você voltar a se permitir <b>querer, e ser querida</b>. ' + DATA) + pw() + '</div>'),
 '24': ('l3.png', 'center 15%', BOT, CSS_BOT + '.tilt{position:absolute;top:70px;left:70px;transform:rotate(-4deg);font-size:40px;padding:16px 40px;border-radius:12px}',
   '<div class="cnt tilt">FALTAM 4 DIAS</div><div class="blk"><div class="d" style="font-size:30px;font-family:Montserrat;font-weight:800;letter-spacing:5px;color:#e8566c">SÁBADO 28/11 · 22H · À DISTÂNCIA</div><div class="t" style="font-size:120px;margin-top:10px">Luxúria</div>' + d(36, 'Não é só sobre sexo. É <b>presença</b>: aquela pessoa que entra e muda o clima da sala. Com <b>Lilith e Asmodeus</b>.') + pw() + '</div>'),
 '25': ('l4.png', '20% top', RIGHT, CSS_R + RIB,
   '<div class="cnt rib">FALTAM 3 DIAS</div><div class="blk"><div class="t" style="font-size:100px">Luxúria</div><div class="d" style="font-size:28px;margin-top:20px;font-family:Montserrat;font-weight:600;letter-spacing:3px">COM O REI DO DESEJO</div><div class="gr" style="font-size:96px;line-height:1">Asmodeus</div>' + d(33, 'O daemon da Goétia mais ligado à luxúria. Junto com <b>Lilith</b>, abre o seu magnetismo. ' + DATA) + pw() + '</div>'),
 '26': ('l5.png', 'center 30%', BOT, BADGE + CSS_BOT,
   '<div class="badge"><div class="s">FALTAM</div><div class="n">2</div><div class="s">DIAS</div></div><div class="blk">' + T % 110 + GR % 54 + d(34, 'Faz quanto tempo que ninguém <b>te deseja de verdade</b>? Magnetismo <b>s3xual</b> pra atrair desejo e s3xo. <b>' + DATA + '</b>') + pw() + '</div>'),
 '27': ('l6.png', '30% top', RIGHT, CSS_R + PILL,
   '<div class="blk"><span class="cnt">É AMANHÃ · 22H</span><div class="t" style="font-size:96px;margin-top:26px">Luxúria</div><div class="gr" style="font-size:56px;margin-top:6px">com Lilith<br>e Asmodeus</div>' + d(33, 'Primeiro solta, depois brilha, <b>depois atrai</b>. Magnetismo <b>s3xual</b> pra atrair desejo e s3xo. É amanhã.') + pw() + '</div>'),
 '28': ('l7.png', 'center 30%', TB, HOJE + CSS_BOT,
   '<div class="top"><div class="h">HOJE</div><div class="s">22H · INSCRIÇÃO ATÉ AS 20H</div></div><div class="blk">' + T % 110 + GR % 58 + d(34, '<b>Última chamada.</b> Magnetismo <b>s3xual</b> pra atrair desejo e s3xo. Quem se permite querer, atrai.') + pw() + '</div>'),
}
SIZES = {'feed': (1080, 1350, dict(b='170px', t='120px', c='190px'), 60),
         'story': (1080, 1920, dict(b='290px', t='300px', c='320px'), 150)}
for dia, (img, pos, grad, css0, body) in L.items():
    if not os.path.exists(os.path.join(D, 'fotos', img)):
        print('falta', img); continue
    for kind, (w, h, var, nb) in SIZES.items():
        css = ':root{' + ';'.join(f'--{k}:{x}' for k, x in var.items()) + '}' + css0
        html = HEAD % dict(w=w, h=h, img=img, pos=pos, grad=grad, css=css, body=body, nb=nb, red=RED)
        p = os.path.join(D, f'{kind}{dia}.html'); open(p, 'w', encoding='utf-8').write(html)
        png = p[:-5] + '.png'
        subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', f'--window-size={w},{h}', '--virtual-time-budget=4000', f'--screenshot={png}', 'file:///' + p.replace('\\', '/')], capture_output=True)
        Image.open(png).convert('RGB').save(p[:-5] + '.jpg', quality=90); os.remove(png)
days = [k for k in L if os.path.exists(os.path.join(D, f'feed{k}.jpg'))]
for kind, (w, h) in [('feed', (360, 450)), ('story', (300, 533))]:
    ims = [Image.open(os.path.join(D, f'{kind}{k}.jpg')).resize((w, h)) for k in days]
    c = Image.new('RGB', (w * len(ims), h)); [c.paste(im, (i * w, 0)) for i, im in enumerate(ims)]; c.save(os.path.join(D, f'_prev_{kind}.jpg'))
print('ok', days)
