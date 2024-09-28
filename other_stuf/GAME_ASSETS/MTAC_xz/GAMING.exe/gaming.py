import atexit
from tkinter import *
from PIL import ImageTk,Image
import os
import json
import threading

from numpy import char

directory = os.getcwd()
frame = "reg"
data = {"start":"false","char":0,"area":"1","posx":50,"posy":50}


class ThreadJob(threading.Thread):
    def __init__(self,callback,event,interval):
        self.callback = callback
        self.event = event
        self.interval = interval
        super(ThreadJob,self).__init__()

    def run(self):
        while not self.event.wait(self.interval):
            self.callback()
    

event = threading.Event()

def redraw():
    global bg_y,bg_x,canvas,frame,bg,data,char,boy_sect,girl_sect
    if frame == "reg":
        canvas.create_image(0,0,anchor="nw",image=bg)
        canvas.create_rectangle(bg_x/22, bg_y/8, bg_x/1.5, bg_y/4,outline="#ffffff",fill="#000000")
        canvas.create_rectangle(bg_x/22, bg_y/1.5, bg_x/2, bg_y/4,outline="#ffffff",fill="#000000")
        canvas.create_text(bg_x/4, bg_y/2.5,fill="white",font="Times 20",text="More Than A City \n\nPlay [P] \nSettings [S] \nCredits [C]")
    if frame == "reg.71":
        canvas.create_image(0,0,anchor="nw",image=bg)
        canvas.create_rectangle(bg_x/22, bg_y/8, bg_x/1.5, bg_y/4,outline="#ffffff",fill="#000000")
        canvas.create_rectangle(bg_x/22, bg_y/1.5, bg_x/2, bg_y/4,outline="#ffffff",fill="#000000")
        canvas.create_text(bg_x/4, bg_y/2.5,fill="white",font="Times 20",text="More Than A City \n\nSave_1 [P] \nSave_2 [S] \nSave_3 [C]")
    if frame == "reg.1":
        canvas.create_image(0,0,anchor="nw",image=bg)
        canvas.create_rectangle(bg_x/22, bg_y/8, bg_x/1.5, bg_y/4,outline="#ffffff",fill="#000000")
        canvas.create_rectangle(bg_x/22, bg_y/1.5, bg_x/2, bg_y/4,outline="#ffffff",fill="#000000")
        canvas.create_text(bg_x/4, bg_y/2.5,fill="white",font="Times 20",text="More Than A City \n\nBoy [P] \nGirl [S]\n ")
    if frame == "reg.2":
        canvas.create_image(0,0,anchor="nw",image=bg)
        canvas.create_rectangle(bg_x/22, bg_y/8, bg_x/1.5, bg_y/4,outline="#ffffff",fill="#000000")
        canvas.create_rectangle(bg_x/22, bg_y/1.5, bg_x/2, bg_y/4,outline="#ffffff",fill="#000000")
        canvas.create_text(bg_x/4, bg_y/2.5,fill="white",font="Times 20",text="More Than A City \n\nBoy [P] \nGirl [S]\n ")
    if frame == "reg.3":
        canvas.create_image(0,0,anchor="nw",image=bg)
        canvas.create_rectangle(bg_x/22, bg_y/8, bg_x/1.5, bg_y/4,outline="#ffffff",fill="#000000")
        canvas.create_rectangle(bg_x/22, bg_y/1.5, bg_x/2, bg_y/4,outline="#ffffff",fill="#000000")
        canvas.create_text(bg_x/4, bg_y/2.5,fill="white",font="Times 20",text="More Than A City \n\nBoy [P] \nGirl [S]\n ")
    if frame == "lab.1e8":
        with open(directory+'/Data/save_2.json','r') as k:
            data = json.load(k)
            readDATA(data,'2')
            return
    if frame == "lab.1e7":
        with open(directory+'/Data/save_3.json','r') as k:
            data = json.load(k)
            readDATA(data,'3')
            return
    if frame == "lab.1e9":
        with open(directory+'/Data/save_1.json','r') as k:
            data = json.load(k)
            readDATA(data,'1')
            return
    if frame == "1_y" or frame == "2_y" or frame == "3_y" or frame == "1_g" or frame == "2_g" or frame == "3_g":
        canvas.create_image(0,0,anchor="nw",image=bg)
        x = frame.split("_",1)
        save = x[0]
        cha2r = x[1]
        if cha2r=="y":
            canvas.create_image(data["posx"],data["posy"],anchor="nw",image=boy_sect[char])
        if cha2r=="g":
            canvas.create_image(data["posx"],data["posy"],anchor="nw",image=girl_sect[char])
