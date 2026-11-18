import subprocess, os
from PIL import Image
D = os.path.dirname(os.path.abspath(__file__))
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
HEAD = '''<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,500;1,800&family=Montserrat:wght@600;800&display=swap" rel="stylesheet"><style>
*{margin:0;box-sizing:border-box}
body{width:%(w)dpx;height:%(h)dpx;background:#000 url(fotos/%(img)s) %(pos)s/cover no-repeat;position:relative;overflow:hidden;font-family:'Playfair Display',Georgia,serif;color:#fbf1d8}
.g{position:absolute;inset:0;background:%(grad)s}
.frame{position:absolute;inset:24px;border:2px solid #d9a93f;opacity:.75}
.gold{color:#f3c963}.pink{color:#f2a6d8}
.t{font-weight:800;line-height:.95;color:#f3c963;text-shadow:0 4px 24px #000}
.gr{font-style:italic;font-weight:800;color:#f2a6d8;text-shadow:0 3px 20px #000}
.d{line-height:1.25;text-shadow:0 2px 14px #000}.d b{color:#f3c963}
.price{display:inline-block;font:800 40px Montserrat;color:#1a1207;background:#f3c963;padding:10px 30px;border-radius:14px}
.wa{font:600 27px Montserrat;text-shadow:0 2px 10px #000}
.next{position:absolute;left:60px;right:60px;bottom:%(nb)dpx;border-top:1px solid #8a6a2a;padding-top:14px;font:600 24px Montserrat;color:#e6c98a;text-align:center;text-shadow:0 2px 10px #000}.next b{color:#f3c963}
.cnt{font-family:Montserrat;font-weight:800;color:#1a1207;background:#f2a6d8;letter-spacing:2px}
%(css)s
</style></head><body><div class="g"></div><div class="frame"></div>%(body)s
<div class="next">PRÓXIMO RITO COLETIVO: <b>Luxúria</b> · sáb 28/11 · com Lilith e Asmodeus<br>Glitter + Luxúria juntos: <b>R$ 380</b> só até 21/11</div></body></html>'''
PW = '<div class="price">R$ 175</div><div class="wa" style="margin-top:12px">Chama no WhatsApp: 11 98479-1926</div>'

