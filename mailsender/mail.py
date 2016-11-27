# -*- coding: utf-8 -*-
from flask import Flask, request, redirect
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.message import MIMEMessage


MAIL_SERVER = "test-achats.smtp.com"
MAIL_USERNAME = "frederic@dcode.eu"
MAIL_PASSWORD = "a287972c"


app = Flask(__name__)
@app.route("/flask/")
def index():
   server = smtplib.SMTP(MAIL_SERVER)
   server.login(MAIL_USERNAME, MAIL_PASSWORD)
   sender="contact@galerie-ephemere-liege.be"
   recipients=["frederic@dcode.eu", "contact@galerie-ephemere-liege.be", "info@carinejoiris.com", "ph.valentinetti@valmetal.be"]
   #recipients = "frederic@dcode.eu"


   msg = MIMEMultipart('alternative')
   #msg['Subject'] = str(make_header("Message de votre Gallerie"))
   msg['Subject'] = "Message de votre Gallerie"
   msg['From'] = sender
   msg['To'] = ", ".join(recipients)
   #                     <li><input id="name" class="name" type="text" name="name" placeholder="Name:"></li>
   #                 <li><input id="email" class="email" type="email" name="email" placeholder="E-Mail:"></li>
   #                 <li><input id="phone" class="phone" type="text" name="phone" placeholder="Phone:"></li>
   #
   #             </ul>

   #             <ul class="grid-50">
   #                 <li><textarea id="message" class="message" name="message" placeholder="Message:"></textarea></li>


   htmldata="<h1>Nom : %s</h1><p>Mail : %s</p><p>Phone : %s</p><p>Message : %s</p>"%(request.args['name'], request.args['email'], request.args['phone'], request.args['message'])
   print(request.args)
   #htmldata=request.__dict__
   # Record the MIME types of both parts - text/plain and text/html.
   #part2 = MIMEText(htmldata, 'html', 'utf-8')
   #part2 = str(request.__dict__)
   part2 = MIMEText(htmldata,'html','latin1')
   msg.attach(part2)

   server.sendmail(sender, ", ".join(recipients), msg.as_string())
   server.quit()
   return redirect('http://www.galerie-ephemere-liege.be/')








#app.run(host='0.0.0.0', port=7002, debug=True)
