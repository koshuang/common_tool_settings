FROM sbdev/wd-wordpress:ww-2.1

RUN apt-get update && apt-get install -y openssl vim
RUN a2enmod ssl
RUN mkdir /etc/apache2/ssl
RUN openssl req -new -x509 -days 365 -nodes -out /etc/ssl/certs/ssl-cert-snakeoil.pem -keyout /etc/ssl/private/ssl-cert-snakeoil.key -subj "/C=UK/ST=Warwickshire/L=Leamington/O=OrgName/OU=IT Department/CN=example.com"
RUN ln -s /etc/apache2/sites-available/default-ssl.conf /etc/apache2/sites-enabled/
RUN apt-get install php5-xdebug
RUN service apache2 restart