L = {
 '17': dict(img='p1.png', pos='center top',
   grad='linear-gradient(180deg,rgba(0,0,0,0) 35%,rgba(0,0,0,.85) 62%,#000 100%)',
   css='.badge{position:absolute;top:60px;right:60px;width:210px;height:210px;border-radius:50%;background:#f2a6d8;color:#1a1207;text-align:center;font-family:Montserrat;font-weight:800;display:flex;flex-direction:column;justify-content:center;box-shadow:0 0 40px rgba(242,166,216,.6)}.badge .n{font-size:96px;line-height:.9}.badge .s{font-size:24px;letter-spacing:2px}.blk{position:absolute;left:0;right:0;bottom:var(--b);text-align:center;padding:0 70px}',
   body='<div class="badge"><div class="s">FALTAM</div><div class="n">4</div><div class="s">DIAS</div></div><div class="blk"><div class="t" style="font-size:96px">Banho de Glitter</div><div class="gr" style="font-size:64px;margin-top:8px">com Gremory</div><div class="d" style="font-size:34px;margin-top:16px">Tem gente que entra no lugar e <b>todo mundo repara</b>. É brilho que vem de dentro, e dá pra acender. <b>Sábado 21/11, 22h, à distância.</b></div><div style="margin-top:18px">'+PW+'</div></div>'),
 '18': dict(img='p2.png', pos='70% top',
   grad='linear-gradient(90deg,rgba(0,0,0,.92) 0,rgba(0,0,0,.7) 42%,rgba(0,0,0,0) 62%),linear-gradient(180deg,rgba(0,0,0,0) 70%,#000 100%)',
   css='.blk{position:absolute;left:70px;width:560px;top:var(--t)}.cnt{display:inline-block;font-size:30px;padding:12px 26px;border-radius:40px}',
   body='<div class="blk"><span class="cnt">FALTAM 3 DIAS</span><div class="gr" style="font-size:110px;margin-top:26px;line-height:.95">Gremory</div><div class="d" style="font-size:30px;margin-top:6px;font-family:Montserrat;font-weight:600;letter-spacing:3px">O DAEMON DA ATRAÇÃO</div><div class="t" style="font-size:76px;margin-top:30px">Banho de<br>Glitter</div><div class="d" style="font-size:33px;margin-top:20px">Cansou de <b>passar despercebida</b> no trabalho, no amor, entre os amigos? <b>Sábado 21/11, 22h.</b></div><div style="margin-top:22px">'+PW+'</div></div>'),
 '19': dict(img='p3.png', pos='center bottom',
   grad='linear-gradient(180deg,#000 0,rgba(0,0,0,.75) 30%,rgba(0,0,0,0) 48%,rgba(0,0,0,0) 72%,rgba(0,0,0,.9) 88%)',
   css='.blk{position:absolute;left:0;right:0;top:70px;text-align:center;padding:0 70px}.cnt{position:absolute;left:50%;transform:translateX(-50%) rotate(-3deg);bottom:var(--c);font-size:40px;padding:16px 40px;border-radius:12px;white-space:nowrap}',
   body='<div class="blk"><div class="d" style="font-size:30px;font-family:Montserrat;font-weight:800;letter-spacing:5px;color:#f2a6d8">SÁBADO 21/11 · 22H · À DISTÂNCIA</div><div class="t" style="font-size:104px;margin-top:16px">Banho de Glitter</div><div class="d" style="font-size:36px;margin-top:14px">Sente no seu trono. <b class="pink" style="font-style:italic">Gremory</b> acende o seu brilho: <b>magnetismo, atração e amor-próprio</b>.</div><div style="margin-top:20px">'+PW+'</div></div><div class="cnt">FALTAM SÓ 2 DIAS</div>'),
 '20': dict(img='p4.png', pos='20% top',
   grad='linear-gradient(270deg,rgba(0,0,0,.93) 0,rgba(0,0,0,.7) 42%,rgba(0,0,0,0) 62%),linear-gradient(180deg,rgba(0,0,0,0) 70%,#000 100%)',
   css='.blk{position:absolute;right:70px;width:540px;top:var(--t);text-align:right}.rib{position:absolute;top:70px;left:-90px;transform:rotate(-35deg);background:#f2a6d8;color:#1a1207;font:800 34px Montserrat;letter-spacing:3px;padding:14px 120px}',
   body='<div class="rib">É AMANHÃ</div><div class="blk"><div class="t" style="font-size:88px">Banho de<br>Glitter</div><div class="d" style="font-size:30px;margin-top:20px;font-family:Montserrat;font-weight:600;letter-spacing:3px">COM O DAEMON</div><div class="gr" style="font-size:100px;line-height:1">Gremory</div><div class="d" style="font-size:33px;margin-top:20px">Seu nome no ritual pra você <b>chegar no fim do ano sendo notada</b>. Sábado, 22h, à distância.</div><div style="margin-top:22px">'+PW+'</div></div>'),
 '21': dict(img='p5.png', pos='center 30%',
   grad='linear-gradient(180deg,rgba(0,0,0,.85) 0,rgba(0,0,0,0) 22%,rgba(0,0,0,0) 50%,rgba(0,0,0,.88) 68%,#000 100%)',
   css='.top{position:absolute;top:60px;left:0;right:0;text-align:center}.top .h{font:800 120px Montserrat;color:#f2a6d8;letter-spacing:6px;text-shadow:0 0 40px rgba(242,166,216,.7)}.top .s{font:800 34px Montserrat;color:#f3c963;letter-spacing:4px}.blk{position:absolute;left:0;right:0;bottom:var(--b);text-align:center;padding:0 70px}',
   body='<div class="top"><div class="h">HOJE</div><div class="s">22H · INSCRIÇÃO ATÉ AS 20H</div></div><div class="blk"><div class="t" style="font-size:92px">Banho de Glitter</div><div class="gr" style="font-size:68px;margin-top:6px">com Gremory</div><div class="d" style="font-size:34px;margin-top:14px"><b>Última chamada.</b> Hoje eu acendo o seu brilho, à distância.</div><div style="margin-top:18px">'+PW+'</div></div>'),
}
SIZES = {'feed': (1080, 1350, dict(b='170px', t='120px', c='190px'), 60),
         'story': (1080, 1920, dict(b='290px', t='300px', c='320px'), 150)}
for dia, v in L.items():
    for kind, (w, h, var, nb) in SIZES.items():
        css = ':root{' + ';'.join(f'--{k}:{x}' for k, x in var.items()) + '}' + v['css']
        html = HEAD % dict(w=w, h=h, img=v['img'], pos=v['pos'], grad=v['grad'], css=css, body=v['body'], nb=nb)
        p = os.path.join(D, f'{kind}{dia}.html'); open(p, 'w', encoding='utf-8').write(html)
        png = p[:-5] + '.png'
        subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', f'--window-size={w},{h}', '--virtual-time-budget=4000', f'--screenshot={png}', 'file:///' + p.replace('\\', '/')], capture_output=True)
        Image.open(png).convert('RGB').save(p[:-5] + '.jpg', quality=92); os.remove(png)
for kind, (w, h) in [('feed', (432, 540)), ('story', (360, 640))]:
    ims = [Image.open(os.path.join(D, f'{kind}{d}.jpg')).resize((w, h)) for d in L]
    c = Image.new('RGB', (w * 5, h)); [c.paste(im, (i * w, 0)) for i, im in enumerate(ims)]; c.save(os.path.join(D, f'_prev_{kind}.jpg'))
print('ok')