def up():
    global bg,data,image_choose,bg_x,img_list,img_1BIG,img_2,img_2SMALL,img_1,img_1SMALL
    data["posx"] = data["posx"] - 1
    print(data["posx"])
    bg.grid_forget()
    if bg_x == 1024:
        image_choose=1
    bg = img_list[image_choose]
    i2 = Image.open(directory+"/Images/lab_bg.png")
    boy = Image.open(directory+"/Images/boy.png")
    i2.paste(boy,(data["posx"],data["posy"]),boy)
    helpme = ImageTk.PhotoImage(i2)
    img_list = [img_1BIG,helpme,img_1,img_2,img_1SMALL,img_2SMALL]


def settings():
    global frame
    if frame == "reg":
        win = Toplevel(gui)
        ijj =Button(win, text='Settings',fg='black',bg='white',command=lambda: press(" "),height=1,width=50)
        ijj.place(relx=.5, rely=.1, anchor="c")
        win.resizable(False,False)
        win.iconbitmap(directory+"/Images/settings.ico")
        Button(win, text='Make Window Size to...:',fg='black',bg='lightgrey',command=lambda: press(" "),height=1,width=7).place(relx=.5, rely=.2, anchor="c")
        Button(win, text='512x288',fg='black',bg='lightgrey',command=lambda: press("3"),height=1,width=7).place(relx=.5, rely=.2, anchor="c")
        Button(win, text='256x144',fg='black',bg='lightgrey',command=lambda: press("6"),height=1,width=7).place(relx=.5, rely=.3, anchor="c")
        Button(win, text='1024x576',fg='black',bg='lightgrey',command=lambda: press("kavbgd"),height=1,width=7).place(relx=.5, rely=.4, anchor="c")
    if frame == "reg.71":
        frame="lab.1e8"
        return
    if frame == "reg.1":
        with open(directory+"/Data/save_1.json","w") as o:
            writeDATA('start_#**23(',o)
        with open(directory+"/Data/save_1.json",'r') as i:
            data = json.load(i)
            readDATA(data,'1')
        frame="1_y"
    if frame == "reg.2":
        with open(directory+"/Data/save_2.json","w") as o:
            writeDATA('start_#**23(',o)
        with open(directory+"/Data/save_1.json",'r') as i:
            data = json.load(i)
            readDATA(data,'2')
    if frame == "reg.3":
        with open(directory+"/Data/save_3.json","w") as o:
            writeDATA('start_#**23(',o)
        with open(directory+"/Data/save_1.json",'r') as i:
            data = json.load(i)
            readDATA(data,'3')

def credits():
    global frame
    if frame == "reg":
        win = Toplevel(gui)
        win.resizable(False,False)
        win.iconbitmap(directory+"/Images/credits.ico")
        Button(win, text='Made By The Studio Of Non-Existence..',fg='black',bg='lightgrey',command=lambda: press(" "),height=1,width=100).place(relx=.5, rely=.2, anchor="c")
    if frame == "reg.71":
        frame="lab.1e7"
        return

def play():
    global frame
    if frame == "reg":
        frame="reg.71"
        return
    if frame == "reg.71":
        frame="lab.1e9"
        return
    if frame == "reg.1":
        with open(directory+"/Data/save_1.json","w") as o:
            writeDATA('start_j**09(',o)
        with open(directory+"/Data/save_1.json",'r') as i:
            data = json.load(i)
            readDATA(data,'1')
        frame = "1_y"
        return
    if frame == "reg.2":
        with open(directory+"/Data/save_2.json","w") as o:
            writeDATA('start_j**09(',o)
        with open(directory+"/Data/save_1.json",'r') as i:
            data = json.load(i)
            readDATA(data,'2')
    if frame == "reg.3":
        with open(directory+"/Data/save_3.json","w") as o:
            writeDATA('start_j**09(',o)
        with open(directory+"/Data/save_1.json",'r') as i:
            data = json.load(i)
            readDATA(data,'3')

def move_right():
    global data,frame,char
    if frame == "1_y" or frame == "2_y" or frame == "3_y" or frame == "1_g" or frame == "2_g" or frame == "3_g":
        char = 0
        if data["posx"]==978:
            pass
        else:
            data["posx"] = data["posx"] + 1
        x = frame.split("_",1)
        m = x[0]
        o = '/Data/save_'+m+'.json'
        with open(directory+o,'w') as i:
            writeDATA("save..w1i",i)
        return

def move_left():
    global data,frame,char
    if frame == "1_y" or frame == "2_y" or frame == "3_y" or frame == "1_g" or frame == "2_g" or frame == "3_g":
        char = 1
        if data["posx"]==18:
            pass
        else:
            data["posx"] = data["posx"] - 1
        x = frame.split("_",1)
        m = x[0]
        o = '/Data/save_'+m+'.json'
        with open(directory+o,'w') as i:
            writeDATA("save..w1i",i)
        return 

def move_down():
    global data,frame,char
    if frame == "1_y" or frame == "2_y" or frame == "3_y" or frame == "1_g" or frame == "2_g" or frame == "3_g":
        char = 2
        if data["posy"]==507:
            pass
        else:
            data["posy"] = data["posy"] + 1
        x = frame.split("_",1)
        m = x[0]
        o = '/Data/save_'+m+'.json'
        with open(directory+o,'w') as i:
            writeDATA("save..w1i",i)
        return

