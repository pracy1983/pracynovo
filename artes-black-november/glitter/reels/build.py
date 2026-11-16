import os, subprocess, textwrap
from PIL import Image, ImageDraw, ImageFont
HERE=os.path.dirname(os.path.abspath(__file__))
VID=r"G:\Meu Drive\Videos Pracy\Fotos paula IA\fev2026 videos"
LIST=dict(l.split("|",1) for l in open(r"G:\Meu Drive\Videos Pracy\reels-receitas-nov2026\_codigo\list.txt",encoding="utf-8").read().splitlines())
MUS=r"G:\Meu Drive\gravaçoes\bandas IA\sons of our temple"
MS=[MUS+r"\musicas\Go find the key.wav",MUS+r"\musicas\I choose to stay.wav",MUS+r"\Astaroth.mp3",MUS+r"\musicas\Medea's Fire (revange).wav"]
W,H=1080,1920
REELS=[
("g2","30","Todo mundo reparou que to brilhando mais nos ultimos tempos. Não foi maquiagem, foi magia..."),
("g5","31","Tem um daemon da Goétia que faz a pessoa ser vista. E eu trabalho MUITO com ele..."),
("g6","32","Você entra no lugar e ninguém repara? Existe magia pra mudar isso..."),
("g7","37","A magia que eu repito a cada 15 dias pra continuar sendo percebida por quem eu quero que me perceba..."),
("g13","26","Faz uns meses que me falam que eu estou diferente. Foi magia. Vou contar o que eu fiz..."),
("g14","24","A magia perfeita pra você chegar em 2027 sendo notada existe"),
("g15","25","Magia de atração não é só pro amor. Essa aqui é pra você ser vista em tudo..."),
]
def dur(p): return float(subprocess.run(["ffprobe","-v","error","-show_entries","format=duration","-of","csv=p=0",p],capture_output=True,text=True).stdout.strip())
def overlay(text,path):
    im=Image.new("RGBA",(W,H),(0,0,0,0)); d=ImageDraw.Draw(im)
    size=78
    while True:
        f=ImageFont.truetype("C:/Windows/Fonts/arialbd.ttf",size)
        lines=[];cur=""
        for w in text.split():
            t=(cur+" "+w).strip()
            if d.textlength(t,font=f)<=820: cur=t
            else: lines.append(cur);cur=w
        lines.append(cur)
        if len(lines)<=7 or size<=54: break
        size-=4
    lh=int(size*1.22); bh=lh*len(lines); top=1140-bh//2
    box=Image.new("RGBA",(W,H),(0,0,0,0))
    ImageDraw.Draw(box).rounded_rectangle((50,top-34,W-50,top+bh+26),radius=30,fill=(10,6,16,140))
    im=Image.alpha_composite(im,box); d=ImageDraw.Draw(im)
    for i,l in enumerate(lines):
        d.text((90,top+i*lh),l,font=f,fill=(255,255,255,255),stroke_width=4,stroke_fill=(0,0,0,255))
    im.save(path)
for i,(slug,idx,txt) in enumerate(REELS):
    clip=os.path.join(VID,LIST[idx]); ov=os.path.join(HERE,slug+".png"); out=os.path.join(HERE,slug+".mp4")
    overlay(txt,ov)
    d=dur(clip); T=11.8
    mus=MS[i%len(MS)]
    fc=("[0:v]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,setsar=1,fps=30,split[a][b];"
        "[b]reverse[r];[a][r]concat=n=2:v=1:a=0,loop=loop=-1:size=400:start=0,trim=duration=%s,setpts=PTS-STARTPTS[v];"
        "[v][1:v]overlay=0:0[o]")%T
    subprocess.run(["ffmpeg","-y","-loglevel","error","-i",clip,"-loop","1","-i",ov,"-ss","20","-i",mus,"-filter_complex",fc,
        "-map","[o]","-map","2:a","-t",str(T),"-af","afade=t=in:d=0.8,afade=t=out:st=%s:d=1.2"%(T-1.2),
        "-c:v","libx264","-preset","fast","-crf","21","-pix_fmt","yuv420p","-c:a","aac","-b:a","160k","-shortest",out],check=True)
    print(slug,os.path.getsize(out)//1024,"KB")
