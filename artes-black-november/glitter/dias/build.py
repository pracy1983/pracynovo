import random, math, subprocess, os
from PIL import Image, ImageDraw, ImageFilter
D = os.path.dirname(os.path.abspath(__file__))
base = Image.open(os.path.join(D, '..', '..', 'divorcio', 'base4.jpg')).convert('RGB')
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

def sparkle_layer(w, h, n, seed, cols):
    random.seed(seed)
    L = Image.new('RGBA', (w, h), (0, 0, 0, 0)); d = ImageDraw.Draw(L)
    for _ in range(n):
        x, y = random.uniform(0, w), random.uniform(0, h)
        c = random.choice(cols); r = random.choice([1, 1, 1.5, 2, 2.5, 3])
        a = random.randint(120, 255)
        d.ellipse([x-r, y-r, x+r, y+r], fill=c+(a,))
        if random.random() < .06:
            s = random.uniform(8, 22)
            d.line([x-s, y, x+s, y], fill=c+(a,), width=2); d.line([x, y-s, x, y+s], fill=c+(a,), width=2)
    glow = L.filter(ImageFilter.GaussianBlur(4))
    return Image.alpha_composite(glow, L)

def foto(name, box, size, seed, cols, n):
    im = base.crop(box).resize(size, Image.LANCZOS).convert('RGBA')
    sp = sparkle_layer(size[0], size[1], n, seed, cols)
    # menos glitter no centro (rosto)
    m = Image.new('L', size, 255); md = ImageDraw.Draw(m)
    cx, cy = size[0]//2, int(size[1]*.42)
    md.ellipse([cx-size[0]*.2, cy-size[1]*.38, cx+size[0]*.2, cy+size[1]*.38], fill=60)
    m = m.filter(ImageFilter.GaussianBlur(40))
    sp.putalpha(Image.composite(sp.getchannel('A'), Image.new('L', size, 0), m))
    Image.alpha_composite(im, sp).convert('RGB').save(os.path.join(D, name), quality=93)

PINK, GOLD, WHITE, LILAC = (255, 140, 210), (243, 201, 99), (255, 245, 230), (200, 160, 255)
VAR = [
  ('17', 'FALTAM 4 DIAS · SÁB 21/11 · 22H', 'Tem gente que entra no lugar e <b>todo mundo repara</b>. Não é roupa, não é maquiagem. É <b>brilho que vem de dentro</b>, e dá pra acender.', [PINK, GOLD], 700, '#e9a6d6'),
  ('18', 'FALTAM 3 DIAS · SÁB 21/11 · 22H', 'Cansou de <b>passar despercebida</b> no trabalho, no amor, entre os amigos? Gremory é o daimon do <b>magnetismo e da atração</b>.', [GOLD, WHITE], 900, '#f3c963'),
  ('19', 'FALTAM 2 DIAS · SÁB 21/11 · 22H', 'Um banho de brilho pra você <b>voltar a ser vista</b>: magnetismo, atração e <b>amor-próprio</b>. Feito à distância, você recebe em casa.', [PINK, LILAC, GOLD], 1100, '#c9a0ff'),
  ('20', 'É AMANHÃ · SÁBADO · 22H', 'Amanhã eu faço o <b>Banho de Glitter</b> com Gremory. Seu nome no ritual pra você <b>chegar no fim do ano sendo notada</b>.', [PINK, GOLD, WHITE], 1300, '#e9a6d6'),
  ('21', 'É HOJE · 22H', '<b>Última chamada</b> do Banho de Glitter. Hoje às 22h eu acendo o seu brilho com Gremory. <b>Inscrição até as 20h.</b>', [GOLD, PINK, WHITE], 1600, '#f3c963'),
]
CSS = """*{margin:0;box-sizing:border-box}body{width:%dpx;height:%dpx;background:#000;position:relative;overflow:hidden;font-family:'Playfair Display',Georgia,serif;color:#fbf1d8;text-align:center}
.ph{position:absolute;top:0;left:0;width:100%%;height:%dpx;background:url(%s) center top/cover}
.fade{position:absolute;top:0;left:0;right:0;height:%dpx;background:linear-gradient(180deg,rgba(0,0,0,0) 55%%,#000 100%%)}
.frame{position:absolute;inset:26px;border:2px solid #d9a93f;opacity:.8}
.txt{position:absolute;top:%dpx;left:0;right:0;padding:0 70px}
.pill{display:inline-block;color:#1a1207;font:800 28px Montserrat;letter-spacing:3px;padding:12px 30px;border-radius:40px}
h1{font-weight:800;font-size:%dpx;line-height:1.02;margin-top:22px;color:#f3c963}
.com{font-style:italic;font-weight:500;font-size:42px;margin-top:6px}
.desc{font-size:%dpx;line-height:1.27;margin-top:22px}.desc b{color:#f3c963}
.price{display:inline-block;margin-top:22px;font:800 40px Montserrat;color:#1a1207;background:#f3c963;padding:10px 32px;border-radius:14px}
.wa{font:600 28px Montserrat;margin-top:14px}
.next{position:absolute;bottom:%dpx;left:70px;right:70px;border-top:1px solid #8a6a2a;padding-top:16px;font:600 25px Montserrat;color:#e6c98a}.next b{color:#f3c963}"""
HEAD = '<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,500&family=Montserrat:wght@600;800&display=swap" rel="stylesheet"><style>'

def page(fname, w, h, ph_h, img, txt_top, h1, desc_fs, bot, v):
    dia, pill, desc, cols, n, pc = v
    html = HEAD + CSS % (w, h, ph_h, img, ph_h, txt_top, h1, desc_fs, bot) + '</style></head><body><div class="ph"></div><div class="fade"></div><div class="frame"></div>'
    html += f'<div class="txt"><span class="pill" style="background:{pc}">{pill}</span><h1>Banho de<br>Glitter</h1><div class="com">com Gremory · à distância</div><div class="desc">{desc}</div><div class="price">R$ 175</div><div class="wa">Chama no WhatsApp: 11 98479-1926</div></div>'
    html += '<div class="next">PRÓXIMO RITO COLETIVO: <b>Luxúria</b> · sáb 28/11 · com Lilith e Asmodeus<br>Glitter + Luxúria juntos: <b>R$ 329</b> só até 21/11</div></body></html>'
    p = os.path.join(D, fname + '.html'); open(p, 'w', encoding='utf-8').write(html)
    png = os.path.join(D, fname + '.png')
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', f'--window-size={w},{h}', '--virtual-time-budget=4000', f'--screenshot={png}', 'file:///' + p.replace('\\', '/')], capture_output=True)
    Image.open(png).convert('RGB').save(os.path.join(D, fname + '.jpg'), quality=92); os.remove(png)

crops = [(0, 0, 1080, 480), (90, 0, 990, 470), (60, 10, 1020, 470), (140, 0, 940, 470), (0, 0, 1080, 480)]
for i, v in enumerate(VAR):
    dia = v[0]
    foto(f'f{dia}.jpg', crops[i], (1080, 480), i, v[3], v[4])
    foto(f's{dia}.jpg', (200, 0, 880, 480), (1080, 760), i + 50, v[3], v[4] + 400)
    page(f'feed{dia}', 1080, 1350, 470, f'f{dia}.jpg', 440, 90, 35, 60, v)
    page(f'story{dia}', 1080, 1920, 760, f's{dia}.jpg', 740, 110, 40, 140, v)
    print('ok', dia)