def move_up():
    global data,frame,char
    if frame == "1_y" or frame == "2_y" or frame == "3_y" or frame == "1_g" or frame == "2_g" or frame == "3_g":
        char = 3
        if data["posy"]==50:
            pass
        else:
            data["posy"] = data["posy"] - 1
        x = frame.split("_",1)
        m = x[0]
        o = '/Data/save_'+m+'.json'
        with open(directory+o,'w') as i:
            writeDATA("save..w1i",i)
        return 

def key_pressed(event):
    if event.char=="S":
        settings()
    if event.char=="s":
        settings()
    if event.char=="C":
        credits()
    if event.char=="c":
        credits()
    if event.char=="P":
        play()
    if event.char=="p":
        play()
    if event.char=="d":
        move_right()
    if event.char=="D":
        move_right()
    if event.char=="a":
        move_left()
    if event.char=="A":
        move_left()
    if event.char=="s":
        move_down()
    if event.char=="S":
        move_down()
    if event.char=="w":
        move_up()
    if event.char=="W":
        move_up()

def readDATA(info,save):
    global button0,button1,text0,bg,image_choose,img_list,bg_x,bg_y,char,data,frame
    if info["start"]=="false":
        frame='reg.'+save
    if info["start"]=="true":
        data = info
        if info["area"]=="1":
            if bg_x == 1024:
                image_choose=1
            if bg_x == 512:
                image_choose=3
            if bg_x == 256:
                image_choose=5
            bg = img_list[image_choose]
        if info["char"]=="boy":
            if save=='1':
                frame = "1_y"
            if save=='2':
                frame = "2_y"
            if save=='3':
                frame = "3_y"
        if info["char"]=="girl":
            if save=='1':
                frame = "1_g"
            if save=='2':
                frame = "2_g"
            if save=='3':
                frame = "3_g"
    return 'ccc'

def bg_change_1():
    global bg,image_choose,img_list,bg_x,button0,button1,button2,text0
    if bg_x == 1024:
        image_choose=0
    if bg_x == 512:
        image_choose=2
    if bg_x == 256:
        image_choose=4
    canvas['height']=bg_y
    canvas['width']=bg_x
    bg =img_list[image_choose]


def writeDATA(action,info):
    global data
    if action=='start_j**09(':
        data["start"] = "true"
        data["char"] = "boy"
    if action=='start_#**23(':
        data["start"] = "true"
        data["char"] = "girl"
    json.dump(data,info)

def press(act):
    global bg_x,bg_y
    if act == "kavbgd":
        gui.geometry("1024x576")
        bg_x = 1024
        bg_y = 576
        bg_change_1()
    if act == "3":
        gui.geometry("512x288")
        bg_x = 512
        bg_y = 288
        bg_change_1()
    if act == "6":
        gui.geometry("256x144")
        bg_x = 256
        bg_y = 144
        bg_change_1()

gui = Tk()
gui.title("game")
gui.iconbitmap(directory+"/Images/game.ico")
img_1BIG = PhotoImage(file=directory+"/Images/background.png")
img_2BIG = PhotoImage(file=directory+"/Images/lab_bg.png")
img_1 = PhotoImage(file=directory+"/Images/background.png")
img_2 = PhotoImage(file=directory+"/Images/lab_bg.png")
img_1SMALL = PhotoImage(file=directory+"/Images/background.png")
img_2SMALL = PhotoImage(file=directory+"/Images/lab_bg.png")
img_list = [img_1BIG,img_2BIG,img_1,img_2,img_1SMALL,img_2SMALL]
boy_sect = [PhotoImage(file=directory+"/Images/characters/boy/boy.png"),PhotoImage(file=directory+"/Images/characters/boy/boy_reversed.png"),PhotoImage(file=directory+"/Images/characters/boy/boy_down.png"),PhotoImage(file=directory+"/Images/characters/boy/boy_up.png")]
girl_sect = [PhotoImage(file=directory+"/Images/characters/girl/girl.png"),PhotoImage(file=directory+"/Images/characters/girl/girl_reversed.png"),PhotoImage(file=directory+"/Images/characters/girl/girl_down.png"),PhotoImage(file=directory+"/Images/characters/girl/girl_up.png")]
char = 0
bg_x = 1024
bg_y = 576
image_choose = 2
bg = img_list[image_choose]
canvas = Canvas(gui,height=bg_y,width=bg_x,bg='#000000')
canvas.pack()
k = ThreadJob(redraw,event,0.3)
k.start()
def amogus_death(j):
    if j == 'j':
        k.join()
atexit.register(amogus_death,'j')
gui.bind('<KeyPress>',key_pressed)
gui.geometry("1024x576")
gui.resizable(False,False)
gui.mainloop()