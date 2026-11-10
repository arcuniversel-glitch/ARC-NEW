<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <link rel="manifest" href="manifest.json">
  <link rel="apple-touch-icon" href="icon-512-maskable.png">
  <link rel="icon" type="image/png" href="icon-192.png">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="JESUS">
  <meta name="theme-color" content="#0b2f68">
  <script src="https://cdn.fedapay.com/checkout.js?v=1.1.7"></script>
  <style>

/* ===== Présentation « marketplace » : affiches carrées côte à côte ===== */
.mkt-grille{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
@media(min-width:640px){.mkt-grille{grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}}
@media(min-width:900px){.mkt-grille{grid-template-columns:repeat(4,minmax(0,1fr))}}
@media(min-width:1150px){.mkt-grille{grid-template-columns:repeat(5,minmax(0,1fr))}}
.mkt-carte{background:#fff;border:1px solid var(--line);border-radius:14px;overflow:hidden;display:flex;flex-direction:column;cursor:pointer;box-shadow:0 4px 14px rgba(12,47,104,.07);transition:transform .15s,box-shadow .15s;min-width:0}
.fav-trio{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:14px}.fav-carre{position:relative;aspect-ratio:1/1;border-radius:14px;overflow:hidden;background:linear-gradient(135deg,var(--blue2),var(--blue));cursor:pointer;box-shadow:0 6px 16px rgba(12,47,104,.18)}.fav-carre img{width:100%;height:100%;object-fit:cover;display:block}.fav-carre .fav-ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:30px;color:#fff}.fav-carre .fav-titre{position:absolute;left:0;right:0;bottom:0;padding:18px 7px 7px;background:linear-gradient(transparent,rgba(0,0,0,.78));color:#fff;font-size:11.5px;font-weight:800;line-height:1.2;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.fav-carre .fav-etoile{position:absolute;top:5px;left:6px;font-size:13px;filter:drop-shadow(0 1px 2px rgba(0,0,0,.5))}
.mkt-carte:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(12,47,104,.14)}
.mkt-img{position:relative;aspect-ratio:1/1;background:#eef3f9;overflow:hidden}
.mkt-img img{width:100%;height:100%;object-fit:cover;display:block}
.mkt-ph{width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:46px;background:linear-gradient(135deg,#eef3f9,#dfe8f5)}
.mkt-badge{position:absolute;top:7px;left:7px;font-size:10px;font-weight:800;padding:3px 8px;border-radius:999px;background:#f4c400;color:#3b2f00;box-shadow:0 2px 6px rgba(0,0,0,.18)}
.mkt-badge.mem{left:auto;right:7px;background:#0b2f68;color:#fff}
.mkt-badge.cat{background:#fff;color:var(--blue2)}
.mkt-badge.ko{background:#d71920;color:#fff}
.mkt-corps{padding:9px 10px 11px;display:flex;flex-direction:column;gap:3px;flex:1;min-width:0}
.mkt-titre{font-weight:800;font-size:13px;line-height:1.25;color:var(--ink);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;word-break:break-word}
.mkt-sous{font-size:11px;color:var(--muted);line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.mkt-sous.deux{white-space:normal;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.mkt-prix{font-weight:800;font-size:14px;color:var(--blue2)}
.mkt-prix.gratuit{color:var(--green)}
.mkt-stats{font-size:11px;color:var(--muted);font-weight:700;display:flex;flex-wrap:wrap;gap:2px 8px;margin-top:1px;cursor:pointer}
.mkt-stats .st{color:#f5a623}
.mkt-actions{display:flex;gap:6px;margin-top:6px}
.mkt-actions button,.mkt-carte .mkt-mini{width:auto;flex:1;min-width:0;padding:8px 4px;font-size:12px;margin:0;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:4px;white-space:nowrap}
.mkt-carte .mkt-mini{flex:none;margin-top:6px;width:100%}
#notationCarte{position:fixed;inset:0;z-index:9700;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:16px}
#notationCarte .boite{background:#fff;border-radius:16px;padding:18px;max-width:340px;width:100%;text-align:center}
.bloc-notes{display:flex;flex-wrap:wrap;align-items:center;gap:2px 10px;margin:6px 0;font-size:12px;color:var(--muted)}
.bloc-notes .etoiles{white-space:nowrap}
.bloc-notes .etoile{font-size:22px;line-height:1;color:#cfd6e2;cursor:pointer;padding:0 1px;user-select:none}
.bloc-notes .etoile.on{color:#f5a623}
.bloc-notes .notes-vues{font-weight:700}
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Montserrat:wght@600;700;800&display=swap');
:root{--blue:#0757a8;--blue2:#0b2f68;--red:#d71920;--red2:#a90812;--yellow:#f4c400;--ink:#17233c;--muted:#69758a;--bg:#f4f7fb;--card:#fff;--line:#e4e9f2;--green:#168653;--danger:#c62828;--shadow:0 12px 35px rgba(12,47,104,.09)}
*{box-sizing:border-box}html{scroll-behavior:smooth;overflow-x:hidden;max-width:100vw}img,iframe{max-width:100%}body{margin:0;background:linear-gradient(180deg,#f7f9fd,#eef3f9);color:var(--ink);font-family:Inter,Arial,sans-serif;-webkit-font-smoothing:antialiased;top:0 !important;position:static !important;overflow-x:hidden;max-width:100vw}.goog-te-banner-frame,.goog-te-gadget-icon,body>.skiptranslate{display:none !important}#google_translate_element{display:none !important}h1,h2,.display{font-family:Montserrat,Arial,sans-serif}.wrap{width:min(1180px,calc(100% - 32px));margin:0 auto;padding:28px 0 70px}.center-screen{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;background:radial-gradient(circle at 10% 10%,rgba(7,87,168,.13),transparent 35%),radial-gradient(circle at 90% 90%,rgba(215,25,32,.13),transparent 35%)}
.topbar{background:linear-gradient(110deg,var(--blue2),var(--blue) 55%,var(--red));padding:13px max(22px,calc((100% - 1180px)/2));color:#fff;display:none;align-items:center;gap:13px;position:sticky;top:0;z-index:100;box-shadow:0 8px 25px rgba(7,47,104,.22);min-height:72px}.topbar:after{content:"";position:absolute;left:0;right:0;bottom:0;height:4px;background:var(--yellow)}.logo-circle{width:46px;height:46px;border-radius:14px;background:#fff;display:flex;align-items:center;justify-content:center;color:var(--blue2);font-weight:800;overflow:hidden;flex-shrink:0;box-shadow:0 4px 12px rgba(0,0,0,.15)}.logo-circle img,.logo-circle-lg img,.badge-mini-logo img{width:100%;height:100%;object-fit:cover}.topbar-nom-wrap{flex:1;min-width:0;overflow:hidden}.topbar-nom{font-size:16px;font-weight:800;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.topbar-sub{font-size:11px;opacity:.78;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.brand-center{display:flex;flex-direction:column;align-items:center;text-align:center;margin-bottom:24px}.logo-circle-lg{width:92px;height:92px;border-radius:24px;background:#fff;box-shadow:0 14px 35px rgba(7,47,104,.18);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:30px;color:var(--blue2);overflow:hidden;border:4px solid #fff;margin-bottom:14px;position:relative}.logo-circle-lg:after{content:"";position:absolute;inset:-4px;border-radius:27px;padding:4px;background:linear-gradient(135deg,var(--blue),var(--red),var(--yellow));-webkit-mask:linear-gradient(#000 0 0) content-box,linear-gradient(#000 0 0);-webkit-mask-composite:xor;mask-composite:exclude;pointer-events:none}.brand-nom{font-family:Montserrat;font-weight:800;font-size:20px;color:var(--blue2);line-height:1.3}.card{background:rgba(255,255,255,.96);border:1px solid var(--line);border-radius:20px;padding:24px;box-shadow:var(--shadow);margin-bottom:18px}.auth-screen .wrap{width:min(520px,calc(100% - 30px))}.auth-screen .card{position:relative;overflow:hidden}.auth-screen .card:before{content:"";position:absolute;top:0;left:0;right:0;height:6px;background:linear-gradient(90deg,var(--blue),var(--red),var(--yellow))}
h1.titre{font-size:25px;margin:0 0 7px;color:var(--blue2);text-align:center;font-weight:800}.subtitle{color:var(--muted);font-size:14px;margin:0 0 20px;line-height:1.6;text-align:center}.subtitle.left,h1.titre.left{text-align:left}.section-title{display:flex;align-items:center;gap:10px;font-size:17px;font-weight:800;color:var(--blue2);margin:8px 0 14px}.section-title .ic{font-size:20px}
/* Identité visuelle propre à chacune des 4 grandes rubriques de contenu */
#section-audios .section-title{color:#b8720a}
#section-audios .section-title .ic{background:linear-gradient(135deg,#f0a020,#c47d0a);color:#fff;width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px}
#section-audios .hero-vedette{background:linear-gradient(135deg,#c47d0a,#f0a020)}
#section-audios .sub-nav-btn.active{background:linear-gradient(135deg,#c47d0a,#f0a020)}
#section-videos .section-title{color:#6d28d9}
#section-videos .section-title .ic{background:linear-gradient(135deg,#8b5cf6,#6d28d9);color:#fff;width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px}
#section-videos .hero-vedette{background:linear-gradient(135deg,#6d28d9,#8b5cf6)}
#section-videos .sub-nav-btn.active{background:linear-gradient(135deg,#6d28d9,#8b5cf6)}
#section-documents .section-title{color:#0f766e}
#section-documents .section-title .ic{background:linear-gradient(135deg,#14b8a6,#0f766e);color:#fff;width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px}
#section-documents .hero-vedette{background:linear-gradient(135deg,#0f766e,#14b8a6)}
#section-documents .sub-nav-btn.active{background:linear-gradient(135deg,#0f766e,#14b8a6)}
#section-prieres .section-title{color:#b0121a}
#section-prieres .section-title .ic{background:linear-gradient(135deg,#e23a41,#b0121a);color:#fff;width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px}
#section-prieres .hero-vedette{background:linear-gradient(135deg,#b0121a,#e23a41)}
#section-prieres .sub-nav-btn.active{background:linear-gradient(135deg,#b0121a,#e23a41)}
input,select,textarea{width:100%;padding:13px 14px;border:1.5px solid var(--line);border-radius:12px;font-size:14px;margin-bottom:13px;font-family:inherit;background:#fbfcfe;transition:.2s}input:focus,select:focus,textarea:focus{outline:none;border-color:var(--blue);box-shadow:0 0 0 4px rgba(7,87,168,.09);background:#fff}label.field-label{font-size:11px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:.55px;margin-bottom:7px;display:block}button{width:100%;padding:13px 16px;border:0;border-radius:12px;background:linear-gradient(135deg,var(--blue2),var(--blue));color:#fff;font-size:14px;font-weight:800;cursor:pointer;font-family:inherit;transition:transform .15s,box-shadow .15s,opacity .15s;box-shadow:0 7px 16px rgba(7,87,168,.18)}button:hover{transform:translateY(-1px);box-shadow:0 10px 22px rgba(7,87,168,.22)}button.secondary{background:#edf3fb;color:var(--blue2);box-shadow:none}button.flame{background:linear-gradient(135deg,var(--red2),var(--red),#ee4a24);box-shadow:0 7px 16px rgba(215,25,32,.18)}button.danger-outline{background:#fff0f0;color:var(--danger);box-shadow:none}button.small{width:auto;padding:9px 14px;font-size:12px}button.full-mt{margin-top:10px}button.ghost-link{background:transparent;color:var(--blue);box-shadow:none;text-decoration:none}button.ghost-link:hover{box-shadow:none}.error{color:var(--danger);font-size:13px;margin:-5px 0 12px}.success-text{color:var(--green);font-size:13px}
#ecranDashboard{display:none}
#sliderAfficheZone{width:100%;margin:0 auto 18px;aspect-ratio:3/1;max-height:340px;overflow:hidden;position:relative;border-radius:16px;box-shadow:var(--shadow)}
.slide-affiche{position:absolute;inset:0;opacity:0;transition:opacity .7s ease;}
.slide-affiche.active{opacity:1;}
.slide-affiche img{width:100%;height:100%;object-fit:cover;display:block}
.tabs{display:flex;gap:8px;margin:0 0 22px;overflow-x:auto;padding:5px 2px 8px;scrollbar-width:none}.tabs::-webkit-scrollbar{display:none}@media(min-width:520px){.tabs{flex-wrap:wrap;overflow-x:visible}}
.tabs-wrap{position:relative}
.tabs-scroll-hint{position:absolute;top:0;right:0;bottom:22px;width:40px;display:flex;align-items:center;justify-content:flex-end;padding-right:2px;background:linear-gradient(to right,rgba(244,247,251,0),var(--bg) 60%);pointer-events:none;font-size:22px;font-weight:800;color:var(--blue2);opacity:.9;transition:opacity .2s}
.tabs-scroll-hint.masque{opacity:0}
@media(min-width:520px){.tabs-scroll-hint{display:none}}.tab{padding:11px 16px;border-radius:12px;background:#fff;color:var(--blue2);font-size:12px;font-weight:800;white-space:nowrap;cursor:pointer;border:1px solid var(--line);box-shadow:0 4px 12px rgba(12,47,104,.05);position:relative}.tab.active{background:linear-gradient(135deg,var(--blue2),var(--blue));color:#fff;border-color:transparent;box-shadow:0 8px 18px rgba(7,87,168,.2)}.badge-nouveau{position:absolute;top:4px;right:5px;width:9px;height:9px;background:var(--red);border-radius:50%;box-shadow:0 0 0 2px #fff}.section,.auth-screen{display:none}.section.active,.auth-screen.active{display:block}.item-row{display:flex;justify-content:space-between;align-items:center;padding:15px 0;border-bottom:1px solid var(--line);gap:14px}.item-row:last-child{border-bottom:0}.item-block{border-bottom:1px solid var(--line);padding:15px 0}.item-block:last-child{border-bottom:0}.item-nom{font-weight:800;font-size:14px}.item-desc{color:var(--muted);font-size:12px;margin-top:4px;line-height:1.45}.btn-rejoindre{width:auto;padding:9px 14px;font-size:12px;background:#1fbe68;box-shadow:none}.btn-meet{background:linear-gradient(135deg,var(--blue2),var(--blue));width:auto;padding:9px 14px;font-size:12px}.join-form{display:none;margin-top:12px;padding-top:12px;border-top:1px dashed var(--line)}.join-form.active{display:flex;gap:8px;flex-wrap:wrap}.join-form input{flex:1;min-width:160px;margin:0}.join-form button{width:auto}.join-error{width:100%;color:var(--danger);font-size:12px}
.stat-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-bottom:18px}.stat-box{background:linear-gradient(145deg,#fff,#f7faff);border:1px solid var(--line);border-radius:16px;padding:18px;text-align:center;position:relative;overflow:hidden}.stat-box:after{content:"";position:absolute;bottom:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--red),var(--yellow))}.stat-num{font-size:25px;font-weight:800;color:var(--blue2);font-family:Montserrat}.stat-label{font-size:11px;color:var(--muted);margin-top:4px;font-weight:600}
.badge-portrait{width:380px;max-width:100%;margin:0 auto;border-radius:24px;overflow:hidden;background:#fff;box-shadow:0 18px 45px rgba(7,47,104,.24);position:relative;border:1px solid #e7eaf1}.badge-top-band{background:linear-gradient(135deg,var(--blue2),var(--blue) 55%,var(--red));padding:20px 16px 48px;text-align:center;color:#fff;position:relative}.badge-top-band:after{content:"";position:absolute;bottom:0;left:0;right:0;height:7px;background:var(--yellow)}.badge-mini-logo{width:46px;height:46px;border-radius:13px;background:#fff;margin:0 auto 9px;display:flex;align-items:center;justify-content:center;overflow:hidden;border:2px solid rgba(255,255,255,.75);font-weight:800;color:var(--blue2)}.badge-org-name{font-weight:800;font-size:11px;letter-spacing:.8px;text-transform:uppercase;line-height:1.4}.badge-photo-wrap{width:106px;height:106px;border-radius:50%;background:#eef3f9;border:5px solid white;box-shadow:0 7px 18px rgba(0,0,0,.2);margin:-43px auto 0;overflow:hidden;position:relative;z-index:2;display:flex;align-items:center;justify-content:center;font-size:38px;color:var(--muted)}.badge-photo-wrap img{width:100%;height:100%;object-fit:cover}.badge-body{padding:13px 24px 26px;text-align:center}.badge-fullname{font-family:Montserrat;font-weight:800;font-size:19px;color:var(--ink);margin-top:8px}.badge-role-tag{display:inline-block;margin-top:7px;font-size:10px;font-weight:800;color:#9b0f17;background:#fff0f0;padding:5px 12px;border-radius:999px}.badge-divider{height:1px;background:var(--line);margin:17px 0 13px}.badge-info-row{display:flex;align-items:center;justify-content:center;gap:7px;font-size:12px;color:var(--ink);margin-bottom:9px}.badge-status-tag{display:inline-block;margin-top:4px;font-size:10px;font-weight:800;color:var(--green);background:#e7f7ef;padding:5px 12px;border-radius:999px}.badge-qr-wrap{margin-top:18px;display:flex;justify-content:center}.badge-qr-wrap img{border-radius:10px;padding:6px;background:white;border:1px solid var(--line)}.badge-code-small{font-size:10px;color:var(--muted);margin-top:8px;letter-spacing:.6px}
.photo-upload-preview,.logo-upload-preview{width:88px;height:88px;border-radius:18px;background:#eef3f9;display:flex;align-items:center;justify-content:center;overflow:hidden;margin:0 auto 13px;border:2px dashed #cbd5e5;font-size:30px;color:var(--muted)}.photo-upload-preview img,.logo-upload-preview img{width:100%;height:100%;object-fit:cover}.file-btn-label{display:inline-block;padding:10px 15px;background:#edf3fb;color:var(--blue2);border-radius:11px;font-size:12px;font-weight:800;cursor:pointer}.loading{text-align:center;color:var(--muted);padding:28px;font-size:13px}.empty-state{text-align:center;color:var(--muted);padding:24px 10px;font-size:13px}.admin-subtabs{display:flex;gap:7px;margin-bottom:16px;flex-wrap:wrap}.admin-subtab{padding:9px 13px;border-radius:10px;background:#edf3fb;color:var(--blue2);font-size:11px;font-weight:800;cursor:pointer;position:relative}.admin-subtab.active{background:linear-gradient(135deg,var(--blue2),var(--blue));color:#fff}.badge-compteur{position:absolute;top:-6px;right:-6px;background:var(--red);color:#fff;font-size:9px;font-weight:800;min-width:16px;height:16px;border-radius:999px;display:flex;align-items:center;justify-content:center;padding:0 3px;box-shadow:0 0 0 2px #fff}.admin-section{display:none}.admin-section.active{display:block}.codes-box{background:#f6f8fc;border:1px dashed #cfd7e5;border-radius:10px;padding:12px;font-family:monospace;font-size:11px;max-height:160px;overflow-y:auto;white-space:pre-wrap;margin-top:10px}.role-pill,.statut-pill{font-size:10px;font-weight:800;padding:5px 9px;border-radius:999px}.role-admin{background:#fff0f0;color:#b00f18}.role-membre{background:#edf3fb;color:var(--muted)}.statut-nouveau{background:#fff0f0;color:#b00f18}.statut-traite{background:#e7f7ef;color:var(--green)}table.mini-table{width:100%;border-collapse:collapse;font-size:12px;display:block;overflow-x:auto;white-space:nowrap}table.mini-table th{text-align:left;color:var(--muted);font-weight:800;padding:9px 7px;border-bottom:2px solid var(--line);font-size:10px;text-transform:uppercase}table.mini-table td{padding:10px 7px;border-bottom:1px solid var(--line)}.message-bulle{background:#edf3fb;border-radius:15px;padding:13px 15px;margin-bottom:7px;font-size:13px}.message-reponse{background:#fff2f1;border-left:4px solid var(--red);border-radius:0 13px 13px 0;padding:11px 14px;margin:7px 0 16px 14px;font-size:12px}.message-date{font-size:10px;color:var(--muted);margin-top:5px}.message-attente{font-style:italic;color:var(--muted);font-size:11px;margin:4px 0 16px 14px}.admin-message-card{border:1px solid var(--line);border-radius:16px;padding:15px;margin-bottom:12px;background:#fff}.youtube-card{text-align:center;padding:38px 24px}.youtube-icon{font-size:45px;margin-bottom:10px}.video-item{display:flex;gap:12px;padding:10px 0;border-bottom:1px solid var(--line);cursor:pointer;align-items:center}.video-item:last-child{border-bottom:0}.video-thumb{width:110px;height:62px;object-fit:cover;border-radius:10px;flex-shrink:0;background:#eef3f9}.video-titre{font-weight:700;font-size:13px;line-height:1.35}.video-date{font-size:11px;color:var(--muted);margin-top:3px}.video-player-frame{width:100%;aspect-ratio:16/9;border:none;display:block;background:#000}.cotisation-type-card{border:1px solid var(--line);border-radius:16px;padding:16px;margin-bottom:12px;display:flex;justify-content:space-between;align-items:center;gap:12px;background:linear-gradient(145deg,#fff,#fafcff)}.cotisation-type-nom{font-weight:800;font-size:14px}.cotisation-type-periode{color:var(--muted);font-size:11px;margin-top:3px}.cotisation-type-montant{font-family:Montserrat;font-weight:800;color:var(--blue2);font-size:16px;white-space:nowrap}
.sub-nav{display:flex;gap:7px;margin:14px 0 16px;flex-wrap:wrap}
.sub-nav-btn{padding:9px 14px;border-radius:999px;background:#edf3fb;color:var(--blue2);font-size:11px;font-weight:800;cursor:pointer;border:none}
.sub-nav-btn.active{background:linear-gradient(135deg,var(--blue2),var(--blue));color:#fff}
.sub-section{display:none}
.sub-section.active{display:block}
.hero-vedette{border-radius:20px;overflow:hidden;background:linear-gradient(135deg,var(--blue2),var(--blue));color:#fff;padding:0;margin-bottom:18px;cursor:pointer;box-shadow:var(--shadow)}
.hero-vedette img{width:100%;height:170px;object-fit:cover;display:block}
.hero-vedette-body{padding:16px 18px}
.hero-vedette-label{font-size:10px;text-transform:uppercase;letter-spacing:1px;opacity:.85;font-weight:800}
.hero-vedette-titre{font-family:Montserrat;font-size:18px;font-weight:800;margin-top:5px}
.grille-alaune{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;margin-bottom:18px}
.carte-alaune{border:1px solid var(--line);border-radius:14px;overflow:hidden;cursor:pointer;background:#fff}
.carte-alaune img{width:100%;height:90px;object-fit:cover;display:block;background:#eef3f9}
.carte-alaune-body{padding:9px 10px}
.carte-alaune-titre{font-size:12px;font-weight:800;line-height:1.3}
.carte-bio{display:flex;gap:12px;align-items:flex-start;padding:14px 0;border-bottom:1px solid var(--line);cursor:pointer}
.carte-bio:last-child{border-bottom:0}
.carte-bio-photo{width:56px;height:56px;border-radius:50%;object-fit:cover;background:#eef3f9;flex-shrink:0}
.carte-bio-nom{font-weight:800;font-size:14px}
.carte-bio-extrait{font-size:12px;color:var(--muted);margin-top:3px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
.zone-pub{margin:14px 0}
.zone-pub img{width:100%;border-radius:14px;display:block}
/* Lecteurs persistants : flottent au-dessus du contenu, visibles quelle que soit la
   rubrique consultée, pour ne jamais interrompre la lecture en cours. */
.lecteur-persistant{position:fixed;left:50%;transform:translateX(-50%);bottom:10px;width:calc(100% - 24px);max-width:380px;z-index:700;background:#fff;border-radius:16px;box-shadow:0 -6px 30px rgba(12,47,104,.28);max-height:75vh;overflow-y:auto;touch-action:none;user-select:none}
.lecteur-persistant.lecteur-en-deplacement{opacity:.9;box-shadow:0 12px 40px rgba(12,47,104,.4);transition:none}
#lecteurAudioZone.lecteur-persistant{max-width:290px}
#lecteurAudioZone .lecteur-entete{padding:8px 10px;gap:8px}
#lecteurAudioZone .lecteur-cover{width:36px;height:36px;border-radius:9px}
#lecteurAudioZone audio{height:32px;width:calc(100% - 20px)!important;margin:4px 10px 0!important}
#lecteurAudioZone .item-nom{font-size:12px}
#lecteurAudioZone .item-desc{font-size:10px}
#lecteurAudioZone .lecteur-controles{padding:0 10px 10px;gap:5px}
#lecteurAudioZone .lecteur-controles button{padding:6px 9px;font-size:12px}
#lecteurVideoZone.lecteur-persistant{max-width:340px}
#lecteurVideoZone .lecteur-controles{padding:0 10px 10px;gap:5px}
#lecteurVideoZone .lecteur-controles button{padding:6px 9px;font-size:12px}
.lecteur-fermer{position:absolute;top:8px;right:8px;width:28px;height:28px;border-radius:50%;background:rgba(11,47,104,.08);color:var(--blue2);border:none;font-size:14px;font-weight:800;cursor:pointer;z-index:2;display:flex;align-items:center;justify-content:center;padding:0}
.jeu-carte{background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px;margin-bottom:14px;box-shadow:var(--shadow)}
.jeu-boutons{display:flex;gap:8px;margin-top:12px;flex-wrap:wrap}
.jeu-boutons a{width:auto;padding:9px 14px;border-radius:10px;background:#edf3fb;color:var(--blue2);font-size:12px;font-weight:800;text-decoration:none;display:inline-block}
.barre-selection{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;padding:8px 4px;margin-bottom:8px;border-bottom:1px solid var(--line)}
.case-select{width:17px;height:17px;flex-shrink:0;margin:0 2px 0 0;accent-color:var(--blue2)}
/* Actualités — présentation façon blog (image, catégorie, auteur, extrait) */
.blog-card{margin-bottom:22px;cursor:pointer}
.blog-card-image-wrap{position:relative;border-radius:16px;overflow:hidden;margin-bottom:12px;background:#eef3f9}
.blog-card-image-wrap img{width:100%;height:200px;object-fit:cover;display:block}
.blog-card-tag{position:absolute;top:12px;left:12px;background:#22c55e;color:#fff;font-size:11px;font-weight:800;padding:5px 12px;border-radius:999px}
.blog-card-titre{font-family:Montserrat;font-size:19px;font-weight:800;line-height:1.3;margin-bottom:8px}
.blog-card-auteur{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--muted);margin-bottom:10px}
.blog-card-extrait{font-size:13px;line-height:1.6;color:#333;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.blog-detail-corps{font-size:14px;line-height:1.75;white-space:pre-wrap;margin-top:14px}
#section-audios .blog-card-tag{background:linear-gradient(135deg,#f0a020,#c47d0a)}
#section-videos .blog-card-tag{background:linear-gradient(135deg,#8b5cf6,#6d28d9)}
#section-documents .blog-card-tag{background:linear-gradient(135deg,#14b8a6,#0f766e)}
#section-prieres .blog-card-tag{background:linear-gradient(135deg,#e23a41,#b0121a)}
.zone-pub .item-desc{text-align:center;margin-bottom:6px}
/* Visiteur & navigation */
.btn-topbar-mini{width:auto;padding:8px 12px;font-size:11px;background:rgba(255,255,255,.18);color:#fff;box-shadow:none;white-space:nowrap;flex-shrink:0}
.topbar-boutons-gauche{display:flex;flex-direction:column;gap:6px;flex-shrink:0}
#btnPrecedent{background:#fff;color:var(--blue2);font-weight:800;padding:9px 14px;border-radius:999px;box-shadow:0 3px 10px rgba(0,0,0,.15)}
.tuiles-visiteur{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:18px}
.tuile-visiteur{background:#fff;border:1px solid var(--line);border-radius:16px;padding:16px 10px;text-align:center;cursor:pointer;transition:transform .15s;box-shadow:0 4px 12px rgba(12,47,104,.05)}
.tuile-visiteur:hover{transform:translateY(-2px)}
.tuile-visiteur .ic{font-size:26px;display:block;margin-bottom:6px}
.tuile-visiteur .lib{font-size:11.5px;font-weight:800;color:var(--blue2);line-height:1.25}
/* Bible */
.bible-selecteurs{display:flex;gap:8px}
.bible-selecteurs select{flex:1}
.bible-langue-toggle{display:flex;gap:6px;margin-bottom:13px}
.bible-langue-toggle button{width:auto;flex:1;padding:9px}
.bible-verset{padding:8px 0;font-size:14px;line-height:1.6;border-bottom:1px solid var(--line)}
.bible-verset:last-child{border-bottom:0}
.bible-verset .num{font-weight:800;color:var(--blue2);margin-right:6px;font-size:11px;vertical-align:super}
/* Enregistrements / Documents */
.contenu-item{border:1px solid var(--line);border-radius:16px;padding:14px 16px;margin-bottom:12px;background:#fff}
.badge-premium{display:inline-flex;align-items:center;gap:3px;background:linear-gradient(135deg,#f4c400,#d79a00);color:#3a2a00;font-size:9px;font-weight:800;padding:3px 8px;border-radius:999px;vertical-align:middle;margin-left:6px}
.contenu-item .vis-pill{font-size:9px;font-weight:800;padding:3px 8px;border-radius:999px;background:#edf3fb;color:var(--blue2);margin-left:6px;vertical-align:middle}
.audio-frame{width:100%;height:64px;border:none;border-radius:10px;margin-top:8px}
.lecteur-entete{display:flex;gap:12px;align-items:center;padding:12px 14px}
.lecteur-cover{width:56px;height:56px;border-radius:12px;object-fit:cover;background:#eef3f9;flex-shrink:0}
.lecteur-controles{display:flex;gap:8px;justify-content:center;padding:0 14px 14px;}
.lecteur-controles button{width:auto;padding:9px 14px;font-size:16px;background:#edf3fb;color:var(--blue2);box-shadow:none}
.lecteur-controles button.actif{background:linear-gradient(135deg,var(--blue2),var(--blue));color:#fff}
.doc-frame{width:100%;height:70vh;border:none;border-radius:12px;background:#eef3f9}
/* Playlists */
.playlist-tuile{background:linear-gradient(145deg,#fff,#f7faff);border:1px solid var(--line);border-radius:16px;padding:18px 10px;text-align:center;cursor:pointer}
.playlist-tuile .ic{font-size:24px;display:block;margin-bottom:6px}
.playlist-tuile .lib{font-size:12px;font-weight:800;color:var(--blue2)}
.grille-playlists{display:grid;grid-template-columns:repeat(2,1fr);gap:10px}
/* Messagerie audio */
.msg-audio-controles{display:flex;gap:8px;align-items:center;margin-bottom:10px}
.btn-micro{width:auto;flex-shrink:0;padding:12px 16px;background:linear-gradient(135deg,var(--red2),var(--red))}
.btn-micro.enregistrement{animation:pulse-mic 1.2s infinite}
@keyframes pulse-mic{0%{box-shadow:0 0 0 0 rgba(215,25,32,.5)}70%{box-shadow:0 0 0 14px rgba(215,25,32,0)}100%{box-shadow:0 0 0 0 rgba(215,25,32,0)}}
.chrono-enregistrement{font-family:Montserrat;font-weight:800;color:var(--red2);font-size:14px}
/* Demandes de prière / formulaires publics */
.form-public-note{background:#edf3fb;border-radius:12px;padding:12px 14px;font-size:12px;color:var(--blue2);margin-bottom:14px}
@media(min-width:900px){#ecranDashboard{width:min(1180px,calc(100% - 48px));margin:0 auto}.auth-screen .card{padding:32px}.stat-grid{grid-template-columns:repeat(4,1fr)}#section-groupes .card,#section-messages .card,#section-cotisation .card{max-width:none}.admin-subtabs{position:sticky;top:73px;background:var(--bg);z-index:10;padding:8px 0}.item-row{min-height:62px}}
@media(max-width:600px){.wrap{width:min(100% - 22px,1180px);padding:18px 0 55px}.topbar{padding:11px 15px}.topbar-nom{font-size:14px}.card{padding:18px;border-radius:17px}.tabs{margin-left:-2px;margin-right:-2px}.tab{padding:10px 13px}.item-row{align-items:flex-start}.cotisation-type-card{align-items:flex-start;flex-direction:column}.cotisation-type-card>div:last-child{width:100%;text-align:left!important}.cotisation-type-card button{width:auto}.stat-grid{gap:9px}.stat-box{padding:15px 9px}.stat-num{font-size:21px}.admin-subtab{padding:8px 10px}}
@media print{body *{visibility:hidden}.topbar{display:none!important}#badgePrintZone,#badgePrintZone *,#recuPrintZone,#recuPrintZone *{visibility:visible;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;color-adjust:exact!important}#badgePrintZone{position:absolute;top:25px;left:0;right:0;margin:auto}#recuPrintZone{position:absolute;top:25px;left:0;right:0;margin:auto;display:block!important}.badge-portrait{box-shadow:none;border:1px solid #ddd}}
.cotisation-progress-track{width:100%;height:8px;border-radius:999px;background:#e9edf5;overflow:hidden;margin:10px 0 6px;}
.cotisation-progress-fill{height:100%;background:linear-gradient(90deg,var(--blue),var(--red));border-radius:999px;}
.cotisation-dates{font-size:11px;color:var(--muted);margin-top:2px;}
.cotisation-montants-row{display:flex;justify-content:space-between;font-size:12px;color:var(--muted);margin-top:8px;}
.cotisation-pay-row{display:flex;gap:8px;margin-top:12px;}
.cotisation-pay-row input{margin:0;flex:1;}
.cotisation-pay-row button{width:auto;white-space:nowrap;}
.archive-item{border:1px solid var(--line);border-radius:16px;padding:14px 16px;margin-bottom:12px;background:#fff;}
.archive-icon{font-size:20px;margin-right:6px;}
.archive-viewer-frame{width:100%;height:420px;border:none;border-radius:12px;background:#000;}
.archive-audio-frame{width:100%;height:100px;border:none;border-radius:12px;}
.archive-protect-note{font-size:11px;color:var(--muted);margin-top:8px;text-align:center;}
.recu-portrait{width:360px;max-width:100%;margin:0 auto;border:1px solid var(--line);border-radius:16px;padding:26px;background:#fff;}
.recu-header{display:flex;align-items:center;gap:10px;border-bottom:2px solid var(--blue2);padding-bottom:14px;margin-bottom:16px;}
.recu-header .logo-circle{width:44px;height:44px;}
.recu-header .nom{font-family:Montserrat;font-weight:800;color:var(--blue2);font-size:15px;}
.recu-titre{text-align:center;font-family:Montserrat;font-weight:800;font-size:16px;color:var(--ink);margin-bottom:16px;letter-spacing:.5px;text-transform:uppercase;}
.recu-ligne{display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px dashed var(--line);font-size:13px;}
.recu-ligne strong{color:var(--ink);}
.recu-montant{text-align:center;font-family:Montserrat;font-weight:800;font-size:26px;color:var(--blue2);margin:18px 0;}
.recu-footer{text-align:center;font-size:11px;color:var(--muted);margin-top:16px;}
/* ===== TV ===== */
#section-tv .section-title{color:#111111}
#section-tv .section-title .ic{background:linear-gradient(135deg,#3a3a3a,#111111);color:#fff;width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:16px}
#section-tv .sub-nav-btn.active{background:linear-gradient(135deg,#111111,#3a3a3a)}
/* Lecteur TV flottant : reste affiché quand on change de rubrique, et se déplace par appui long puis glissement */
#lecteurTvZone.lecteur-persistant{left:auto;right:12px;bottom:12px;transform:none;width:min(320px,calc(100% - 24px));max-width:320px;max-height:none;padding:0;overflow:hidden;z-index:720;cursor:grab;background:#000;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
#lecteurTvZone.tv-deplacement{transform:scale(1.04)!important;box-shadow:0 14px 40px rgba(0,0,0,.45);cursor:grabbing;transition:box-shadow .15s}
.tv-entete{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:6px 8px 6px 12px;background:linear-gradient(135deg,#111111,#3a3a3a);color:#fff;font-size:12px;font-weight:800}
.tv-entete .tv-titre{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0;flex:1}
.tv-logo-entete{width:26px;height:26px;border-radius:7px;object-fit:cover;background:#fff;flex-shrink:0;border:1px solid rgba(255,255,255,.7)}
.tv-fermer{width:24px;height:24px;padding:0;border-radius:50%;background:rgba(255,255,255,.25);box-shadow:none;font-size:12px;flex-shrink:0;display:flex;align-items:center;justify-content:center;transform:none}
.tv-fermer:hover{transform:none;box-shadow:none}
.tv-ecran{position:relative;width:100%;aspect-ratio:16/9;background:#000;border-radius:0;overflow:hidden}
#tvEcranInterieur{position:absolute;top:0;left:0;right:0;bottom:0}
.tv-ecran iframe{position:absolute;top:0;left:0;width:100%;height:100%;border:0;display:block;pointer-events:none}
.tv-vide{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:15px;font-weight:800;text-align:center;padding:20px;background:linear-gradient(135deg,#1f2937,#111827)}
.tv-badge-live{display:inline-block;background:#d71920;color:#fff;font-size:9px;font-weight:800;padding:3px 8px;border-radius:999px;margin-left:6px;vertical-align:middle;animation:pulse-mic 1.6s infinite}
.tv-logo{width:52px;height:52px;border-radius:14px;object-fit:cover;background:#eef3f9;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:22px}
.tv-logo-coin{position:absolute;top:8px;right:8px;width:clamp(30px,13%,64px);aspect-ratio:1/1;object-fit:cover;border-radius:10px;border:2px solid rgba(255,255,255,.85);background:#fff;z-index:4;opacity:.93;pointer-events:none;box-shadow:0 2px 8px rgba(0,0,0,.45)}
.tv-num-coin{position:absolute;top:8px;right:8px;z-index:4;background:rgba(0,0,0,.55);color:#fff;font-size:11px;font-weight:800;padding:5px 10px;border-radius:999px;pointer-events:none}
.tv-btn-plein{width:auto;position:absolute;right:8px;bottom:8px;z-index:5;padding:6px 10px;font-size:15px;background:rgba(0,0,0,.55);box-shadow:none;border-radius:10px;transform:none}
.tv-btn-plein:hover{transform:none;box-shadow:none}
.tv-num{display:inline-block;background:#ececec;color:#111111;font-size:11px;font-weight:800;padding:3px 8px;border-radius:999px;margin-right:6px;vertical-align:middle;letter-spacing:.5px}
.tv-ecran:fullscreen{aspect-ratio:auto;border-radius:0;width:100%;height:100%}
.tv-ecran:-webkit-full-screen{aspect-ratio:auto;border-radius:0;width:100%;height:100%}
#lecteurTvZone.tv-plein-ecran-css{left:0!important;top:0!important;right:0!important;bottom:0!important;transform:none!important;width:100vw!important;max-width:none!important;height:100vh;height:100dvh;border-radius:0;z-index:99999;cursor:default}
#lecteurTvZone.tv-plein-ecran-css .tv-entete{display:none}
#lecteurTvZone.tv-plein-ecran-css .tv-ecran{width:100%;height:100%;aspect-ratio:auto}
.btn-boucle.actif{background:linear-gradient(135deg,#111111,#3a3a3a);color:#fff}
.tv-groupe{border:1px solid var(--line);border-radius:12px;padding:10px 12px;margin-top:10px;background:#fff}
.tv-groupe summary{cursor:pointer}
/* Fenêtres de dialogue de l'application (remplacent celles du navigateur, qui affichent le nom du site) */
.dlg-overlay{position:fixed;inset:0;background:rgba(10,20,40,.55);z-index:100000;display:flex;align-items:center;justify-content:center;padding:20px}
.dlg-boite{background:#fff;border-radius:18px;max-width:420px;width:100%;padding:20px;box-shadow:0 20px 50px rgba(0,0,0,.35)}
.dlg-texte{font-size:14px;line-height:1.55;white-space:pre-line;margin-bottom:14px;color:var(--ink)}
.dlg-champ{margin-bottom:12px}
.dlg-actions{display:flex;gap:8px;justify-content:flex-end}
.dlg-actions button{width:auto;flex:1}
  /* En-tête : actions à droite (Contact au-dessus, Se connecter en dessous), bien visibles */
.topbar-actions{display:flex;flex-direction:column;gap:6px;margin-left:auto;flex-shrink:0;align-items:stretch}
.btn-topbar-fort{width:auto;padding:9px 18px;font-size:13px;font-weight:800;border-radius:999px;white-space:nowrap;box-shadow:0 4px 12px rgba(0,0,0,.25);border:2px solid #fff}
.btn-topbar-fort.btn-contact{background:#fff;color:var(--blue2)}
.btn-topbar-fort.btn-session{background:var(--yellow);color:var(--blue2);border-color:var(--yellow)}
/* Effet de clic : le bouton s'enfonce et une onde de sa couleur de texte se propage */
button,.tuile-visiteur{-webkit-tap-highlight-color:transparent}
button:not(:disabled):active,.tuile-visiteur:active{transform:scale(.94)!important;filter:brightness(.9)}
@keyframes arcClic{0%{box-shadow:0 0 0 0 currentColor}100%{box-shadow:0 0 0 14px transparent}}
.effet-clic{animation:arcClic .45s ease-out}
/* Bible : sélection, surlignage, recherche */
.bible-verset{cursor:pointer;border-radius:8px;padding:8px 6px}
.bible-verset.selectionne{outline:2px solid var(--blue);outline-offset:-2px}
.bible-verset.hl-jaune{background:#fff3a3}.bible-verset.hl-vert{background:#c8f0c0}.bible-verset.hl-bleu{background:#bfe0ff}.bible-verset.hl-rose{background:#ffd0e6}.bible-verset.hl-orange{background:#ffd9a8}
.bible-verset.flash{animation:bibleFlash 2.5s}
@keyframes bibleFlash{0%,60%{box-shadow:0 0 0 3px var(--yellow)}100%{box-shadow:0 0 0 3px transparent}}
.bible-barre{position:fixed;left:50%;transform:translateX(-50%);bottom:84px;z-index:640;display:none;flex-wrap:wrap;justify-content:center;align-items:center;gap:6px;background:#fff;color:#1b2430;border:1px solid var(--line);border-radius:16px;padding:8px 10px;box-shadow:0 8px 28px rgba(0,0,0,.28);width:max-content;max-width:calc(100% - 16px)}
.bible-barre button{width:auto;padding:7px 10px;font-size:12px;flex-shrink:0}
.bible-barre #bibleBtnPlage.actif{background:var(--blue);color:#fff}
.bible-barre .hl-pastille{width:26px;height:26px;border-radius:50%;padding:0;border:2px solid #fff;box-shadow:0 0 0 1px #999}
.hl-pastille.jaune{background:#fff3a3!important}.hl-pastille.vert{background:#c8f0c0!important}.hl-pastille.bleu{background:#bfe0ff!important}.hl-pastille.rose{background:#ffd0e6!important}.hl-pastille.orange{background:#ffd9a8!important}
.bible-resultat{padding:10px 0;border-bottom:1px solid var(--line);cursor:pointer;font-size:14px;line-height:1.5}
.bible-resultat .ref{font-weight:800;color:var(--blue2);font-size:12px}
.bible-resultat mark{background:#ffe066;border-radius:3px;padding:0 1px}
video.video-player-frame{object-fit:contain}
.btn-langue{display:inline-flex;align-items:center;justify-content:center;width:42px;height:42px;padding:0;font-size:18px;line-height:1;background:rgba(255,255,255,.2);color:#fff;border:1px solid rgba(255,255,255,.55);border-radius:12px;box-shadow:none;flex-shrink:0}
.menu-langue{position:fixed;top:64px;right:12px;z-index:9400;background:#fff;border:1px solid var(--line);border-radius:14px;box-shadow:0 12px 34px rgba(0,0,0,.28);padding:6px;min-width:190px}
.menu-langue button{display:block;width:100%;text-align:left;background:transparent;color:#1b2430;box-shadow:none;border-radius:10px;padding:10px 12px;font-size:14px;font-weight:700}
.menu-langue button:active{background:#eef3f9}
#evtNav{display:flex;gap:6px;flex-wrap:wrap;margin:8px 0 12px}
.evt-carte{cursor:pointer}.evt-img{width:100%;max-height:210px;object-fit:cover;border-radius:12px;margin-bottom:10px;display:block}
.evt-puce{display:inline-block;font-size:11px;font-weight:800;padding:2px 9px;border-radius:999px;background:#eef3f9;color:#0b2f68;margin-right:4px}
.evt-puce.ok{background:#dff6e3;color:#14692d}.evt-puce.att{background:#fff1cc;color:#8a5a00}.evt-puce.ko{background:#fde2e2;color:#a31d1d}
.evt-actions{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:10px}.evt-actions button{width:100%;padding:8px;font-size:12px}
.evt-ligne{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--line)}
.evt-qte{display:flex;align-items:center;gap:8px}.evt-qte button{width:34px;height:34px;padding:0;font-size:18px}.evt-qte span{min-width:20px;text-align:center;font-weight:800}
.evt-qr{display:flex;justify-content:center;padding:12px;background:#fff;border-radius:12px;margin:8px 0}
.evt-barre{height:10px;border-radius:6px;background:#eef3f9;overflow:hidden}.evt-barre>div{height:100%;background:#0b2f68}
.scan-res{border-radius:14px;padding:16px;text-align:center;font-weight:800;margin-top:10px;font-size:16px}
.scan-res.ok{background:#14692d;color:#fff}.scan-res.dej{background:#b86e00;color:#fff}.scan-res.ko{background:#a31d1d;color:#fff}
</style>
</head>
<body>

  <!-- Zone d'impression du reçu de paiement (cachée sauf lors de l'impression) -->
  <div id="recuPrintZone" style="display:none;">
    <div class="recu-portrait">
      <div class="recu-header">
        <div class="logo-circle" id="recuLogo">🙏</div>
        <div class="nom" id="recuOrgName">JESUS</div>
      </div>
      <div class="recu-titre">Reçu de paiement</div>
      <div class="recu-ligne"><span>Membre</span><strong id="recuNomMembre">—</strong></div>
      <div class="recu-ligne"><span>Code membre</span><strong id="recuCodeMembre">—</strong></div>
      <div class="recu-ligne"><span>Type</span><strong id="recuType">—</strong></div>
      <div class="recu-ligne"><span>Méthode</span><strong id="recuMethode">—</strong></div>
      <div class="recu-ligne"><span>Date</span><strong id="recuDate">—</strong></div>
      <div class="recu-ligne"><span>Référence</span><strong id="recuTransactionId">—</strong></div>
      <div class="recu-montant" id="recuMontant">0 FCFA</div>
      <div class="recu-footer">Reçu généré automatiquement — conservez-le comme preuve de paiement.</div>
    </div>
  </div>

  <div class="topbar" id="topbar">
    <div class="logo-circle" id="topbarLogo">🙏</div>
    <div class="topbar-nom-wrap">
      <div class="topbar-nom" id="topbarNom">JESUS</div>
      <div class="topbar-sub" id="topbarSub">Espace membres</div>
    </div>
    <button id="btnCompte" class="btn-langue" onclick="afficherOnglet('badge')" title="Mon compte" aria-label="Mon compte" style="display:none;"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg></button>
    <button id="btnLangue" class="btn-langue" onclick="ouvrirMenuLangue_(event)" title="Changer la langue de l'application" aria-label="Changer la langue"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg></button>
    <div class="topbar-actions">
      <button id="btnContact" onclick="afficherEcranContact()" class="btn-topbar-fort btn-contact" title="Contactez-nous">📞 Contact</button>
      <button id="btnDeconnexion" onclick="quitterSession()" class="btn-topbar-fort btn-session" style="display:none;">Se déconnecter</button>
    </div>
    <button id="btnInstallerApp" onclick="installerApplication()" style="display:none;width:auto;padding:8px 12px;font-size:12px;background:rgba(255,255,255,.18);color:#fff;box-shadow:none;white-space:nowrap;flex-shrink:0;">📲 Installer</button>
  </div>

  <!-- ===== ACCUEIL (branding centré) ===== -->
  <div id="ecranAccueil" class="center-screen auth-screen">
    <div class="wrap">
      <div class="card">
        <div class="brand-center">
          <div class="logo-circle-lg" id="accueilLogo">🙏</div>
          <div class="brand-nom" id="accueilNomAssoc">JESUS</div>
        </div>
        <h1 class="titre">Bienvenue 🙏</h1>
        <p class="subtitle">Connectez-vous à votre espace membre ou créez votre compte.</p>
        <button onclick="afficherEcran('connexionForm')">Se connecter</button>
        <button class="secondary full-mt" onclick="demarrerInscription()">Créer un compte</button>
        <button class="ghost-link full-mt" onclick="afficherEcranContact()">📞 Contactez-nous</button>
        <select id="selecteurTraduction" onchange="traduireVers(this.value)" style="margin-top:10px;">
          <option value="">Traduire l'application…</option>
          <option value="fr">Français (original)</option>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="pt">Português</option>
          <option value="ar">العربية</option>
          <option value="de">Deutsch</option>
          <option value="sw">Kiswahili</option>
          <option value="am">አማርኛ</option><option value="ti">ትግርኛ</option><option value="mg">Malagasy</option><option value="ny">Chichewa</option><option value="rw">Kinyarwanda</option><option value="so">Soomaali</option><option value="st">Sesotho</option>
        </select>
        <div id="google_translate_element" style="display:none;"></div>
        <a href="confidentialite.html" class="ghost-link full-mt" style="display:block;text-align:center;font-size:12px;opacity:.8;text-decoration:none;">🔒 Politique de confidentialité</a>
        <button onclick="diagnostiquerPWA()" class="ghost-link full-mt" style="font-size:11px;opacity:.7;">🔧 Diagnostic installation (pour le support)</button>
        <div id="diagnosticPWAZone" class="codes-box" style="display:none;user-select:text;-webkit-user-select:text;"></div>
      </div>

      <div class="card">
        <p class="field-label" style="text-align:center;margin-bottom:12px;">Sans créer de compte, vous pouvez déjà</p>
        <div class="tuiles-visiteur">
          <div class="tuile-visiteur" onclick="ouvrirGroupePriereVisiteur()"><span class="ic">💬</span><span class="lib">Groupe de prière</span></div>
          <div class="tuile-visiteur" onclick="entrerModeVisiteur('bible')"><span class="ic">📖</span><span class="lib">Bible</span></div>
          <div class="tuile-visiteur" onclick="entrerModeVisiteur('prieres')"><span class="ic">🙏</span><span class="lib">Séances directes</span></div>
          <div class="tuile-visiteur" onclick="entrerModeVisiteur('evenements')"><span class="ic">🎫</span><span class="lib">Événements</span></div>
          <div class="tuile-visiteur" onclick="entrerModeVisiteur('audios')"><span class="ic">🎧</span><span class="lib">Audios</span></div>
          <div class="tuile-visiteur" onclick="entrerModeVisiteur('documents')"><span class="ic">📄</span><span class="lib">Documents</span></div>
          <div class="tuile-visiteur" onclick="entrerModeVisiteur('videos')"><span class="ic">▶️</span><span class="lib">Vidéos</span></div>
          <div class="tuile-visiteur" onclick="entrerModeVisiteur('offrandes')"><span class="ic">🙌</span><span class="lib">Offrandes & Dons</span></div>
          <div class="tuile-visiteur" onclick="entrerModeVisiteur('cotisation')"><span class="ic">💳</span><span class="lib">Collectes</span></div>
          <div class="tuile-visiteur" style="grid-column:span 2;" onclick="entrerModeVisiteur('demandePriere')"><span class="ic">✉️</span><span class="lib">Demande de prière</span></div>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== SE CONNECTER (téléphone + mot de passe) ===== -->
  <div id="ecranConnexionForm" class="center-screen auth-screen">
    <div class="wrap">
      <div class="card">
        <h1 class="titre">Connexion</h1>
        <p class="subtitle">Entrez votre numéro de téléphone et votre mot de passe.</p>
        <label class="field-label">Téléphone</label>
        <input id="loginTelephone" type="tel" placeholder="Ex : 97000000">
        <label class="field-label">Mot de passe</label>
        <input id="loginMotDePasse" type="password" placeholder="Votre mot de passe">
        <div id="erreurConnexion" class="error" style="display:none;"></div>
        <button onclick="seConnecter()">Se connecter</button>
        <button class="ghost-link" onclick="afficherEcranMotDePasseOublie()">Mot de passe oublié ?</button>
        <button class="ghost-link" onclick="demarrerInscription()">Pas encore de compte ? Créer un compte</button>
        <button class="ghost-link" onclick="retourVersVisiteur_()">← Retour</button>
      </div>
    </div>
  </div>

  <!-- ===== MOT DE PASSE OUBLIÉ ===== -->
  <div id="ecranMotDePasseOublie" class="center-screen auth-screen">
    <div class="wrap">
      <div class="card" id="mdpOublieEtapeTelephone">
        <h1 class="titre left">Mot de passe oublié</h1>
        <p class="subtitle left">Entrez votre numéro de téléphone. Si un e-mail est associé à votre compte, un code de réinitialisation vous y sera envoyé.</p>
        <label class="field-label">Téléphone</label>
        <input id="mdpOublieTelephone" type="tel" placeholder="Le numéro utilisé pour vous connecter">
        <div id="erreurMdpOublieTelephone" class="error" style="display:none;"></div>
        <button onclick="demarrerReinitialisation()">Envoyer le code</button>
        <button class="ghost-link" onclick="afficherEcran('connexionForm')">← Retour</button>
      </div>

      <div class="card" id="mdpOublieEtapeCode" style="display:none;">
        <h1 class="titre left">Entrez le code reçu</h1>
        <p class="subtitle left">Vérifiez votre boîte e-mail (et vos indésirables). Le code est valable 30 minutes.</p>
        <label class="field-label">Code reçu par e-mail</label>
        <input id="mdpOublieCode" type="text" inputmode="numeric" placeholder="Ex : 123456" style="text-align:center;letter-spacing:3px;font-weight:800;">
        <label class="field-label">Nouveau mot de passe</label>
        <input id="mdpOublieNouveauMdp" type="password" placeholder="Au moins 4 caractères">
        <label class="field-label">Confirmer le mot de passe</label>
        <input id="mdpOublieConfirmation" type="password" placeholder="Retapez le mot de passe">
        <div id="erreurMdpOublieCode" class="error" style="display:none;"></div>
        <button onclick="validerReinitialisation()">Réinitialiser mon mot de passe</button>
        <button class="ghost-link" onclick="afficherEcran('connexionForm')">← Retour</button>
      </div>
    </div>
  </div>

  <!-- ===== CONTACTEZ-NOUS ===== -->
  <div id="ecranContact" class="center-screen auth-screen">
    <div class="wrap">
      <div class="card">
        <h1 class="titre left">📞 Contactez-nous</h1>
        <p class="subtitle left">Une question, une suggestion ? Écrivez-nous, nous vous répondrons rapidement.</p>
        <div class="card" style="background:#f7faff;margin-bottom:16px;">
          <div class="item-desc" style="font-size:13px;margin-bottom:6px;">💬 WhatsApp : <a href="https://wa.me/2250555703605" target="_blank" rel="noopener" style="font-weight:800;color:var(--blue2);text-decoration:none;">+225 05 55 70 36 05</a></div>
          <div class="item-desc" id="contactTelephoneLigne" style="font-size:13px;margin-bottom:6px;display:none;">☎️ Téléphone : <strong id="contactTelephone">—</strong></div>
          <div class="item-desc" style="font-size:13px;">✉️ E-mail : <strong id="contactEmail">—</strong></div>
        </div>
        <label class="field-label">Votre nom</label>
        <input id="contactNom" type="text" placeholder="Nom">
        <label class="field-label">Votre e-mail ou numéro de téléphone</label>
        <input id="contactCoordonnee" type="text" placeholder="Pour qu'on puisse vous répondre">
        <label class="field-label">Votre message</label>
        <textarea id="contactMessage" rows="4" placeholder="Écrivez votre message…"></textarea>
        <div id="erreurContact" class="error" style="display:none;"></div>
        <button class="flame" onclick="envoyerContactClick()">Envoyer le message</button>
        <div id="messageContact" style="margin-top:10px;font-size:13px;"></div>
        <a href="confidentialite.html" class="ghost-link full-mt" style="display:block;text-align:center;font-size:12px;opacity:.8;text-decoration:none;">🔒 Politique de confidentialité</a>
        <button class="ghost-link full-mt" onclick="retourDepuisContact()">← Retour</button>
      </div>
    </div>
  </div>

  <!-- ===== CODE D'ACCÈS INSCRIPTION ===== -->
  <div id="ecranInscriptionCode" class="center-screen auth-screen">
    <div class="wrap">
      <div class="card">
        <div class="brand-center">
          <div class="logo-circle-lg">🔐</div>
        </div>
        <p class="field-label" style="margin-bottom:14px;">Accès réservé</p>
        <h1 class="titre">Code d'accès requis</h1>
        <p class="subtitle">Pour créer un compte, vous devez posséder un code d'accès remis par un administrateur de JESUS.</p>
        <label class="field-label">Votre code d'accès</label>
        <input id="codeInscription" type="text" autocomplete="off" placeholder="Ex : JES-AB12CD34" style="text-transform:uppercase;letter-spacing:1.5px;font-weight:800;text-align:center;">
        <div id="erreurCodeInscription" class="error" style="display:none;"></div>
        <button onclick="validerCodeInscription()">Vérifier le code</button>
        <button class="ghost-link" onclick="retourVersVisiteur_()">← Retour</button>
      </div>
    </div>
  </div>

  <!-- ===== CREER UN COMPTE — ETAPE 1 : identité ===== -->
  <div id="ecranInscriptionEtape1" class="center-screen auth-screen">
    <div class="wrap">
      <div class="card">
        <p class="field-label" style="margin-bottom:14px;">Étape 1 sur 2 — Identité</p>
        <h1 class="titre left">Faisons connaissance</h1>
        <p class="subtitle left">Ces informations nous aident à mieux vous connaître et vous accompagner. Tous les champs sont obligatoires.</p>

        <label class="field-label">Nom *</label>
        <input id="insNom" type="text" placeholder="Nom">
        <label class="field-label">Prénom *</label>
        <input id="insPrenom" type="text" placeholder="Prénom">
        <label class="field-label">Pays d'origine *</label>
        <input id="insPaysOrigine" type="text" placeholder="Ex : Bénin">
        <label class="field-label">Date de naissance *</label>
        <div class="bible-selecteurs">
          <select id="insNaissanceJour"></select>
          <select id="insNaissanceMois"></select>
          <select id="insNaissanceAnnee"></select>
        </div>
        <label class="field-label">Département / Province d'origine *</label>
        <input id="insDepartement" type="text" placeholder="Ex : Atlantique">
        <label class="field-label">Situation matrimoniale *</label>
        <select id="insSituation">
          <option value="">Sélectionner…</option>
          <option value="Célibataire">Célibataire</option>
          <option value="Marié(e)">Marié(e)</option>
          <option value="Divorcé(e)">Divorcé(e)</option>
          <option value="Veuf(ve)">Veuf(ve)</option>
        </select>

        <div id="erreurInscription1" class="error" style="display:none;"></div>
        <button onclick="allerInscriptionEtape2()">Continuer</button>
        <button class="ghost-link" onclick="retourVersVisiteur_()">← Retour</button>
      </div>
    </div>
  </div>

  <!-- ===== CREER UN COMPTE — ETAPE 2 : église, contact, photo, mot de passe ===== -->
  <div id="ecranInscriptionEtape2" class="center-screen auth-screen">
    <div class="wrap">
      <div class="card">
        <p class="field-label" style="margin-bottom:14px;">Étape 2 sur 2 — Vie d'église, contact & sécurité</p>
        <h1 class="titre left">Presque terminé</h1>
        <p class="subtitle left">Dernières informations avant de finaliser votre inscription. Tous les champs sont obligatoires.</p>

        <label class="field-label">Ma photo *</label>
        <div class="photo-upload-preview" id="insPhotoPreview">👤</div>
        <label class="file-btn-label" style="display:block; text-align:center; margin-bottom:14px;">
          Choisir une photo
          <input type="file" accept="image/*" onchange="gererUploadPhotoInscription(event)" style="display:none;">
        </label>

        <label class="field-label">Profession *</label>
        <input id="insProfession" type="text" placeholder="Votre métier">
        <label class="field-label">Église *</label>
        <input id="insEglise" type="text" placeholder="Nom de votre église">
        <label class="field-label">Rôle joué dans l'église *</label>
        <input id="insRoleEglise" type="text" list="suggestionsRoles" placeholder="Ex : Choriste, Diacre, Membre simple…">
        <datalist id="suggestionsRoles">
          <option value="Membre simple">
          <option value="Pasteur">
          <option value="Diacre">
          <option value="Choriste">
          <option value="Trésorier(ère)">
          <option value="Secrétaire">
          <option value="Responsable de groupe">
          <option value="Intercesseur(rice)">
        </datalist>
        <label class="field-label">Adresse actuelle *</label>
        <input id="insAdresse" type="text" placeholder="Quartier, ville">
        <label class="field-label">Téléphone *</label>
        <input id="insTelephone" type="tel" placeholder="Ce numéro servira à vous connecter">
        <label class="field-label">Email *</label>
        <input id="insEmail" type="email" required placeholder="E-mail (obligatoire) — pour réinitialiser votre mot de passe et recevoir vos reçus">
        <label class="field-label">Créer un mot de passe *</label>
        <input id="insMotDePasse" type="password" placeholder="Au moins 4 caractères">
        <label class="field-label">Confirmer le mot de passe *</label>
        <input id="insMotDePasseConfirm" type="password" placeholder="Retapez le mot de passe">

        <div id="erreurInscription2" class="error" style="display:none;"></div>
        <button class="secondary" style="margin-bottom:10px;" onclick="retourInscriptionEtape1()">Retour</button>
        <button onclick="finaliserInscription()">Créer mon compte</button>
      </div>
    </div>
  </div>

  <!-- ===== TABLEAU DE BORD ===== -->
  <div id="ecranDashboard" class="wrap" style="display:none;">
    <h1 class="titre left" id="bonjourNom">Bonjour 👋</h1>
    <div id="sliderAfficheZone" style="display:none;"></div>

    <div class="tabs-wrap" id="tabsWrap">
      <div class="tabs" id="tabsPrincipaux"></div>
      <div class="tabs-scroll-hint" id="tabsScrollHint">›</div>
    </div>

    <!-- Lecteurs persistants : placés hors de toute rubrique (.section) pour continuer à
         jouer sans interruption quand on change d'onglet — seul un arrêt volontaire (✕) les
         coupe. Bloc video au-dessus de audio : s'il y en a deux à la fois (cas rare), la
         vidéo reste la plus visible des deux. -->
    <div class="lecteur-persistant" id="lecteurVideoZone" style="display:none;padding:0;overflow:hidden;"></div>
    <div class="lecteur-persistant" id="lecteurAudioZone" style="display:none;"></div>
    <!-- Lecteur TV flottant : placé hors de toute rubrique, il continue de jouer quand on change de page -->
    <div class="lecteur-persistant" id="lecteurTvZone" style="display:none;">
      <div class="tv-entete"><span class="tv-titre" id="tvInfoNom"></span><span id="tvBadgeLive"></span><img id="tvLogoEntete" class="tv-logo-entete" alt="" style="display:none;"><button class="tv-fermer" onclick="arreterTv_()" title="Fermer la TV">✕</button></div>
      <div class="tv-ecran" id="tvEcran">
        <div id="tvEcranInterieur"></div>
        <div id="tvTapPlay" class="tv-vide" style="display:none;cursor:pointer;background:rgba(0,0,0,.6);z-index:3;font-size:13px;" onclick="tvLancerLecture_()">▶ Touchez pour lancer la lecture</div>
        <button id="tvBtnPleinEcran" class="tv-btn-plein" onclick="tvPleinEcran_()" title="Plein écran">⛶</button>
      </div>
    </div>

    <div class="section active" id="section-groupes">
      <div class="section-title"><span class="ic">💬</span> Groupes WhatsApp</div>
      <p class="subtitle left" style="margin-top:-6px;">Certains groupes demandent un code d'accès spécifique fourni par un responsable.</p>
      <div class="card" id="listeGroupes"><div class="loading">Chargement…</div></div>
    </div>

    <div class="section" id="section-badge">
      <div class="section-title"><span class="ic">👤</span> Mon compte</div>
      <p class="field-label">Mon badge</p>
      <div id="badgePrintZone" style="display:flex;justify-content:center;padding:10px 0 4px;">
        <div class="badge-portrait">
          <div class="badge-top-band">
            <div class="badge-mini-logo" id="badgeMiniLogo">🙏</div>
            <div class="badge-org-name" id="badgeOrgName">JESUS</div>
          </div>
          <div class="badge-photo-wrap" id="badgePhotoWrap">👤</div>
          <div class="badge-body">
            <div class="badge-fullname" id="badgeNom">—</div>
            <div class="badge-role-tag" id="badgeRole">Membre</div>
            <div class="badge-divider"></div>
            <div class="badge-info-row"><span class="ic">📞</span><span id="badgeTel">—</span></div>
            <div class="badge-status-tag" id="badgeStatut" style="display:none;"></div>
            <div class="badge-qr-wrap"><img id="badgeQr" width="88" height="88"></div>
            <div class="badge-code-small" id="badgeCode">—</div>
          </div>
        </div>
      </div>
      <button class="secondary full-mt" onclick="window.print()">🖨️ Imprimer / Enregistrer en PDF</button>

      <div class="card" style="margin-top:16px;">
        <p class="field-label">Mes informations</p>
        <label class="field-label">E-mail</label>
        <input id="cpEmail" type="email" placeholder="Adresse e-mail">
        <label class="field-label">Adresse actuelle</label>
        <input id="cpAdresse" type="text" placeholder="Adresse actuelle">
        <label class="field-label">Profession</label>
        <input id="cpProfession" type="text" placeholder="Votre métier">
        <label class="field-label">Église</label>
        <input id="cpEglise" type="text" placeholder="Nom de votre église">
        <div id="cpMsgInfos" class="item-desc" style="display:none;margin-bottom:8px;"></div>
        <button class="flame" onclick="compteSauvegarderInfos()">Enregistrer mes informations</button>
      </div>

      <div class="card" style="margin-top:12px;">
        <p class="field-label">Changer mon numéro de téléphone</p>
        <p class="item-desc">Votre numéro sert à vous connecter. Votre mot de passe actuel est demandé pour confirmer.</p>
        <input id="cpNouveauTel" type="tel" placeholder="Nouveau numéro (avec indicatif)">
        <input id="cpTelMdp" type="password" placeholder="Mot de passe actuel">
        <div id="cpMsgTel" class="item-desc" style="display:none;margin-bottom:8px;"></div>
        <button onclick="compteChangerTelephone()">Changer mon numéro</button>
      </div>

      <div class="card" style="margin-top:12px;">
        <p class="field-label">Changer mon mot de passe</p>
        <input id="cpMdpActuel" type="password" placeholder="Mot de passe actuel">
        <input id="cpMdpNouveau" type="password" placeholder="Nouveau mot de passe (4 caractères minimum)">
        <input id="cpMdpConfirm" type="password" placeholder="Confirmer le nouveau mot de passe">
        <div id="cpMsgMdp" class="item-desc" style="display:none;margin-bottom:8px;"></div>
        <button onclick="compteChangerMotDePasse()">Changer mon mot de passe</button>
      </div>

      <div id="compteRoles"></div>

      <button class="danger-outline full-mt" onclick="quitterSession()">Se déconnecter</button>
    </div>

    <div class="section" id="section-cotisation">
      <div class="section-title"><span class="ic">💳</span> Collectes</div>
      <div class="card" id="listeTypesCotisation"><div class="loading">Chargement…</div></div>
      <div id="messagePaiement" style="margin: -6px 0 14px; font-size:13px;"></div>
      <div class="stat-grid">
        <div class="stat-box"><div class="stat-num" id="statTotalPaye">—</div><div class="stat-label">Total payé (FCFA)</div></div>
        <div class="stat-box"><div class="stat-num" id="statNbPaiements">—</div><div class="stat-label">Paiements</div></div>
      </div>
      <div class="card">
        <p class="field-label" style="margin-bottom:10px;">Historique de mes contributions</p>
        <div id="listeMesCotisations"><div class="loading">Chargement…</div></div>
      </div>
    </div>

    <!-- Offrandes / Dons (montant libre, distinct des cotisations) -->
    <div class="section" id="section-offrandes">
      <div class="section-title"><span class="ic">🙌</span> Offrandes & Dons</div>
      <div class="card">
        <label class="field-label">Montant (FCFA)</label>
        <input id="offrandeMontant" type="number" min="1" placeholder="Ex : 5000">
        <label class="field-label">Motif (facultatif)</label>
        <input id="offrandeMotif" type="text" placeholder="Ex : Offrande de reconnaissance">
        <div id="erreurOffrande" class="error" style="display:none;"></div>
        <button class="flame" onclick="lancerOffrande()">Faire une offrande</button>
        <div id="messageOffrande" style="margin-top:10px; font-size:13px;"></div>
      </div>
      <div class="card">
        <p class="field-label" style="margin-bottom:10px;">Historique de mes dons</p>
        <div id="listeMesOffrandes"><div class="loading">Chargement…</div></div>
      </div>
    </div>

    <!-- Bible (bilingue FR/EN) -->
    <div class="section" id="section-communaute">
      <div class="section-title"><span class="ic">✨</span> Communauté</div>
      <div id="xtrNav" style="display:flex;gap:6px;flex-wrap:nowrap;overflow-x:auto;margin-bottom:10px;padding-bottom:4px;-webkit-overflow-scrolling:touch;"></div>
      <div id="xtrContenu"></div>
    </div>

    <div class="section" id="section-evenements">
      <div class="section-title"><span class="ic">🎫</span> Événements</div>
      <div id="evtNav"></div>
      <div id="evtContenu"></div>
    </div>

    <div class="section" id="section-bible">
      <div class="section-title"><span class="ic">📖</span> Bible</div>
      <div class="card">
        <div class="bible-langue-toggle">
          <button id="bibleBtnFr" class="secondary" onclick="changerLangueBible('fr')">🇫🇷 Français</button>
          <button id="bibleBtnEn" onclick="changerLangueBible('en')">🇬🇧 English</button>
        </div>
        <div class="bible-selecteurs">
          <select id="bibleLivre" onchange="chargerChapitreBible()"></select>
          <select id="bibleChapitre" onchange="chargerChapitreBible()" style="max-width:90px;"></select>
        </div>
        <div class="bible-selecteurs" style="margin-top:8px;">
          <button class="secondary small" onclick="chapitreBiblePrecedent()">◀</button>
          <button class="secondary small" id="btnEcouterBible" onclick="toggleLectureBible()">🔊 Écouter</button>
          <button class="secondary small" onclick="chapitreBibleSuivant()">▶</button>
        </div>
        <div class="bible-selecteurs" style="margin-top:8px;">
          <button class="secondary small" onclick="bibleToutSelectionner()">☑ Tout sélectionner</button>
          <button class="secondary small" onclick="bibleToggleRecherche()">🔍 Rechercher</button>
        </div>
        <p class="item-desc" style="margin:10px 0 0;">Touchez un verset pour le sélectionner, puis surlignez-le ou copiez-le.</p>
      </div>
      <div class="card" id="bibleRechercheCard" style="display:none;">
        <input id="bibleRechercheTexte" type="text" placeholder="Mot ou expression à chercher…" onkeydown="if(event.key==='Enter')bibleLancerRecherche(1)">
        <select id="bibleRechercheScope">
          <option value="bible">Dans toute la Bible</option>
          <option value="livre">Dans ce livre</option>
          <option value="chapitre">Dans ce chapitre</option>
        </select>
        <button class="flame" onclick="bibleLancerRecherche(1)">Rechercher</button>
        <div id="bibleRechercheResultats" style="margin-top:12px;"></div>
      </div>
      <div class="bible-barre" id="bibleBarreSelection">
        <span id="bibleNbSel" style="font-size:12px;font-weight:800;color:var(--blue2);"></span>
        <button class="hl-pastille jaune" onclick="bibleSurligner('jaune')" title="Jaune"></button>
        <button class="hl-pastille vert" onclick="bibleSurligner('vert')" title="Vert"></button>
        <button class="hl-pastille bleu" onclick="bibleSurligner('bleu')" title="Bleu"></button>
        <button class="hl-pastille rose" onclick="bibleSurligner('rose')" title="Rose"></button>
        <button class="hl-pastille orange" onclick="bibleSurligner('orange')" title="Orange"></button>
        <button class="secondary" onclick="bibleSurligner('')" title="Retirer le surlignage">🧽</button>
        <button class="secondary" id="bibleBtnPlage" onclick="bibleTogglePlage()" title="Sélectionner un passage">↔ Passage</button>
        <button class="secondary" onclick="bibleToutSelectionner()">☑ Tout</button>
        <button class="flame" onclick="bibleCopier()">📋 Copier</button>
        <button class="secondary" onclick="bibleAnnulerSelection()">✕</button>
      </div>
      <div class="card" id="bibleContenuZone"><div class="empty-state">Choisissez un livre pour commencer la lecture.</div></div>
      <div class="bible-selecteurs">
        <button class="secondary small" onclick="chapitreBiblePrecedent()">◀</button>
        <button class="secondary small" onclick="chapitreBibleSuivant()">▶</button>
      </div>
    </div>

    <!-- Documents (gratuits ou payants, téléchargeables) -->
    <div class="section" id="section-documents">
      <div class="section-title"><span class="ic">📄</span> Documents</div>

      <div class="sub-nav" id="subNavDocuments">
        <button class="sub-nav-btn active" data-sub="accueil" onclick="afficherSousDocuments('accueil')">Accueil</button>
        <button class="sub-nav-btn" data-sub="actualites" onclick="afficherSousDocuments('actualites')">Actualités</button>
        <button class="sub-nav-btn" data-sub="tous" onclick="afficherSousDocuments('tous')">Tous les documents</button>
      </div>

      <div id="messageAchatDocument" style="margin-bottom:10px;font-size:13px;"></div>

      <div class="sub-section active" id="documentsSous-accueil">
        <div class="zone-pub" id="pubDocumentsHaut"></div>
        <div id="documentsAlaUne"><div class="loading">Chargement…</div></div>
        <div class="zone-pub" id="pubDocumentsBas"></div>
      </div>

      <div class="sub-section" id="documentsSous-actualites">
        <div class="card" id="documentsActualites"><div class="loading">Chargement…</div></div>
      </div>

      <div class="sub-section" id="documentsSous-tous">
        <input type="text" id="rechercheDocuments" placeholder="🔎 Rechercher un document…" oninput="filtrerDocuments()">
        <div class="card" id="listeDocuments"><div class="loading">Chargement…</div></div>
      </div>
    </div>

    <!-- Demande de prière (formulaire public) -->
    <div class="section" id="section-demandePriere">
      <div class="section-title"><span class="ic">✉️</span> Demande de prière</div>
      <div class="card" id="dpFormulaireZone">
        <div class="form-public-note">Partagez votre requête, notre équipe de prière vous accompagne.</div>
        <div class="item-desc" style="background:#fff8e1;border:1px solid #f4c400;border-radius:12px;padding:12px 14px;margin-bottom:14px;line-height:1.6;">🙏 Après chaque demande de prière, le groupe d'intercession <strong>CIEUX OUVERTS</strong> prend immédiatement votre cas en charge et engage la discussion avec vous pour programmer une rencontre de prière en ligne. Chaque demande de prière est validée par un don minimal de <strong>2 000 F CFA</strong>, destiné à couvrir les charges de communication du groupe d'intercession.</div>
        <label class="field-label">Nom</label>
        <input id="dpNom" type="text" placeholder="Nom">
        <label class="field-label">Prénom</label>
        <input id="dpPrenom" type="text" placeholder="Prénom">
        <label class="field-label">Situation matrimoniale</label>
        <select id="dpSituation">
          <option value="">Sélectionner…</option>
          <option value="Célibataire">Célibataire</option>
          <option value="Marié(e)">Marié(e)</option>
          <option value="Divorcé(e)">Divorcé(e)</option>
          <option value="Veuf(ve)">Veuf(ve)</option>
        </select>
        <label class="field-label">Profession</label>
        <input id="dpProfession" type="text" placeholder="Votre métier">
        <label class="field-label">Âge</label>
        <input id="dpAge" type="number" min="1" placeholder="Âge">
        <label class="field-label">Numéro WhatsApp</label>
        <input id="dpWhatsapp" type="tel" placeholder="Numéro WhatsApp">
        <label class="field-label">Requête de prière (claire et précise)</label>
        <textarea id="dpRequete" rows="4" placeholder="Votre requête…"></textarea>
        <div id="erreurDemandePriere" class="error" style="display:none;"></div>
        <button class="flame" onclick="envoyerDemandePriereClick()">Envoyer ma requête</button>
        <div id="messageDemandePriere" style="margin-top:10px;font-size:13px;"></div>
      </div>

      <p class="field-label" style="margin:18px 0 8px;">Vous avez déjà envoyé une demande ?</p>
      <div class="card" id="dpSuiviFormulaireZone">
        <p class="subtitle left">Entrez le code reçu après l'envoi et votre numéro WhatsApp pour échanger avec notre équipe.</p>
        <input id="dpSuiviCode" type="text" placeholder="Code reçu (ex : PR-XXXXXXXX)">
        <input id="dpSuiviWhatsapp" type="tel" placeholder="Votre numéro WhatsApp">
        <div id="erreurSuiviDemande" class="error" style="display:none;"></div>
        <button class="secondary" onclick="ouvrirSuiviDemandePriere()">Voir la conversation</button>
      </div>

      <div class="card" id="dpConversationZone" style="display:none;">
        <button class="secondary small" style="margin-bottom:10px;" onclick="fermerSuiviDemandePriere()">← Retour</button>
        <p class="field-label" id="dpConversationTitre"></p>
        <div id="dpListeMessages"><div class="loading">Chargement…</div></div>
        <textarea id="dpNouveauMessage" rows="2" placeholder="Votre message…" style="margin-top:10px;"></textarea>
        <div id="erreurDpMessage" class="error" style="display:none;"></div>
        <div class="msg-audio-controles">
          <button onclick="envoyerMonMessageDemandePriere()">Envoyer le texte</button>
        </div>
        <div class="msg-audio-controles">
          <button class="btn-micro" id="btnMicroDemandePriere" onclick="toggleEnregistrementDemandePriere()">🎙️ Message vocal</button>
          <span class="chrono-enregistrement" id="chronoAudioDp" style="display:none;">00:00</span>
        </div>
      </div>
    </div>

    <!-- Audios (playlists par catégorie, Google Drive) -->
    <div class="section" id="section-audios">
      <div class="section-title"><span class="ic">🎧</span> Audios</div>

      <div class="sub-nav" id="subNavAudios">
        <button class="sub-nav-btn active" data-sub="accueil" onclick="afficherSousAudios('accueil')">Accueil</button>
        <button class="sub-nav-btn" data-sub="emissions" onclick="afficherSousAudios('emissions')">Playlists</button>
        <button class="sub-nav-btn" data-sub="actualites" onclick="afficherSousAudios('actualites')">Actualités</button>
      </div>

      <div class="sub-section active" id="audiosSous-accueil">
        <div class="zone-pub" id="pubAudiosHaut"></div>
        <div id="audiosAlaUne"><div class="loading">Chargement…</div></div>
        <div class="zone-pub" id="pubAudiosBas"></div>
      </div>

      <div class="sub-section" id="audiosSous-emissions">
        <input type="text" id="rechercheAudios" placeholder="🔎 Rechercher un audio…" oninput="filtrerAudios()">
        <div id="listeCategoriesAudio"><div class="loading">Chargement…</div></div>
        <div class="card" id="listeAudiosCategorie" style="display:none;"></div>
      </div>

      <div class="sub-section" id="audiosSous-actualites">
        <div id="listeActualitesAudios"><div class="loading">Chargement…</div></div>
      </div>
    </div>

    <!-- Soumission de contenu (membres ayant le statut Auteur uniquement) -->
    <div class="section" id="section-soumissions">
      <div class="section-title"><span class="ic">✍️</span> Soumettre du contenu</div>
      <div class="card">
        <p class="subtitle left">Vous avez le statut Auteur : vous pouvez soumettre un document, un audio ou une vidéo dont vous êtes l'auteur. Après vérification, l'administration valide ou rejette votre soumission ; si validée, des frais de publication de <strong>2000 FCFA</strong> vous seront demandés avant la mise en ligne.</p>
        <label class="field-label">Type de contenu</label>
        <select id="subType" onchange="document.getElementById('subParolesZone').style.display = (this.value === 'Audio' || this.value === 'Video') ? 'block' : 'none';">
          <option value="Document">Document</option>
          <option value="Audio">Audio</option>
          <option value="Video">Vidéo</option>
        </select>
        <label class="field-label">Titre</label>
        <input id="subTitre" type="text" placeholder="Titre de votre œuvre">
        <label class="field-label">Description (200 mots maximum)</label>
        <textarea id="subDescription" rows="4" placeholder="Décrivez votre contenu…" oninput="compterMotsSoumission()"></textarea>
        <div id="compteurMotsSoumission" class="item-desc" style="text-align:right;margin-top:-6px;">0 / 200 mots</div>
        <label class="field-label">Prix de vente souhaité (FCFA — laissez 0 pour un contenu gratuit)</label>
        <input id="subPrix" type="number" min="0" value="0">
        <label class="field-label">Votre e-mail</label>
        <input id="subEmail" type="email" placeholder="Pour être notifié à chaque achat">
        <label class="field-label">Fichier (depuis votre téléphone ou ordinateur)</label>
        <input type="file" id="subFichier">
        <label class="field-label">Couverture (facultative)</label>
        <div id="subCoverPreviewZone" style="display:none;margin-bottom:10px;"><img id="subCoverPreviewImg" style="width:100px;height:60px;object-fit:cover;border-radius:10px;"></div>
        <label class="file-btn-label">🖼️ Choisir une image<input type="file" id="subCoverFichier" accept="image/*" style="display:none;" onchange="previsualiserCoverGenerique(event,'subCoverPreviewImg','subCoverPreviewZone','soumission')"></label>
        <div id="subParolesZone" style="display:none;">
          <label class="field-label" style="margin-top:14px;">Paroles (facultatif — pour un audio ou une vidéo musicale)</label>
          <p class="subtitle left" style="margin:-4px 0 8px;font-size:11px;">Écrivez-les directement, ou importez un fichier (PDF...) — l'un ou l'autre, ou les deux.</p>
          <textarea id="subParoles" rows="4" placeholder="Paroles…"></textarea>
          <label class="file-btn-label" style="margin-top:8px;">📎 Importer un fichier (PDF...)<input type="file" id="subParolesFichier" accept=".pdf,.doc,.docx,.txt" style="display:none;" onchange="document.getElementById('subParolesFichierNom').textContent = this.files[0] ? '📎 ' + this.files[0].name : '';"></label>
          <div id="subParolesFichierNom" class="item-desc" style="margin-top:4px;"></div>
        </div>
        <div id="erreurSoumission" class="error" style="display:none;margin-top:10px;"></div>
        <button class="flame full-mt" id="btnEnvoyerSoumission" onclick="envoyerSoumissionClick()">Soumettre pour vérification</button>
        <div id="infoSoumission" class="item-desc" style="display:none;margin-top:8px;"></div>
      </div>
      <p class="field-label" style="margin-bottom:8px;">Mes soumissions</p>
      <div class="card" id="listeMesSoumissions"><div class="loading">Chargement…</div></div>
    </div>

    <div class="section" id="section-messages">
      <div class="section-title"><span class="ic">✉️</span> Messagerie avec l'administration</div>
      <div id="listeMesAnnonces"></div>
      <div class="card">
        <textarea id="nouveauMessage" rows="2" placeholder="Votre message…"></textarea>
        <div id="erreurNouveauMessage" class="error" style="display:none;"></div>
        <div class="msg-audio-controles">
          <button onclick="envoyerMonMessage()">Envoyer le texte</button>
        </div>
        <div class="msg-audio-controles">
          <button class="btn-micro" id="btnMicroMessage" onclick="toggleEnregistrementAudio()">🎙️ Message vocal</button>
          <span class="chrono-enregistrement" id="chronoAudio" style="display:none;">00:00</span>
        </div>
      </div>
      <div class="card">
        <p class="field-label" style="margin-bottom:10px;">Mes échanges</p>
        <input type="text" id="rechercheMesMessages" placeholder="🔎 Rechercher dans mes messages…" oninput="filtrerMesMessages()">
        <div id="listeMesMessages"><div class="loading">Chargement…</div></div>
      </div>
    </div>

    <div class="section" id="section-videos">
      <div class="section-title"><span class="ic">▶️</span> Vidéos</div>

      <div class="sub-nav" id="subNavVideos">
        <button class="sub-nav-btn active" data-sub="accueil" onclick="afficherSousVideos('accueil')">Accueil</button>
        <button class="sub-nav-btn" data-sub="emissions" onclick="afficherSousVideos('emissions')">Playlists</button>
        <button class="sub-nav-btn" data-sub="actualites" onclick="afficherSousVideos('actualites')">Actualités</button>
      </div>

      <div class="sub-section active" id="videosSous-accueil">
        <div class="zone-pub" id="pubVideosHaut"></div>
        <div id="videosAlaUne"><div class="loading">Chargement…</div></div>
        <div class="zone-pub" id="pubVideosBas"></div>
      </div>

      <div class="sub-section" id="videosSous-emissions">
        <input type="text" id="rechercheVideos" placeholder="🔎 Rechercher une vidéo dans la catégorie ouverte…" oninput="filtrerVideosPlaylist()">
        <div id="listePlaylists"><div class="loading">Chargement…</div></div>
        <div class="card" id="listeVideosPlaylist" style="display:none;"></div>
      </div>

      <div class="sub-section" id="videosSous-actualites">
        <div id="listeActualitesVideos"><div class="loading">Chargement…</div></div>
      </div>
    </div>

    <div class="section" id="section-prieres">
      <div class="section-title"><span class="ic">🙏</span> Séances directes</div>

      <div class="sub-nav" id="subNavSeances">
        <button class="sub-nav-btn active" data-sub="accueil" onclick="afficherSousSeances('accueil')">Accueil</button>
        <button class="sub-nav-btn" data-sub="actualites" onclick="afficherSousSeances('actualites')">Actualités</button>
        <button class="sub-nav-btn" data-sub="toutes" onclick="afficherSousSeances('toutes')">Toutes les séances</button>
      </div>

      <div class="sub-section active" id="seancesSous-accueil">
        <div class="zone-pub" id="pubSeancesHaut"></div>
        <div id="seancesAlaUne"><div class="loading">Chargement…</div></div>
        <div class="zone-pub" id="pubSeancesBas"></div>
      </div>

      <div class="sub-section" id="seancesSous-actualites">
        <div class="card" id="seancesActualites"><div class="loading">Chargement…</div></div>
      </div>

      <div class="sub-section" id="seancesSous-toutes">
        <input type="text" id="rechercheSeances" placeholder="🔎 Rechercher une séance…" oninput="filtrerSeances()">
        <div class="card" id="listeSeances"><div class="loading">Chargement…</div></div>
      </div>
    </div>

    <!-- ===== TV ===== -->
    <div class="section" id="section-tv">
      <div class="section-title"><span class="ic">📺</span> TV</div>

      <div class="sub-nav" id="subNavTv">
        <button class="sub-nav-btn active" data-sub="chaines" onclick="afficherSousTv('chaines')">Chaînes</button>
        <button class="sub-nav-btn" data-sub="favoris" onclick="afficherSousTv('favoris')">⭐ Mes chaînes</button>
        <button class="sub-nav-btn" data-sub="studio" id="btnSubTvStudio" style="display:none;" onclick="afficherSousTv('studio')">🎛️ Mon studio</button>
      </div>

      <div class="sub-section active" id="tvSous-chaines">
        <input type="text" id="rechercheChainesTv" placeholder="🔎 Rechercher une chaîne (nom ou numéro)…" oninput="filtrerChainesTv_()">
        <div id="listeChainesTv"><div class="loading">Chargement…</div></div>
      </div>

      <div class="sub-section" id="tvSous-studio">
        <div class="card">
          <p class="field-label">Ma chaîne <span id="tvChNumero"></span></p>
          <div class="logo-upload-preview" id="tvChLogoPreview">📺</div>
          <label class="file-btn-label">Choisir un logo<input type="file" accept="image/*" style="display:none;" onchange="gererLogoChaineTv_(event)"></label>
          <label class="field-label" style="margin-top:12px;">Nom de la chaîne</label>
          <input id="tvChNom" type="text" placeholder="Ex : TV Réveil Bénin">
          <label class="field-label">Description</label>
          <textarea id="tvChDesc" rows="2" placeholder="De quoi parle votre chaîne ?"></textarea>
          <div id="erreurTvChaine" class="error" style="display:none;"></div>
          <button class="flame" onclick="sauvegarderChaineTvClick()">Enregistrer ma chaîne</button>
        </div>

        <div id="tvStudioSuspendue" class="error" style="display:none;margin:10px 0;"></div>

        <div id="tvStudioSuite" style="display:none;">
          <div class="card">
            <p class="field-label">Mon live</p>
            <div id="tvLiveFormZone">
              <input id="tvLiveTitre" type="text" placeholder="Titre du live">
              <div id="erreurTvLive" class="error" style="display:none;"></div>
              <button class="flame" onclick="demarrerLiveTvClick()">🔴 Préparer mon live</button>
            </div>
            <div id="tvLiveInfosZone" style="display:none;">
              <p class="item-nom" id="tvLiveStatut"></p>
              <p class="item-desc">Dans OBS (ordinateur) : Paramètres › Diffusion › Service « Personnalisé ». Sur téléphone : une appli comme Larix Broadcaster. Collez l'adresse et la clé ci-dessous, puis lancez la diffusion : votre chaîne bascule en direct toute seule.</p>
              <label class="field-label">Adresse du serveur</label>
              <div class="codes-box" id="tvLiveAdresse"></div>
              <button class="secondary small full-mt" onclick="copierTexte_(document.getElementById('tvLiveAdresse').textContent)">📋 Copier l'adresse</button>
              <label class="field-label" style="margin-top:12px;">Clé de diffusion (à ne jamais partager)</label>
              <div class="codes-box" id="tvLiveCle"></div>
              <button class="secondary small full-mt" onclick="copierTexte_(document.getElementById('tvLiveCle').textContent)">📋 Copier la clé</button>
              <button class="secondary full-mt" onclick="chargerStudioTv_()">🔄 Actualiser le statut</button>
              <button class="danger-outline full-mt" onclick="arreterLiveTvClick()">⏹ Terminer le live</button>
            </div>
          </div>

          <div class="card">
            <p class="field-label">Ma bibliothèque (vidéos et playlists)</p>
            <p class="subtitle left" style="margin-top:-4px;">Ajoutez des vidéos ou des playlists YouTube (publiques ou non répertoriées). Elles ne sont diffusées que lorsque vous les placez dans la grille horaire, ou si vous les mettez dans la boucle des temps morts avec le bouton 🔁.</p>
            <label class="field-label">Une vidéo</label>
            <input id="tvProgLien" type="text" placeholder="https://www.youtube.com/watch?v=...">
            <button onclick="ajouterProgrammeTvClick()">Ajouter la vidéo</button>
            <label class="field-label" style="margin-top:14px;">Une playlist (50 vidéos maximum à l'import)</label>
            <input id="tvPlLien" type="text" placeholder="https://www.youtube.com/playlist?list=...">
            <button onclick="ajouterPlaylistTvClick()">Ajouter la playlist</button>
            <div id="tvPlStatut" class="item-desc" style="margin-top:8px;"></div>
            <div id="erreurTvProg" class="error" style="display:none;"></div>
            <div id="tvResumeBoucle" class="item-desc" style="margin-top:12px;"></div>
            <div id="tvListeProgrammes" style="margin-top:8px;"></div>
          </div>

          <div class="card">
            <p class="field-label">Grille horaire</p>
            <p class="subtitle left" style="margin-top:-4px;">Planifiez une vidéo ou un live à une heure précise (selon l'heure de votre appareil). Pour un live : préparez-le à l'avance avec « Préparer mon live » ci-dessous.</p>
            <label class="field-label">Type</label>
            <select id="tvCrType" onchange="tvCrChangerType_()">
              <option value="video">🎬 Une vidéo de ma bibliothèque</option>
              <option value="playlist">🎞️ Une playlist de ma bibliothèque</option>
              <option value="live">🔴 Un live</option>
            </select>
            <div id="tvCrVideoZone">
              <label class="field-label">Vidéo</label>
              <select id="tvCrProgramme"></select>
            </div>
            <div id="tvCrGroupeZone" style="display:none;">
              <label class="field-label">Playlist (les vidéos s'enchaînent)</label>
              <select id="tvCrGroupe"></select>
            </div>
            <div id="tvCrLiveZone" style="display:none;">
              <label class="field-label">Titre du live</label>
              <input id="tvCrTitreLive" type="text" placeholder="Ex : Soirée de louange">
              <label class="field-label">Durée prévue (minutes)</label>
              <input id="tvCrDuree" type="number" min="5" max="720" value="60">
            </div>
            <label class="field-label">Début</label>
            <input id="tvCrDebut" type="datetime-local">
            <label class="field-label">Répétition</label>
            <select id="tvCrRepetition">
              <option value="Aucune">Une seule fois</option>
              <option value="Quotidienne">Tous les jours</option>
              <option value="Hebdomadaire">Toutes les semaines</option>
            </select>
            <div id="erreurTvCreneau" class="error" style="display:none;"></div>
            <button onclick="ajouterCreneauTvClick()">Ajouter à la grille</button>
            <div id="tvListeCreneaux" style="margin-top:12px;"></div>
          </div>
        </div>
      </div>
      <p class="item-desc" style="text-align:center;opacity:.5;margin-top:18px;">Version TV 9</p>
    </div>

    <!-- ===== ADMINISTRATION ===== -->
    <div class="section" id="section-admin">
      <div class="admin-subtabs" id="adminSubtabs"></div>

      <div class="admin-section active" id="admin-apparence">
        <div class="card">
          <label class="field-label">Logo de l'application</label>
          <div class="logo-upload-preview" id="logoPreview">🙏</div>
          <label class="file-btn-label">
            Choisir une image
            <input type="file" accept="image/*" onchange="gererUploadLogo(event)" style="display:none;">
          </label>
          <div id="logoStatut" style="margin-top:8px; font-size:12px;"></div>
        </div>
        <div class="card">
          <label class="field-label">Nom de l'application (fixé : JESUS)</label>
          <input id="adminNomAssoc" type="text" value="JESUS" disabled>
          <label class="field-label">Lien de la chaîne YouTube</label>
          <input id="adminYoutube" type="text" placeholder="https://www.youtube.com/@...">
          <label class="field-label">ID de la chaîne YouTube (facultatif)</label>
          <input id="adminYoutubeChannelId" type="text" placeholder="Ex : UCxxxxxxxxxxxxxxxxxxxxxx">
          <p class="subtitle left" style="margin:-4px 0 10px;font-size:11px;">
            Normalement détecté automatiquement. Si la liste des vidéos ne s'affiche pas, trouvez-le sur
            YouTube Studio > Paramètres > Chaîne > Informations de base > "ID de la chaîne", et collez-le ici.
          </p>
          <label class="field-label">Frais de publication d'une soumission d'auteur (FCFA)</label>
          <input id="adminMontantPublication" type="number" min="0" placeholder="Ex : 2000">
          <div id="erreurApparence" class="error" style="display:none;"></div>
          <button onclick="sauvegarderApparence()">Enregistrer</button>
        </div>
        <div class="card" id="carteEmailContact" style="display:none;">
          <p class="field-label">📞 E-mail de la page Contact (Super Admin)</p>
          <p class="subtitle left" style="margin:0 0 8px;font-size:11px;">Cette adresse s'affiche dans « Contactez-nous » et reçoit les messages envoyés par les visiteurs.</p>
          <input id="adminEmailContact" type="email" placeholder="contact@exemple.com">
          <div id="erreurEmailContact" class="error" style="display:none;"></div>
          <button onclick="enregistrerEmailContact()">Enregistrer l'e-mail</button>
          <p class="field-label" style="margin-top:14px;">📱 Numéro de téléphone de la page Contact (Super Admin)</p>
          <p class="subtitle left" style="margin:0 0 8px;font-size:11px;">Affiché dans « Contactez-nous ». Laissez vide pour le masquer.</p>
          <input id="adminTelContact" type="tel" placeholder="+229 01 00 00 00 00" maxlength="30">
          <div id="erreurTelContact" class="error" style="display:none;"></div>
          <button onclick="enregistrerTelContact()">Enregistrer le numéro</button>
        </div>
        <div class="card" id="carteBadge">
          <label class="field-label">Badge des membres</label>
          <p class="subtitle left" style="margin:-4px 0 6px;font-size:11px;">Couleur de la bande, nom et logo affichés sur le badge de chaque membre.</p>
          <label class="field-label">Couleur de la bande</label>
          <input id="adminBadgeCouleur" type="color" value="#0b2f68" style="height:46px;padding:4px;">
          <label class="field-label">Nom affiché sous le logo</label>
          <input id="adminBadgeNom" type="text" maxlength="40" placeholder="JESUS">
          <label class="field-label">Logo du badge (PNG ou JPEG)</label>
          <input id="adminBadgeLogo" type="file" accept="image/png,image/jpeg">
          <div id="erreurBadge" class="error" style="display:none;"></div>
          <div style="display:flex;gap:8px;margin-top:10px;"><button class="secondary" onclick="sauvegarderBadge(true)">Rétablir l'original</button><button onclick="sauvegarderBadge(false)">Enregistrer le badge</button></div>
        </div>
        <div class="card" id="carteNomsRubriques">
          <label class="field-label">Noms des rubriques</label>
          <p class="subtitle left" style="margin:-4px 0 6px;font-size:11px;">Laissez un champ vide pour garder le nom d'origine. Le changement s'applique aux onglets, aux tuiles de l'accueil et aux titres.</p>
          <div id="adminNomsRubriques"></div>
          <div id="erreurNomsRubriques" class="error" style="display:none;"></div>
          <div style="display:flex;gap:8px;margin-top:10px;"><button class="secondary" onclick="sauvegarderNomsRubriques(true)">Rétablir les noms d'origine</button><button onclick="sauvegarderNomsRubriques(false)">Enregistrer les noms</button></div>
        </div>
      </div>

      <div class="admin-section" id="admin-groupes">
        <div class="card">
          <label class="field-label">Lien du Groupe de prière (accessible sans compte)</label>
          <input id="ggpLien" type="text" placeholder="https://chat.whatsapp.com/...">
          <div id="erreurGroupePriere" class="error" style="display:none;"></div>
          <button onclick="enregistrerLienGroupePriere()">Enregistrer ce lien</button>
        </div>
        <div class="card">
          <label class="field-label">Ajouter un groupe WhatsApp (réservé aux membres, avec code)</label>
          <input id="ngGroupeNom" type="text" placeholder="Nom du groupe">
          <input id="ngGroupeDesc" type="text" placeholder="Description courte">
          <input id="ngGroupeLien" type="text" placeholder="Lien https://chat.whatsapp.com/...">
          <input id="ngGroupeCode" type="text" placeholder="Code d'accès (facultatif — généré si vide)">
          <div id="erreurGroupe" class="error" style="display:none;"></div>
          <button onclick="creerGroupe()">Ajouter le groupe</button>
        </div>
        <div class="card" id="adminListeGroupes"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-seances">
        <div class="card">
          <label class="field-label" id="etiquetteFormSeance">Ajouter une séance directe</label>
          <input id="nsTitre" type="text" placeholder="Titre (ex : Prière du mardi)">
          <label class="field-label">Date (facultative)</label>
          <input id="nsDate" type="text" list="suggestionsDatesSeance" placeholder="Ex : 15/09/2026, tous les samedis, Lundi au vendredi…">
          <datalist id="suggestionsDatesSeance">
            <option value="Tous les jours">
            <option value="Tous les lundis">
            <option value="Tous les mardis">
            <option value="Tous les mercredis">
            <option value="Tous les jeudis">
            <option value="Tous les vendredis">
            <option value="Tous les samedis">
            <option value="Tous les dimanches">
            <option value="Lundi au vendredi">
            <option value="Du lundi au samedi">
          </datalist>
          <input id="nsHeure" type="time">
          <input id="nsLien" type="text" placeholder="Lien de réunion (Google Meet ou Zoom)">
          <label class="field-label">Visible par</label>
          <select id="nsVisibilite">
            <option value="Membres">Membres inscrits uniquement</option>
            <option value="Public">Tout le monde (y compris visiteurs)</option>
          </select>
          <label class="field-label">Type</label>
          <select id="nsType" onchange="document.getElementById('nsPrixZone').style.display = this.value === 'Payant' ? 'block' : 'none';">
            <option value="Gratuit">Gratuite</option>
            <option value="Payant">Payante</option>
          </select>
          <div id="nsPrixZone" style="display:none;">
            <label class="field-label">Prix (FCFA)</label>
            <input id="nsPrix" type="number" min="1" placeholder="Ex : 500">
          </div>
          <div id="erreurSeance" class="error" style="display:none;"></div>
          <button id="btnValiderSeance" onclick="creerSeance()">Ajouter la séance</button>
          <button id="btnAnnulerEditionSeance" class="secondary small full-mt" style="display:none;" onclick="annulerEditionSeance()">Annuler la modification</button>
        </div>
        <div class="card" id="adminListeSeances"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-membres">
        <div class="stat-grid">
          <div class="stat-box"><div class="stat-num" id="statTotal">—</div><div class="stat-label">Membres inscrits</div></div>
          <div class="stat-box"><div class="stat-num" id="statActifs">—</div><div class="stat-label">Comptes actifs</div></div>
        </div>
        <input type="text" id="rechercheMembres" placeholder="🔎 Rechercher un membre (nom, téléphone, code)…" oninput="filtrerMembresAdmin()">
        <div class="card" id="adminListeMembres"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-annonces">
        <div class="card">
          <label class="field-label">Annonce groupée</label>
          <p class="subtitle left" style="margin-top:-4px;">Cochez les membres destinataires, puis rédigez votre message ou joignez un fichier.</p>
          <label style="display:flex;align-items:center;gap:8px;font-size:12px;font-weight:800;color:var(--blue2);margin-bottom:8px;">
            <input type="checkbox" id="caseToutCocher" onchange="toggleToutCocherMembres()" style="width:auto;margin:0;"> Tout sélectionner
          </label>
          <div id="listeMembresAnnonce" class="codes-box" style="max-height:220px;"><div class="loading">Chargement…</div></div>

          <label class="field-label">Type d'annonce</label>
          <select id="typeAnnonce" onchange="basculerTypeAnnonce()">
            <option value="Texte">Texte</option>
            <option value="Audio">Message vocal</option>
            <option value="Document">Document (PDF, image...)</option>
          </select>

          <div id="zoneAnnonceTexte">
            <textarea id="texteAnnonce" rows="3" placeholder="Votre message à envoyer…" style="margin-top:10px;"></textarea>
          </div>

          <div id="zoneAnnonceAudio" style="display:none;margin-top:10px;">
            <textarea id="texteAnnonceAudio" rows="2" placeholder="Légende facultative…"></textarea>
            <div class="msg-audio-controles">
              <button class="btn-micro" id="btnMicroAnnonce" style="width:auto;" onclick="toggleEnregistrementAnnonce()">🎙️ Enregistrer le message vocal</button>
              <span class="chrono-enregistrement" id="chronoAnnonceAudio" style="display:none;">00:00</span>
            </div>
            <div id="messageAudioAnnonceEnregistre" class="item-desc"></div>
          </div>

          <div id="zoneAnnonceDocument" style="display:none;margin-top:10px;">
            <textarea id="texteAnnonceDocument" rows="2" placeholder="Légende facultative…"></textarea>
            <label class="field-label">Fichier à joindre</label>
            <input type="file" id="fichierAnnonceDocument">
          </div>

          <div id="erreurAnnonce" class="error" style="display:none;margin-top:10px;"></div>
          <button class="flame full-mt" onclick="envoyerAnnonceClick()">Envoyer à la sélection</button>
        </div>
      </div>

      <div class="admin-section" id="admin-paiements">
        <div class="card">
          <label class="field-label">Enregistrer un paiement reçu hors application (espèces, virement...)</label>
          <p class="subtitle left" style="margin-top:-4px;">Ce paiement sera immédiatement marqué "Confirmé" et un reçu sera disponible pour le membre.</p>
          <input id="pmIdentifiant" type="text" placeholder="Code du membre (MB-...) ou son téléphone">
          <input id="pmType" type="text" placeholder="Type (ex : Cotisation mensuelle, ou laisser vide pour un don)">
          <select id="pmCategorie">
            <option value="Cotisation">Cotisation</option>
            <option value="Don">Offrande / Don</option>
          </select>
          <input id="pmMontant" type="number" placeholder="Montant en FCFA">
          <div id="erreurPaiementManuel" class="error" style="display:none;"></div>
          <button onclick="enregistrerPaiementManuelAdmin()">Enregistrer le paiement</button>
        </div>
        <div class="card" id="adminListePaiements"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-messages">
        <input type="text" id="rechercheMessagesAdmin" placeholder="🔎 Rechercher par nom de membre ou contenu…" oninput="filtrerMessagesAdmin()">
        <div class="card" id="adminListeMessages"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-demandesPriere">
        <div class="card" id="adminListeDemandesPriere"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-soumissions">
        <div class="card" id="adminListeSoumissions"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-cotisation">
        <div class="card">
          <label class="field-label">Créer une collecte</label>
          <input id="ntcNom" type="text" placeholder="Ex : Cotisation mensuelle, Construction du temple…">
          <label class="field-label">Montant suggéré par personne (FCFA)</label>
          <input id="ntcMontant" type="number" placeholder="Ex : 2000">
          <label class="field-label">Objectif collectif de la collecte (FCFA, facultatif)</label>
          <input id="ntcObjectif" type="number" placeholder="Ex : 500000 — laisser vide si pas d'objectif global">
          <label class="field-label">Date de début</label>
          <input id="ntcDateDebut" type="date">
          <label class="field-label">Date de fin (facultative)</label>
          <input id="ntcDateFin" type="date">
          <label class="field-label">Périodicité</label>
          <select id="ntcPeriodicite">
            <option value="Mensuelle">Mensuelle</option>
            <option value="Trimestrielle">Trimestrielle</option>
            <option value="Semestrielle">Semestrielle</option>
            <option value="Annuelle">Annuelle</option>
            <option value="Ponctuelle">Ponctuelle</option>
          </select>
          <div id="erreurTypeCotisation" class="error" style="display:none;"></div>
          <button onclick="creerTypeCotisation()">Créer la collecte</button>
        </div>
        <div class="card" id="adminListeTypesCotisation"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-audios">
        <div class="card">
          <label class="field-label">Catégories (playlists audio)</label>
          <div id="adminListeCategoriesAudio"><div class="loading">Chargement…</div></div>
          <div style="display:flex;gap:8px;margin-top:10px;">
            <input id="nouvelleCategorieAudio" type="text" placeholder="Nouvelle catégorie" style="margin:0;">
            <button class="secondary small" style="width:auto;" onclick="creerCategorieAudioClick()">Ajouter</button>
          </div>
        </div>
        <div class="card">
          <label class="field-label">Ajouter un audio</label>
          <input id="recTitre" type="text" placeholder="Titre (ex : Réunion du 12 juillet 2026)">
          <input id="recAuteur" type="text" placeholder="Auteur">
          <input id="recEmailAuteur" type="email" placeholder="E-mail de l'auteur (pour notification d'achat)">
          <input id="recDescription" type="text" placeholder="Description courte (facultative)">
          <label class="field-label">Fichier audio</label>
          <input id="recFichier" type="file" accept="audio/*,.mp3,.m4a,.wav,.ogg,.aac,.opus,.flac,.webm">
          <label class="field-label">Catégorie</label>
          <select id="recCategorie"></select>
          <label class="field-label">Visible par</label>
          <select id="recVisibilite">
            <option value="Public">Tout le monde (y compris visiteurs)</option>
            <option value="Membres">Membres inscrits uniquement</option>
          </select>
          <label class="field-label">Type</label>
          <select id="recType" onchange="document.getElementById('recPrixZone').style.display = this.value === 'Payant' ? 'block' : 'none';">
            <option value="Gratuit">Gratuit</option>
            <option value="Payant">Payant</option>
          </select>
          <div id="recPrixZone" style="display:none;">
            <label class="field-label">Prix (FCFA)</label>
            <input id="recPrix" type="number" min="1" placeholder="Ex : 500">
          </div>
          <label class="field-label">Couverture (facultative)</label>
          <div id="recCoverPreviewZone" style="display:none;margin-bottom:10px;"><img id="recCoverPreviewImg" style="width:80px;height:80px;object-fit:cover;border-radius:10px;"></div>
          <label class="file-btn-label">🖼️ Choisir une image<input type="file" id="recCoverFichier" accept="image/*" style="display:none;" onchange="previsualiserCoverGenerique(event,'recCoverPreviewImg','recCoverPreviewZone','audio')"></label>
          <label class="field-label" style="margin-top:14px;">Paroles (facultatif)</label>
          <p class="subtitle left" style="margin:-4px 0 8px;font-size:11px;">Écrivez-les directement, ou importez un fichier (PDF...) — l'un ou l'autre, ou les deux.</p>
          <textarea id="recParoles" rows="4" placeholder="Paroles…"></textarea>
          <label class="file-btn-label" style="margin-top:8px;">📎 Importer un fichier (PDF...)<input type="file" id="recParolesFichier" accept=".pdf,.doc,.docx,.txt" style="display:none;" onchange="document.getElementById('recParolesFichierNom').textContent = this.files[0] ? '📎 ' + this.files[0].name : '';"></label>
          <div id="recParolesFichierNom" class="item-desc" style="margin-top:4px;"></div>
          <div id="erreurEnregistrement" class="error" style="display:none;"></div>
          <button onclick="creerEnregistrementAdmin()">Ajouter</button>
        </div>
        <div class="card" id="adminListeEnregistrements"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-documents">
        <div class="card">
          <label class="field-label">Ajouter un document</label>
          <input id="docTitre" type="text" placeholder="Titre du document">
          <input id="docAuteur" type="text" placeholder="Auteur du document">
          <input id="docEmailAuteur" type="email" placeholder="E-mail de l'auteur (pour notification d'achat)">
          <input id="docDescription" type="text" placeholder="Description courte (facultative)">
          <label class="field-label">Fichier du document</label>
          <input id="docFichier" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.epub,.rtf,.odt">
          <p class="subtitle left" style="margin:-4px 0 10px;font-size:11px;">
            Contrairement aux Enregistrements, ces documents doivent rester <strong>téléchargeables</strong> :
            n'activez pas la restriction "empêcher le téléchargement" sur ce fichier dans Google Drive.
            Si un e-mail d'auteur est renseigné, il recevra une notification automatique à chaque achat (documents payants uniquement).
          </p>
          <label class="field-label">Type</label>
          <select id="docType" onchange="document.getElementById('docPrixZone').style.display = this.value === 'Payant' ? 'block' : 'none';">
            <option value="Gratuit">Gratuit</option>
            <option value="Payant">Payant</option>
          </select>
          <div id="docPrixZone" style="display:none;">
            <label class="field-label">Prix (FCFA)</label>
            <input id="docPrix" type="number" min="1" placeholder="Ex : 1000">
          </div>
          <label class="field-label">Couverture (facultative)</label>
          <div id="docCoverPreviewZone" style="display:none;margin-bottom:10px;"><img id="docCoverPreviewImg" style="width:100px;height:60px;object-fit:cover;border-radius:10px;"></div>
          <label class="file-btn-label">🖼️ Choisir une image<input type="file" id="docCoverFichier" accept="image/*" style="display:none;" onchange="previsualiserCoverGenerique(event,'docCoverPreviewImg','docCoverPreviewZone','document')"></label>
          <div id="erreurDocument" class="error" style="display:none;margin-top:10px;"></div>
          <button onclick="creerDocumentAdmin()">Ajouter</button>
        </div>
        <div class="card" id="adminListeDocuments"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-playlists">
        <div class="card">
          <label class="field-label">Ajouter / compléter une playlist</label>
          <p class="subtitle left" style="margin-top:-4px;">10 catégories sont déjà pré-créées ci-dessous : collez simplement le lien de la playlist YouTube correspondante.</p>
        </div>
        <div class="card" id="adminListePlaylists"><div class="loading">Chargement…</div></div>
        <div class="card">
          <label class="field-label">Créer une nouvelle catégorie</label>
          <input id="plNom" type="text" placeholder="Nom de la playlist">
          <input id="plLien" type="text" placeholder="Lien de la playlist YouTube">
          <div id="erreurPlaylist" class="error" style="display:none;"></div>
          <button onclick="creerPlaylistAdmin()">Créer</button>
        </div>
      </div>

      <div class="admin-section" id="admin-videosPlateforme">
        <div class="card">
          <label class="field-label">Ajouter une vidéo (fichier sur Google Drive)</label>
          <input id="vidTitre" type="text" placeholder="Titre">
          <input id="vidAuteur" type="text" placeholder="Auteur">
          <input id="vidEmailAuteur" type="email" placeholder="E-mail de l'auteur (pour notification d'achat)">
          <input id="vidDescription" type="text" placeholder="Description courte (facultative)">
          <label class="field-label">Fichier vidéo</label>
          <input id="vidFichier" type="file" accept="video/*,.mp4,.mov,.m4v,.webm,.ogv">
          <label class="field-label">Catégorie (playlist où elle apparaîtra)</label>
          <select id="vidCategorie"></select>
          <label class="field-label">Type</label>
          <select id="vidType" onchange="document.getElementById('vidPrixZone').style.display = this.value === 'Payant' ? 'block' : 'none';">
            <option value="Gratuit">Gratuit</option>
            <option value="Payant">Payant</option>
          </select>
          <div id="vidPrixZone" style="display:none;">
            <label class="field-label">Prix (FCFA)</label>
            <input id="vidPrix" type="number" min="1" placeholder="Ex : 1000">
          </div>
          <label class="field-label">Couverture (facultative)</label>
          <div id="vidCoverPreviewZone" style="display:none;margin-bottom:10px;"><img id="vidCoverPreviewImg" style="width:100px;height:60px;object-fit:cover;border-radius:10px;"></div>
          <label class="file-btn-label">🖼️ Choisir une image<input type="file" id="vidCoverFichier" accept="image/*" style="display:none;" onchange="previsualiserCoverGenerique(event,'vidCoverPreviewImg','vidCoverPreviewZone','video')"></label>
          <label class="field-label" style="margin-top:14px;">Paroles (facultatif)</label>
          <p class="subtitle left" style="margin:-4px 0 8px;font-size:11px;">Écrivez-les directement, ou importez un fichier (PDF...) — l'un ou l'autre, ou les deux.</p>
          <textarea id="vidParoles" rows="4" placeholder="Paroles…"></textarea>
          <label class="file-btn-label" style="margin-top:8px;">📎 Importer un fichier (PDF...)<input type="file" id="vidParolesFichier" accept=".pdf,.doc,.docx,.txt" style="display:none;" onchange="document.getElementById('vidParolesFichierNom').textContent = this.files[0] ? '📎 ' + this.files[0].name : '';"></label>
          <div id="vidParolesFichierNom" class="item-desc" style="margin-top:4px;"></div>
          <p class="subtitle left" style="margin:10px 0 0;font-size:11px;">Comme les Audios : n'activez pas la restriction "empêcher le téléchargement" sur ce fichier dans Google Drive.</p>
          <div id="erreurVideoPlateforme" class="error" style="display:none;"></div>
          <button onclick="creerVideoPlateformeAdmin()">Ajouter</button>
        </div>
        <div class="card" id="adminListeVideosPlateforme"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-actualites">
        <div class="card">
          <label class="field-label">Nouvelle actualité</label>
          <p class="subtitle left" style="margin-top:-4px;">Format paysage recommandé (ex : 16:9). Choisissez la rubrique où elle doit apparaître.</p>
          <div id="actualitePreviewZone" style="display:none;margin-bottom:12px;border-radius:12px;overflow:hidden;aspect-ratio:16/9;background:#eef3f9;">
            <img id="actualitePreviewImg" style="width:100%;height:100%;object-fit:cover;display:block;">
          </div>
          <label class="file-btn-label">
            📷 Choisir une image
            <input type="file" id="fichierActualite" accept="image/*" style="display:none;" onchange="previsualiserCoverGenerique(event,'actualitePreviewImg','actualitePreviewZone','actualite')">
          </label>
          <label class="field-label" style="margin-top:14px;">Titre</label>
          <input id="actualiteTitre" type="text" placeholder="Titre de l'actualité">
          <label class="field-label">Catégorie / étiquette</label>
          <input id="actualiteCategorie" type="text" placeholder="Ex : Afrique, Événement, Annonce…">
          <label class="field-label">Rubrique</label>
          <select id="actualiteRubrique">
            <option value="toutes">Toutes les sections</option>
            <option value="audios">Audios uniquement</option>
            <option value="videos">Vidéos uniquement</option>
            <option value="documents">Documents uniquement</option>
            <option value="seances">Séances directes uniquement</option>
          </select>
          <label class="field-label">Auteur / signature</label>
          <input id="actualiteAuteur" type="text" placeholder="Nom affiché sous le titre">
          <label class="field-label">Contenu</label>
          <textarea id="actualiteContenu" rows="6" placeholder="Texte complet de l'article…"></textarea>
          <div id="erreurActualite" class="error" style="display:none;margin-top:10px;"></div>
          <button class="flame full-mt" id="btnPublierActualite" onclick="publierActualiteClick()">Publier</button>
        </div>
        <div class="card" id="adminListeActualites"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-espacesPub">
        <div class="card">
          <label class="field-label">Espaces publicitaires internes (2-3 par emplacement)</label>
          <p class="subtitle left" style="margin-top:-4px;">Insérés en haut de l'onglet Accueil de chaque section. Image ou courte vidéo.</p>
          <label class="field-label">Emplacement</label>
          <select id="pubEmplacement">
            <option value="audios">Audios</option>
            <option value="videos">Vidéos</option>
            <option value="documents">Documents</option>
            <option value="seances">Séances directes</option>
            <option value="messages">Messages</option>
          </select>
          <label class="field-label">Type</label>
          <select id="pubType" onchange="document.getElementById('pubImageZone').style.display = this.value === 'Image' ? 'block' : 'none'; document.getElementById('pubVideoZone').style.display = this.value === 'Video' ? 'block' : 'none';">
            <option value="Image">Image</option>
            <option value="Video">Courte vidéo (lien Google Drive)</option>
          </select>
          <div id="pubImageZone">
            <div id="pubImagePreviewZone" style="display:none;margin-bottom:10px;"><img id="pubImagePreviewImg" style="width:100%;max-height:120px;object-fit:cover;border-radius:10px;"></div>
            <label class="file-btn-label">📷 Choisir une image<input type="file" id="pubImageFichier" accept="image/*" style="display:none;" onchange="previsualiserCoverGenerique(event,'pubImagePreviewImg','pubImagePreviewZone','espacePub')"></label>
          </div>
          <div id="pubVideoZone" style="display:none;">
            <input id="pubLienDrive" type="text" placeholder="Lien de partage Google Drive de la vidéo">
          </div>
          <label class="field-label">Lien au clic (facultatif)</label>
          <input id="pubLien" type="text" placeholder="https://...">
          <div id="erreurEspacePub" class="error" style="display:none;"></div>
          <button class="flame full-mt" onclick="creerEspacePubAdmin()">Ajouter</button>
        </div>
        <div class="card" id="adminListeEspacesPub"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-affiche">
        <div class="card">
          <label class="field-label">Ajouter une image au slider (7 maximum)</label>
          <p class="subtitle left" style="margin-top:-4px;">Format paysage recommandé (ex : 1200 × 400 px). Les images défilent automatiquement en haut du tableau de bord des membres.</p>
          <div id="affichePreviewZone" style="display:none;margin-bottom:12px;border-radius:12px;overflow:hidden;aspect-ratio:3/1;background:#eef3f9;">
            <img id="affichePreviewImg" style="width:100%;height:100%;object-fit:cover;display:block;">
          </div>
          <label class="file-btn-label">
            📷 Choisir une image
            <input type="file" id="fichierAffiche" accept="image/*" style="display:none;" onchange="previsualiserAffiche(event)">
          </label>
          <label class="field-label" style="margin-top:14px;">Lien au clic (facultatif)</label>
          <input id="afficheLienInput" type="text" placeholder="https://... (ex : événement, groupe WhatsApp)">
          <div id="erreurAffiche" class="error" style="display:none;margin-top:10px;"></div>
          <button class="flame full-mt" onclick="ajouterAfficheClick()">Ajouter au slider</button>
        </div>
        <div class="card" id="adminListeAffiches"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-tv">
        <div class="card" id="adminListeTv"><div class="loading">Chargement…</div></div>
      </div>

      <div class="admin-section" id="admin-codes">
        <div class="card">
          <div class="section-title"><span class="ic">🔐</span> Générer des codes d'inscription</div>
          <p class="subtitle left" style="margin-bottom:14px;">Chaque code ne peut être utilisé qu'une seule fois. Donnez uniquement les codes aux personnes autorisées à rejoindre la plateforme.</p>
          <label class="field-label">Nombre de codes</label>
          <input id="nbCodesInscription" type="number" min="1" max="100" value="10" placeholder="Ex : 10">
          <label class="field-label">Note interne (facultative)</label>
          <input id="noteCodesInscription" type="text" placeholder="Ex : Réunion du 26 août 2026">
          <div id="erreurCodesInscription" class="error" style="display:none;"></div>
          <button onclick="genererCodesAdmin()">Générer les codes</button>
          <div id="codesGeneresBox" class="codes-box" style="display:none;"></div>
          <button id="btnCopierCodes" class="secondary small full-mt" style="display:none;" onclick="copierCodesGeneres()">📋 Copier les codes</button>
        </div>
        <div class="card">
          <div class="section-title"><span class="ic">📋</span> Codes existants</div>
          <div id="adminListeCodesInscription"><div class="loading">Chargement…</div></div>
        </div>
      </div>
    </div>
  </div>

<script>
  // Lecture en arrière-plan : commandes sur l'écran verrouillé + relance si le navigateur met en pause en quittant l'appli
  function majMediaSession_(titre, actions) {
    if (!("mediaSession" in navigator)) return;
    try {
      navigator.mediaSession.metadata = new MediaMetadata({ title: titre || "JESUS", artist: "JESUS" });
      ["play", "pause", "previoustrack", "nexttrack"].forEach(function (a) {
        try { navigator.mediaSession.setActionHandler(a, (actions && actions[a]) || null); } catch (e) {}
      });
    } catch (e) {}
  }
  document.addEventListener("play", function (e) {
    const el = e.target;
    if (!el || (el.tagName !== "AUDIO" && el.tagName !== "VIDEO")) return;
    const zone = el.closest(".lecteur-persistant");
    const nom = zone && zone.querySelector(".item-nom");
    const estAudio = el.id === "audioElementActuel";
    majMediaSession_(nom ? nom.textContent : "", {
      play: function () { el.play(); }, pause: function () { el.pause(); },
      previoustrack: estAudio ? function () { audioPrecedent(); } : null,
      nexttrack: estAudio ? function () { audioSuivant(); } : null
    });
  }, true);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState !== "hidden") return;
    const enLecture = [];
    document.querySelectorAll("audio, video").forEach(function (m) { if (!m.paused && !m.ended) enLecture.push(m); });
    let tvLisait = false;
    try { tvLisait = !!(tvPlayer_ && tvPlayerPret_ && tvPlayer_.getPlayerState() === 1); } catch (e) {}
    [400, 1500, 4000].forEach(function (d) {
      setTimeout(function () {
        enLecture.forEach(function (m) { if (m.paused && !m.ended) { try { m.play(); } catch (e) {} } });
        if (tvLisait) { try { tvPlayer_.playVideo(); } catch (e) {} }
      }, d);
    });
  });

  // Effet de clic sur tous les boutons (et tuiles cliquables)
  document.addEventListener("pointerdown", function (e) {
    const b = e.target.closest && e.target.closest("button, .tuile-visiteur, [role=button]");
    if (!b || b.disabled) return;
    b.classList.remove("effet-clic");
    void b.offsetWidth;
    b.classList.add("effet-clic");
  }, true);
  document.addEventListener("animationend", function (e) {
    if (e.animationName === "arcClic") e.target.classList.remove("effet-clic");
  }, true);
  let membreCourant = null;
  let jetonSession = ""; // jeton signé remis par le nouveau serveur à la connexion
  let configApp = null;
  let typeCotisationEnCours = null;
  let photoInscriptionBase64 = '';
  let codeInvitationInscription = '';
  let codesGeneresDerniereFois = [];

  // ==================== ADRESSES DE L'API ====================
  // Le NOUVEAU serveur (Cloudflare) reçoit toutes les requêtes. Il exécute lui-même les actions déjà
  // portées et relaie le reste à l'ANCIEN serveur (Apps Script). Si le nouveau serveur est injoignable,
  // l'appli retombe automatiquement sur l'ancien, comme avant.
  const API_URL_NOUVEAU = "https://sun-api.arcuniversel.workers.dev";
  const API_URL_ANCIEN = "https://script.google.com/macros/s/AKfycbyBOvScNdIsYbJlVfduCaSAkxC_-juQo-NjWqmWlE7ux27pBsBqQwxyow9DAdjEtT4o/exec";
  const API_URL = API_URL_NOUVEAU;
  const ACTIONS_LOURDES_ = ["soumettreContenu", "envoyerMessageAudio", "repondreMessageAudio", "envoyerMessageDemandePriereAudio", "envoyerAnnonceGroupee"];

  // ==================== APPEL SERVEUR ====================
  // Le corps est envoyé en texte brut (pas en JSON déclaré) exprès : cela évite une requête de
  // pré-vérification CORS (« preflight ») que l'ancien serveur ne sait pas traiter.
  function appelServeur(nomFonction) {
    const args = Array.prototype.slice.call(arguments, 1);
    const sansFiltrePays_ = !!(window.PAYS && window.PAYS.bypass > 0);
    const corps = JSON.stringify({ action: nomFonction, params: args, jeton: jetonSession || undefined });
    const envoyer = function (url) { return fetch(url, { method: "POST", body: corps }); };
    // Envois de fichiers volumineux : directement vers Apps Script (évite de les faire transiter deux fois).
    if (ACTIONS_LOURDES_.indexOf(nomFonction) !== -1) {
      return envoyer(API_URL_ANCIEN).then(function (res) {
        if (!res.ok) throw new Error("Erreur réseau (statut " + res.status + ").");
        return res.json();
      }).then(function (json) {
        if (!json.succes) throw new Error(json.erreur || "Erreur inconnue du serveur.");
        return json.resultat;
      });
    }
    const lire = function (res) {
      if (!res.ok) throw new Error("Erreur réseau (statut " + res.status + ").");
      return res.json();
    };
    return envoyer(API_URL_NOUVEAU).then(function (res) {
      // Page d'erreur de la plateforme (et non une réponse JSON du serveur) : on tente l'ancien serveur.
      const type = res.headers.get("content-type") || "";
      if (!res.ok && type.indexOf("json") === -1) return envoyer(API_URL_ANCIEN);
      return res;
    }, function () {
      return envoyer(API_URL_ANCIEN); // nouveau serveur injoignable
    }).then(lire).then(function (json) {
      // Le nouveau serveur n'a pas réussi à joindre l'ancien : on l'appelle directement depuis l'appli.
      if (!json.succes && json.relaisEchoue) return envoyer(API_URL_ANCIEN).then(lire);
      return json;
    }).then(function (json) {
      if (!json.succes) throw new Error(json.erreur || "Erreur inconnue du serveur.");
      return window.PAYS ? window.PAYS.filtrer(nomFonction, json.resultat, sansFiltrePays_) : json.resultat;
    });
  }

  // ==================== PAIEMENT (FedaPay) ====================
  // Les écrans appellent encore openKkiapayWidget / addKkiapayListener (anciens noms) : ces deux fonctions
  // ouvrent maintenant la fenêtre de paiement FedaPay. L'état du paiement est ensuite revérifié par le serveur.
  const ecouteursPaiement_ = [];
  let contextePaiement_ = "autre";   // « evenement » pendant l'achat de billets : l'ancien écouteur de paiement ne doit alors rien faire
  function addKkiapayListener(evenement, fonction) {
    if (evenement === "success") ecouteursPaiement_.push(fonction);
  }
  function openKkiapayWidget(opts) {
    contextePaiement_ = opts.contexte || "autre";
    if (typeof FedaPay === "undefined") { alert("Le module de paiement n'a pas pu se charger. Vérifiez votre connexion et réessayez."); return; }
    const m = membreCourant || {};
    const widget = FedaPay.init({
      public_key: opts.api_key,
      environment: String(opts.api_key || "").indexOf("pk_live_") === 0 ? "live" : "sandbox",
      transaction: { amount: Math.round(Number(opts.amount)), description: "JESUS", custom_metadata: Object.assign({ code: String(opts.data || "") }, opts.metadata || {}) },
      currency: { iso: "XOF" },
      customer: { firstname: m.prenom || undefined, lastname: m.nom || undefined, email: m.email || undefined },
      onComplete: function (resp) {
        if (resp && resp.reason === FedaPay.CHECKOUT_COMPLETED && resp.transaction) {
          ecouteursPaiement_.forEach(function (f) { f({ transactionId: String(resp.transaction.id) }); });
        }
      }
    });
    widget.open();
  }

  // Lecteur audio léger pour un fichier Drive (messages vocaux, pièces jointes) : plus rapide que l'aperçu complet de
  // Google Drive. Si le fichier ne se lit pas directement, on retombe sur l'aperçu Drive.
  function lecteurAudioDrive_(id) {
    const sur = escapeHtml(String(id || ""));
    return '<audio class="audio-frame" controls preload="none" style="width:100%;" src="https://drive.google.com/uc?export=download&id=' + sur + '" onerror="basculerVersApercuDrive_(this,\'' + sur + '\')"></audio>';
  }
  function basculerVersApercuDrive_(element, id) {
    const f = document.createElement("iframe");
    f.className = "audio-frame";
    f.src = "https://drive.google.com/file/d/" + id + "/preview";
    f.allow = "autoplay";
    element.replaceWith(f);
  }

  // ==================== ENVOI DIRECT DES FICHIERS VERS R2 ====================
  // Le fichier part tel quel (sans conversion), avec la session signée. Le serveur répond par un « reçu »
  // que l'on transmet ensuite à Apps Script pour enregistrer le contenu.
  function televerserVersR2_(fichier, usage, surProgression) {
    return new Promise(function (resolve, reject) {
      if (!jetonSession) { reject(new Error("Session expirée. Reconnectez-vous.")); return; }
      if (fichier.size > 95 * 1024 * 1024) { reject(new Error("Fichier trop volumineux (95 Mo maximum).")); return; }
      const xhr = new XMLHttpRequest();
      xhr.open("POST", API_URL_NOUVEAU + "/upload");
      xhr.setRequestHeader("Authorization", "Bearer " + jetonSession);
      xhr.setRequestHeader("X-Fichier-Nom", encodeURIComponent(fichier.name));
      xhr.setRequestHeader("X-Fichier-Usage", usage);
      xhr.setRequestHeader("Content-Type", fichier.type || "application/octet-stream");
      xhr.upload.onprogress = function (e) { if (e.lengthComputable && surProgression) surProgression(Math.round(e.loaded * 100 / e.total)); };
      xhr.onload = function () {
        let j;
        try { j = JSON.parse(xhr.responseText); } catch (e) { reject(new Error("Réponse inattendue du serveur (statut " + xhr.status + ").")); return; }
        if (xhr.status >= 200 && xhr.status < 300 && j.ok) resolve(j); else reject(new Error(j.erreur || "Envoi refusé."));
      };
      xhr.onerror = function () { reject(new Error("Échec de l'envoi : vérifiez votre connexion.")); };
      xhr.send(fichier);
    });
  }

  // Envoie le fichier, affiche la progression dans la zone indiquée, puis appelle la suite avec le reçu.
  function envoyerFichierPuisContinuer_(fichier, usage, zone, suite) {
    zone.style.display = "block";
    zone.style.color = "var(--blue2, #0b2f68)";
    zone.textContent = "Envoi du fichier… 0 %";
    televerserVersR2_(fichier, usage, function (pct) { zone.textContent = "Envoi du fichier… " + pct + " %"; })
      .then(function (r2) { zone.style.display = "none"; zone.style.color = ""; suite(r2); })
      .catch(function (e) { zone.style.color = ""; zone.textContent = "Erreur : " + e.message; zone.style.display = "block"; });
  }

  // Texte d'échec de vérification d'un paiement : indique la raison renvoyée par le serveur (statut FedaPay, montant…).
  function texteEchecPaiement_(res) {
    return "Le paiement n'a pas pu être vérifié" + (res && res.raison ? " (" + res.raison + ")" : "") + ". Contactez un responsable.";
  }

  function afficherErreurZone(elementId, err) {
    const msg = (err && err.message) ? err.message : "Une erreur est survenue.";
    const zone = document.getElementById(elementId);
    if (zone) zone.innerHTML = '<p class="error" style="margin:0;">⚠️ ' + escapeHtml(msg) + "</p>";
  }

  // ==================== ALERTE SONORE — HEURE D'UNE SÉANCE ====================
  // Vérifie périodiquement (tant que l'application reste ouverte) si l'heure d'une séance à
  // venir vient de sonner, et déclenche alors un son + une bannière (+ notification système
  // si autorisée). Les séances à date récurrente en texte libre ("tous les samedis") ne
  // peuvent pas être évaluées ainsi et sont ignorées par cette alerte automatique.
  const seancesAlerteesIds = new Set();

  function verifierAlertesSeances_() {
    const fonction = modeVisiteur ? "getSeancesPublic" : "getSeances";
    appelServeur(fonction, codeActuel()).then(function (seances) {
      const maintenant = Date.now();
      (seances || []).forEach(function (s) {
        if (!s.Date || !s.Heure || seancesAlerteesIds.has(s.ID)) return;
        const dateSeance = new Date(s.Date);
        if (isNaN(dateSeance.getTime())) return; // date récurrente en texte : pas évaluable
        const heureMatch = String(s.Heure).match(/(\d{1,2}):(\d{2})/);
        if (!heureMatch) return;
        dateSeance.setHours(Number(heureMatch[1]), Number(heureMatch[2]), 0, 0);
        const diffMs = maintenant - dateSeance.getTime();
        if (diffMs >= 0 && diffMs < 90000) { // l'heure vient de sonner (marge d'1min30)
          seancesAlerteesIds.add(s.ID);
          declencherAlerteSeance_(s);
        }
      });
    }).catch(function () { /* pas grave, nouvelle tentative au prochain cycle */ });
  }

  function declencherAlerteSeance_(s) {
    jouerSonAlerte_();
    if ("Notification" in window && Notification.permission === "granted") {
      try { new Notification("🙏 " + s.Titre, { body: "La séance commence maintenant !", icon: "icon-192.png" }); } catch (e) { /* pas grave */ }
    }
    afficherBanniereAlerteSeance_(s);
  }

  // Génère un petit carillon (trois notes ascendantes) directement dans le navigateur —
  // aucun fichier audio à héberger.
  function jouerSonAlerte_() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      [880, 1108.73, 1318.51].forEach(function (freq, i) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = freq;
        const debut = ctx.currentTime + i * 0.18;
        gain.gain.setValueAtTime(0, debut);
        gain.gain.linearRampToValueAtTime(0.25, debut + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, debut + 0.6);
        osc.connect(gain).connect(ctx.destination);
        osc.start(debut);
        osc.stop(debut + 0.65);
      });
    } catch (e) { /* audio non disponible sur cet appareil, pas grave */ }
  }

  function afficherBanniereAlerteSeance_(s) {
    const banniere = document.createElement("div");
    banniere.style.cssText = "position:fixed;top:12px;left:50%;transform:translateX(-50%);z-index:9999;background:linear-gradient(135deg,var(--blue2),var(--blue));color:#fff;padding:14px 18px;border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.35);max-width:calc(100% - 24px);text-align:center;font-size:13px;font-weight:700;";
    banniere.innerHTML = "🙏 La séance « " + escapeHtml(s.Titre) + " » commence maintenant !" +
      '<button style="display:block;margin:8px auto 0;width:auto;padding:7px 16px;background:#fff;color:var(--blue2);border-radius:8px;font-size:12px;font-weight:800;border:none;" onclick="this.parentElement.remove()">OK</button>';
    document.body.appendChild(banniere);
    setTimeout(function () { if (banniere.parentElement) banniere.remove(); }, 20000);
  }

  document.addEventListener("DOMContentLoaded", function () {
    appelServeur("getConfig").then(appliquerBranding).catch(function (err) { console.error(err); });
    initialiserGestionRetourTelephone_();
    rendreLecteurDeplacable_("lecteurAudioZone");
    rendreLecteurDeplacable_("lecteurVideoZone");
    rendreTvDeplacable_();
    if ("Notification" in window && Notification.permission === "default") {
      Notification.requestPermission().catch(function () { /* pas grave si refusé */ });
    }
    verifierAlertesSeances_();
    setInterval(verifierAlertesSeances_, 30000);
    setTimeout(verifierAlertesTv_, 8000);
    setInterval(verifierAlertesTv_, 60000);
    if (restaurerSessionSiRecente_()) {
      afficherDashboard();
    } else {
      entrerModeVisiteur();
    }
  });

  // ==================== SESSION (reste ouverte au moins 5 minutes après avoir quitté l'appli) ====================
  const DUREE_SESSION_MS = 5 * 60 * 1000;

  function sauvegarderSession_() {
    if (!membreCourant) return;
    try { localStorage.setItem("arc_session", JSON.stringify({ membre: membreCourant, jeton: jetonSession, ts: Date.now() })); } catch (e) { /* stockage indisponible, tant pis */ }
  }

  function effacerSession_() {
    jetonSession = "";
    try { localStorage.removeItem("arc_session"); } catch (e) {}
  }

  function restaurerSessionSiRecente_() {
    try {
      const brut = localStorage.getItem("arc_session");
      if (!brut) return false;
      const donnees = JSON.parse(brut);
      if (!donnees || !donnees.membre || !donnees.ts) return false;
      if (Date.now() - donnees.ts > DUREE_SESSION_MS) { effacerSession_(); return false; }
      membreCourant = donnees.membre;
      jetonSession = donnees.jeton || "";
      return true;
    } catch (e) { return false; }
  }

  // ==================== INSTALLATION (PWA) ====================
  let promptInstallDiffere = null;

  function estIOS() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent);
  }

  function estDejaInstallee() {
    return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
  }

  function afficherBoutonsInstallation() {
    if (estDejaInstallee()) return;
    const b1 = document.getElementById("btnInstallerApp");
    if (b1) b1.style.display = "inline-flex";
  }

  // Chrome/Android déclenche cet évènement quand l'app remplit les critères d'installation.
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    promptInstallDiffere = e;
    afficherBoutonsInstallation();
  });

  // iOS n'a pas d'invite automatique : on affiche quand même le bouton, avec des instructions.
  window.addEventListener("load", function () {
    if (estIOS() && !estDejaInstallee()) afficherBoutonsInstallation();
    if ("serviceWorker" in navigator) {
      // Quand une nouvelle version de l'appli prend le relais, on recharge la page une seule fois
      // pour afficher tout de suite la nouvelle version (sauf à la toute première installation).
      const avaitUnControleur = !!navigator.serviceWorker.controller;
      let dejaRechargee = false;
      navigator.serviceWorker.addEventListener("controllerchange", function () {
        if (!avaitUnControleur || dejaRechargee) return;
        dejaRechargee = true;
        window.location.reload();
      });
      navigator.serviceWorker.register("sw.js").catch(function (err) {
        console.log("Service worker non enregistré :", err);
      });
    }
  });

  // Sur ordinateur (souris, pas de glisser tactile), la molette ne fait défiler que
  // verticalement par défaut — inutile sur une barre d'onglets horizontale dont la barre de
  // défilement est volontairement masquée. On traduit ici le défilement vertical de la
  // molette en défilement horizontal, uniquement quand le curseur est sur les onglets.
  document.addEventListener("wheel", function (e) {
    const tabs = document.getElementById("tabsPrincipaux");
    if (!tabs || !tabs.contains(e.target)) return;
    if (tabs.scrollWidth <= tabs.clientWidth) return; // rien à faire défiler
    tabs.scrollLeft += e.deltaY;
    e.preventDefault();
  }, { passive: false });

  // Met à jour la flèche indicatrice (visible/masquée) en direct pendant le défilement
  // tactile de la barre d'onglets — écouteur posé une seule fois, l'élément étant réutilisé
  // à chaque reconstruction des onglets (seul son contenu change).
  document.addEventListener("scroll", function (e) {
    if (e.target && e.target.id === "tabsPrincipaux") mettreAJourIndicateurTabs_();
  }, true);
  window.addEventListener("resize", mettreAJourIndicateurTabs_);

  function installerApplication() {
    if (promptInstallDiffere) {
      promptInstallDiffere.prompt();
      promptInstallDiffere.userChoice.then(function () { promptInstallDiffere = null; });
    } else if (estIOS()) {
      alert("Pour installer l'application sur iPhone/iPad :\n\n1. Appuyez sur le bouton Partager (le carré avec une flèche vers le haut) en bas de Safari.\n2. Choisissez \"Sur l'écran d'accueil\".\n3. Confirmez en haut à droite.");
    } else {
      alert("Pour installer l'application : ouvrez le menu de votre navigateur (⋮ ou ...) et choisissez \"Installer l'application\" ou \"Ajouter à l'écran d'accueil\".");
    }
  }

  // Diagnostic PWA — vérifie ce que le navigateur voit réellement (manifest, service
  // worker, adresse exacte) pour comprendre pourquoi l'installation ne se propose pas.
  // Le résultat s'affiche à l'écran, prêt à copier-coller.
  function diagnostiquerPWA() {
    const lignes = [];
    lignes.push("URL actuelle : " + window.location.href);
    lignes.push("Version de l'interface TV : 9");
    lignes.push("Déjà en mode application : " + estDejaInstallee());
    lignes.push("Proposition d'installation reçue du navigateur : " + (promptInstallDiffere ? "OUI" : "NON"));
    lignes.push("Serveur principal : " + API_URL_NOUVEAU);
    lignes.push("Serveur de secours : " + API_URL_ANCIEN);
    lignes.push("");

    const afficherResultat = function () {
      const zone = document.getElementById("diagnosticPWAZone");
      zone.style.display = "block";
      zone.textContent = lignes.join("\n");
    };

    const testerServiceWorker = function () {
      if (!("serviceWorker" in navigator)) {
        lignes.push("Service worker : non supporté par ce navigateur.");
        afficherResultat();
        return;
      }
      navigator.serviceWorker.getRegistration().then(function (reg) {
        lignes.push("Service worker enregistré : " + (reg ? ("OUI (scope : " + reg.scope + ")") : "NON"));
        afficherResultat();
      }).catch(function (err) {
        lignes.push("Erreur lecture service worker : " + err.message);
        afficherResultat();
      });
    };

    const testerAPI = function () {
      appelServeur("getConfig").then(function () {
        lignes.push("Connexion à l'API : OK (le backend Apps Script répond).");
        testerServiceWorker();
      }).catch(function (err) {
        lignes.push("⚠️ Connexion à l'API échouée : " + err.message);
        testerServiceWorker();
      });
    };

    fetch("manifest.json").then(function (res) {
      lignes.push("Requête manifest.json : statut HTTP " + res.status + ", type : " + res.headers.get("content-type"));
      return res.text();
    }).then(function (texte) {
      try {
        const donnees = JSON.parse(texte);
        lignes.push("JSON valide. start_url = " + donnees.start_url);
      } catch (err) {
        lignes.push("⚠️ Le contenu de manifest.json n'est PAS un JSON valide.");
      }
      testerAPI();
    }).catch(function (err) {
      lignes.push("⚠️ Erreur lors de la récupération de manifest.json : " + err.message);
      testerAPI();
    });
  }

  // Message affiché quand la clé de paiement n'a pas été reçue : plus précis pour un administrateur.
  function messagePaiementNonConfigure_() {
    const admin = membreCourant && permissionsDe_(membreCourant).length;
    return admin
      ? "Le paiement n'est pas configuré : la clé publique FedaPay (propriété FEDAPAY_PUBLIC_KEY d'Apps Script) n'est pas reçue par l'application."
      : "Le paiement n'est pas encore configuré. Contactez un responsable.";
  }

  function appliquerBranding(config) {
    configApp = config || {};
    setTimeout(rafraichirNomsRubriques_, 0);
    // Copie de configuration en mémoire sans la clé de paiement : on redemande une version fraîche (sans cache).
    if (!configApp.paiementPublicKey) {
      setTimeout(function () {
        appelServeur("getConfig", Date.now()).then(function (c) {
          if (c && c.paiementPublicKey && configApp) { configApp.paiementPublicKey = c.paiementPublicKey; }
          if (c && c.NomsRubriques && configApp && c.NomsRubriques !== configApp.NomsRubriques) { configApp.NomsRubriques = c.NomsRubriques; rafraichirNomsRubriques_(); }
        }).catch(function () {});
      }, 400);
    }
    const nom = "JESUS";
    document.getElementById("topbarNom").textContent = nom;
    document.getElementById("accueilNomAssoc").textContent = nom;
    document.title = nom + " — Espace membres";
    const initiale = nom.charAt(0).toUpperCase();
    const logoHtml = '<img src="icon-192.png" alt="JESUS">'; // logo JESUS fixe
    document.getElementById("topbarLogo").innerHTML = logoHtml;
    document.getElementById("accueilLogo").innerHTML = logoHtml;
    appliquerBadgeConfig_();
  }

  // Badge des membres : couleur, nom et logo réglables par le Super Admin (Administration > Apparence).
  function appliquerBadgeConfig_() {
    const c = configApp || {};
    const bande = document.querySelector(".badge-top-band");
    if (bande) bande.style.background = /^#[0-9a-fA-F]{6}$/.test(c.BadgeCouleur || "") ? c.BadgeCouleur : "";
    const nomBadge = (c.BadgeNom && String(c.BadgeNom).trim()) ? String(c.BadgeNom).trim().slice(0, 40) : "JESUS";
    const elNom = document.getElementById("badgeOrgName");
    if (elNom) elNom.textContent = nomBadge;
    const elLogo = document.getElementById("badgeMiniLogo");
    if (elLogo) {
      const perso = /^data:image\/(png|jpeg);base64,[A-Za-z0-9+\/=]+$/.test(c.BadgeLogo || "");
      elLogo.innerHTML = perso ? '<img src="' + c.BadgeLogo + '" alt="">' : '<img src="icon-192.png" alt="JESUS">';
    }
  }

  // Affiche publicitaire (bandeau paysage visible sur toutes les pages).
  // ==================== SLIDER D'AFFICHES (visible partout sauf la connexion) ====================
  let affichesCache = [];
  let indexAfficheActuelle = 0;
  let intervalAffiche = null;

  function chargerEtAfficherSlider() {
    appelServeur("getAffiches").then(function (affiches) {
      affichesCache = affiches || [];
      construireSliderAffiches();
    }).catch(function () { /* pas grave, le slider reste simplement masqué */ });
  }

  function construireSliderAffiches() {
    const zone = document.getElementById("sliderAfficheZone");
    clearInterval(intervalAffiche);
    if (!affichesCache.length) { zone.style.display = "none"; zone.innerHTML = ""; return; }
    zone.style.display = "block";
    zone.innerHTML = affichesCache.map(function (a, i) {
      const img = '<img src="data:image/png;base64,' + a.ImageBase64 + '" alt="Affiche">';
      const contenu = a.Lien ? '<a href="' + a.Lien.replace(/"/g, "&quot;") + '" target="_blank">' + img + '</a>' : img;
      return '<div class="slide-affiche' + (i === 0 ? " active" : "") + '">' + contenu + '</div>';
    }).join("");
    indexAfficheActuelle = 0;
    if (affichesCache.length > 1) {
      intervalAffiche = setInterval(function () {
        const slides = zone.querySelectorAll(".slide-affiche");
        slides[indexAfficheActuelle].classList.remove("active");
        indexAfficheActuelle = (indexAfficheActuelle + 1) % slides.length;
        slides[indexAfficheActuelle].classList.add("active");
      }, 5000);
    }
  }

  function masquerSliderAffiches() {
    clearInterval(intervalAffiche);
    document.getElementById("sliderAfficheZone").style.display = "none";
  }

  // ==================== NAVIGATION PRE-CONNEXION ====================
  function afficherEcran(nom) {
    document.querySelectorAll(".auth-screen").forEach(function (s) { s.classList.remove("active"); });
    document.getElementById("ecran" + nom.charAt(0).toUpperCase() + nom.slice(1)).classList.add("active");
  }

  // Accessible depuis l'écran d'accueil (avant connexion) ET depuis l'en-tête une fois
  // connecté/en mode visiteur — "Retour" ramène là où l'utilisateur se trouvait avant.
  function afficherEcranContact() {
    document.querySelectorAll(".auth-screen").forEach(function (s) { s.classList.remove("active"); });
    document.getElementById("ecranDashboard").style.display = "none";
    document.getElementById("topbar").style.display = "none";
    document.getElementById("erreurContact").style.display = "none";
    document.getElementById("messageContact").textContent = "";
    const telContact = configApp && configApp.TelephoneContact;
    document.getElementById("contactTelephone").textContent = telContact || "";
    document.getElementById("contactTelephoneLigne").style.display = telContact ? "block" : "none";
    document.getElementById("contactEmail").textContent = (configApp && configApp.EmailContact) || "arcontact@gmail.com";
    document.getElementById("ecranContact").classList.add("active");
  }

  function retourDepuisContact() {
    document.getElementById("ecranContact").classList.remove("active");
    if (membreCourant || modeVisiteur) {
      document.getElementById("ecranDashboard").style.display = "block";
      document.getElementById("topbar").style.display = "flex";
    } else {
      retourVersVisiteur_();
    }
  }

  function envoyerContactClick() {
    const nom = document.getElementById("contactNom").value.trim();
    const coordonnee = document.getElementById("contactCoordonnee").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    const err = document.getElementById("erreurContact");
    const msg = document.getElementById("messageContact");
    err.style.display = "none";
    msg.textContent = "";
    if (!nom || !coordonnee || !message) {
      err.textContent = "Tous les champs sont obligatoires.";
      err.style.display = "block";
      return;
    }
    appelServeur("envoyerMessageContact", nom, coordonnee, message).then(function (res) {
      if (!res.succes) { err.textContent = res.message || "Envoi impossible."; err.style.display = "block"; return; }
      msg.className = "success-text";
      msg.textContent = "✓ Votre message a bien été envoyé. Merci, nous reviendrons vers vous rapidement.";
      document.getElementById("contactNom").value = "";
      document.getElementById("contactCoordonnee").value = "";
      document.getElementById("contactMessage").value = "";
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function demarrerInscription() {
    codeInvitationInscription = '';
    document.getElementById("codeInscription").value = '';
    document.getElementById("erreurCodeInscription").style.display = "none";
    afficherEcran("inscriptionCode");
  }

  function validerCodeInscription() {
    const code = document.getElementById("codeInscription").value.trim().toUpperCase();
    const err = document.getElementById("erreurCodeInscription");
    err.style.display = "none";
    if (!code) {
      err.textContent = "Saisissez votre code d'accès.";
      err.style.display = "block";
      return;
    }
    appelServeur("verifierCodeInscription", code).then(function(res) {
      if (!res.succes) {
        err.textContent = res.message || "Code d'accès invalide.";
        err.style.display = "block";
        return;
      }
      codeInvitationInscription = code;
      construireSelecteursNaissance();
      afficherEcran("inscriptionEtape1");
    }).catch(function(e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  // ==================== CONNEXION ====================
  function seConnecter() {
    const telephone = document.getElementById("loginTelephone").value.trim();
    const motDePasse = document.getElementById("loginMotDePasse").value;
    const err = document.getElementById("erreurConnexion");
    err.style.display = "none";
    if (!telephone || !motDePasse) return;
    appelServeur("connexionParTelephone", telephone, motDePasse).then(function (res) {
      if (!res.succes) {
        err.textContent = res.message;
        err.style.display = "block";
        return;
      }
      membreCourant = res.membre;
      jetonSession = res.jeton || "";
      sauvegarderSession_();
      afficherDashboard();
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  // --- Mot de passe oublié ---
  let telephoneReinitialisation = null;

  function afficherEcranMotDePasseOublie() {
    document.getElementById("mdpOublieEtapeTelephone").style.display = "block";
    document.getElementById("mdpOublieEtapeCode").style.display = "none";
    document.getElementById("mdpOublieTelephone").value = "";
    document.getElementById("erreurMdpOublieTelephone").style.display = "none";
    afficherEcran("motDePasseOublie");
  }

  function demarrerReinitialisation() {
    const telephone = document.getElementById("mdpOublieTelephone").value.trim();
    const err = document.getElementById("erreurMdpOublieTelephone");
    err.style.display = "none";
    if (!telephone) { err.textContent = "Le téléphone est requis."; err.style.display = "block"; return; }
    appelServeur("demanderReinitialisationMotDePasse", telephone).then(function (res) {
      telephoneReinitialisation = telephone;
      document.getElementById("mdpOublieEtapeTelephone").style.display = "none";
      document.getElementById("mdpOublieEtapeCode").style.display = "block";
      document.getElementById("mdpOublieCode").value = "";
      document.getElementById("mdpOublieNouveauMdp").value = "";
      document.getElementById("mdpOublieConfirmation").value = "";
      document.getElementById("erreurMdpOublieCode").style.display = "none";
      // Le message est volontairement générique (voir backend) — on l'affiche tel quel.
      alert(res.message);
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function validerReinitialisation() {
    const code = document.getElementById("mdpOublieCode").value.trim();
    const nouveauMdp = document.getElementById("mdpOublieNouveauMdp").value;
    const confirmation = document.getElementById("mdpOublieConfirmation").value;
    const err = document.getElementById("erreurMdpOublieCode");
    err.style.display = "none";
    if (!code) { err.textContent = "Le code est requis."; err.style.display = "block"; return; }
    if (!nouveauMdp || nouveauMdp.length < 4) { err.textContent = "Le mot de passe doit contenir au moins 4 caractères."; err.style.display = "block"; return; }
    if (nouveauMdp !== confirmation) { err.textContent = "Les mots de passe ne correspondent pas."; err.style.display = "block"; return; }
    appelServeur("reinitialiserMotDePasseAvecCode", telephoneReinitialisation, code, nouveauMdp).then(function (res) {
      if (!res.succes) { err.textContent = res.message; err.style.display = "block"; return; }
      alert("✓ Votre mot de passe a été réinitialisé. Vous pouvez maintenant vous connecter.");
      document.getElementById("loginTelephone").value = telephoneReinitialisation;
      afficherEcran("connexionForm");
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  // ==================== INSCRIPTION (2 ETAPES) ====================
  function construireSelecteursNaissance() {
    const selectJour = document.getElementById("insNaissanceJour");
    const selectMois = document.getElementById("insNaissanceMois");
    const selectAnnee = document.getElementById("insNaissanceAnnee");
    if (selectJour.options.length) return;
    selectJour.innerHTML = '<option value="">Jour</option>' + Array.from({ length: 31 }, function (_, i) { return i + 1; })
      .map(function (j) { return '<option value="' + j + '">' + j + '</option>'; }).join("");
    const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    selectMois.innerHTML = '<option value="">Mois</option>' + mois.map(function (m, i) { return '<option value="' + (i + 1) + '">' + m + '</option>'; }).join("");
    const anneeActuelle = new Date().getFullYear();
    let optionsAnnees = '<option value="">Année</option>';
    for (let a = anneeActuelle - 5; a >= anneeActuelle - 100; a--) optionsAnnees += '<option value="' + a + '">' + a + '</option>';
    selectAnnee.innerHTML = optionsAnnees;
  }

  function allerInscriptionEtape2() {
    const nom = document.getElementById("insNom").value.trim();
    const prenom = document.getElementById("insPrenom").value.trim();
    const paysOrigine = document.getElementById("insPaysOrigine").value.trim();
    const jour = document.getElementById("insNaissanceJour").value;
    const mois = document.getElementById("insNaissanceMois").value;
    const annee = document.getElementById("insNaissanceAnnee").value;
    const departement = document.getElementById("insDepartement").value.trim();
    const situation = document.getElementById("insSituation").value;
    const err = document.getElementById("erreurInscription1");

    if (!nom || !prenom || !paysOrigine || !jour || !mois || !annee || !departement || !situation) {
      err.textContent = "Tous les champs sont obligatoires.";
      err.style.display = "block";
      return;
    }
    err.style.display = "none";
    afficherEcran("inscriptionEtape2");
  }

  function retourInscriptionEtape1() {
    afficherEcran("inscriptionEtape1");
  }

  function traiterImageCarree(fichier, tailleMax, callback) {
    const lecteur = new FileReader();
    lecteur.onload = function (e) {
      const img = new Image();
      img.onload = function () {
        const cote = Math.min(img.width, img.height);
        const sx = (img.width - cote) / 2;
        const sy = (img.height - cote) / 2;
        const taille = Math.min(tailleMax, cote);
        const canvas = document.createElement("canvas");
        canvas.width = taille; canvas.height = taille;
        canvas.getContext("2d").drawImage(img, sx, sy, cote, cote, 0, 0, taille, taille);
        callback(canvas.toDataURL("image/png").split(",")[1]);
      };
      img.src = e.target.result;
    };
    lecteur.readAsDataURL(fichier);
  }

  function gererUploadPhotoInscription(evt) {
    const fichier = evt.target.files[0];
    if (!fichier) return;
    traiterImageCarree(fichier, 320, function (base64) {
      photoInscriptionBase64 = base64;
      document.getElementById("insPhotoPreview").innerHTML = '<img src="data:image/png;base64,' + base64 + '">';
    });
  }

  function finaliserInscription() {
    const telephone = document.getElementById("insTelephone").value.trim();
    const motDePasse = document.getElementById("insMotDePasse").value;
    const confirmation = document.getElementById("insMotDePasseConfirm").value;
    const profession = document.getElementById("insProfession").value.trim();
    const eglise = document.getElementById("insEglise").value.trim();
    const roleEglise = document.getElementById("insRoleEglise").value.trim();
    const adresse = document.getElementById("insAdresse").value.trim();
    const email = document.getElementById("insEmail").value.trim();
    const err = document.getElementById("erreurInscription2");
    err.style.display = "none";

    if (!email) { err.textContent = "L'adresse e-mail est obligatoire pour créer un compte."; err.style.display = "block"; document.getElementById("insEmail").focus(); return; }
    if (!profession || !eglise || !roleEglise || !adresse) { err.textContent = "Tous les champs sont obligatoires."; err.style.display = "block"; return; }
    if (!photoInscriptionBase64) { err.textContent = "Une photo est requise pour finaliser l'inscription."; err.style.display = "block"; return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.textContent = "L'adresse e-mail n'est pas valide."; err.style.display = "block"; return; }
    if (!telephone) { err.textContent = "Le téléphone est requis."; err.style.display = "block"; return; }
    if (!motDePasse || motDePasse.length < 4) { err.textContent = "Le mot de passe doit contenir au moins 4 caractères."; err.style.display = "block"; return; }
    if (motDePasse !== confirmation) { err.textContent = "Les mots de passe ne correspondent pas."; err.style.display = "block"; return; }

    const jour = document.getElementById("insNaissanceJour").value;
    const mois = document.getElementById("insNaissanceMois").value;
    const annee = document.getElementById("insNaissanceAnnee").value;
    const dateNaissance = annee + "-" + mois.padStart(2, "0") + "-" + jour.padStart(2, "0");

    const donnees = {
      nom: document.getElementById("insNom").value.trim(),
      prenom: document.getElementById("insPrenom").value.trim(),
      paysOrigine: document.getElementById("insPaysOrigine").value.trim(),
      dateNaissance: dateNaissance,
      departementOrigine: document.getElementById("insDepartement").value.trim(),
      situationMatrimoniale: document.getElementById("insSituation").value,
      profession: profession,
      eglise: eglise,
      roleEglise: roleEglise,
      adresseActuelle: adresse,
      telephone: telephone,
      email: email,
      photoBase64: photoInscriptionBase64,
      motDePasse: motDePasse,
      codeAccesInscription: codeInvitationInscription
    };

    appelServeur("creerCompte", donnees).then(function (res) {
      if (!res.succes) {
        err.textContent = res.message;
        err.style.display = "block";
        return;
      }
      membreCourant = res.membre;
      sauvegarderSession_();
      afficherDashboard();
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  // ==================== TABLEAU DE BORD ====================
  const PERMISSIONS_CLIENT = {
    'Admin_TG': ['finances'],
    'Admin_SG': ['demandesPriere'],
    'Admin_OG': ['contenus'],
    'Admin_Super': ['finances', 'demandesPriere', 'contenus', 'systeme', 'evenements']
  };

  // Droits d'un membre : ceux envoyés par le serveur (rôle fixe ou droits cochés pour un administrateur personnalisé).
  function permissionsDe_(m) {
    if (!m) return [];
    return Array.isArray(m.permissions) ? m.permissions : (PERMISSIONS_CLIENT[m.role] || []);
  }

  let modeVisiteur = false;
  let ongletActuel = null;
  let historiqueOnglets = [];

  function construireTabs() {
    let onglets;
    if (modeVisiteur) {
      onglets = [
        { id: "communaute", label: "✨ Communauté" },
        { id: "bible", label: "📖 Bible" },
        { id: "prieres", label: "🙏 Séances directes" },
        { id: "tv", label: "📺 TV" },
        { id: "audios", label: "🎧 Audios" },
        { id: "documents", label: "📄 Documents" },
        { id: "videos", label: "▶️ Vidéos" },
        { id: "evenements", label: "🎫 Événements" },
        { id: "offrandes", label: "🙌 Offrandes" },
        { id: "cotisation", label: "💳 Collectes" },
        { id: "demandePriere", label: "✉️ Demande de prière" }
      ];
    } else {
      onglets = [
        { id: "communaute", label: "✨ Communauté" },
        { id: "groupes", label: "Groupes" },
        { id: "cotisation", label: "Collectes" },
        { id: "offrandes", label: "Offrandes" },
        { id: "bible", label: "📖 Bible" },
        { id: "prieres", label: "🙏 Séances directes" },
        { id: "evenements", label: "🎫 Événements" },
        { id: "tv", label: "📺 TV" },
        { id: "audios", label: "🎧 Audios" },
        { id: "documents", label: "📄 Documents" },
        { id: "videos", label: "▶️ Vidéos" },
        { id: "messages", label: "Messages" }
      ];
      if (membreCourant && membreCourant.estAuteur) {
        onglets.push({ id: "soumissions", label: "✍️ Soumissions" });
      }
      if (membreCourant && permissionsDe_(membreCourant).length) {
        onglets.push({ id: "admin", label: "⚙ Admin" });
      }
    }
    onglets = onglets.map(function (o) { return { id: o.id, label: etiquetteOnglet_(o.id, o.label) }; });
    document.getElementById("tabsPrincipaux").innerHTML = onglets.map(function (o) {
      return '<div class="tab" data-tab="' + o.id + '" onclick="afficherOnglet(\'' + o.id + '\')">' + o.label + "</div>";
    }).join("");
    mettreAJourIndicateurTabs_();
  }

  // Affiche une flèche (avec dégradé) au bord droit de la barre d'onglets tant qu'il reste
  // du contenu à faire défiler — masquée automatiquement une fois arrivé au bout, ou si tous
  // les onglets tiennent déjà à l'écran (pas besoin de défiler).
  function mettreAJourIndicateurTabs_() {
    const tabs = document.getElementById("tabsPrincipaux");
    const indice = document.getElementById("tabsScrollHint");
    if (!tabs || !indice) return;
    const reste = tabs.scrollWidth - tabs.clientWidth - tabs.scrollLeft;
    indice.classList.toggle("masque", tabs.scrollWidth <= tabs.clientWidth + 2 || reste < 24);
  }

  function afficherDashboard() {
    modeVisiteur = false;
    historiqueOnglets = [];
    document.querySelectorAll(".auth-screen").forEach(function (s) { s.classList.remove("active"); });
    document.getElementById("ecranDashboard").style.display = "block";
    document.getElementById("topbar").style.display = "flex";
    document.getElementById("btnCompte").style.display = "inline-flex";
    document.getElementById("btnDeconnexion").style.display = "inline-flex";
    document.getElementById("btnDeconnexion").textContent = "Se déconnecter";
    document.getElementById("btnDeconnexion").onclick = quitterSession;
    document.getElementById("topbarSub").textContent = "Espace membres";
    document.getElementById("bonjourNom").textContent = "Bienvenue " + membreCourant.prenom + ((membreCourant.statut && membreCourant.statut !== "Actif") ? " — " + membreCourant.statut : "") + " 👋";

    construireTabs();
    remplirBadge();
    ongletActuel = null;
    afficherOnglet("groupes");
    chargerCompteursEtBadges();
    chargerEtAfficherSlider();
  }

  function entrerModeVisiteur(ongletInitial) {
    modeVisiteur = true;
    membreCourant = null;
    historiqueOnglets = [];
    document.querySelectorAll(".auth-screen").forEach(function (s) { s.classList.remove("active"); });
    document.getElementById("ecranDashboard").style.display = "block";
    document.getElementById("topbar").style.display = "flex";
    document.getElementById("topbarSub").textContent = "Espace visiteur";
    document.getElementById("btnCompte").style.display = "none";
    document.getElementById("btnDeconnexion").style.display = "inline-flex";
    document.getElementById("btnDeconnexion").textContent = "Se connecter";
    document.getElementById("btnDeconnexion").onclick = quitterVisiteurEtSeConnecter;
    document.getElementById("bonjourNom").textContent = "Bienvenue 👋";
    construireTabs();
    ongletActuel = null;
    afficherOnglet(ongletInitial || "prieres");
    chargerCompteursEtBadges();
    chargerEtAfficherSlider();
  }

  // Quitte proprement l'affichage "tableau de bord" (visiteur) pour montrer l'écran de
  // connexion — le mode visiteur restant en arrière-plan comme option de repli via "Retour".
  function quitterVisiteurEtSeConnecter() {
    document.getElementById("ecranDashboard").style.display = "none";
    document.getElementById("topbar").style.display = "none";
    afficherEcran("connexionForm");
  }

  // Utilisé par les écrans de connexion/inscription pour revenir à l'espace visiteur
  // (qui est désormais l'écran d'ouverture de l'application) plutôt qu'à un écran d'accueil
  // séparé.
  function retourVersVisiteur_() {
    entrerModeVisiteur();
  }

  // ==================== NOTIFICATIONS "NOUVEAU" (points rouges sur les onglets) ====================
  let compteursCache = null;

  function chargerCompteursEtBadges() {
    appelServeur("getCompteurs", codeActuel()).then(function (c) {
      compteursCache = c;
      appliquerBadgesTabs();
    }).catch(function () { /* pas grave si ça échoue : simplement pas de badges cette fois */ });
  }

  function mappingBadgesOnglets_() {
    if (!compteursCache) return {};
    return {
      groupes: compteursCache.groupes,
      cotisation: compteursCache.cotisations,
      prieres: compteursCache.seances,
      audios: compteursCache.audios,
      documents: compteursCache.documents,
      videos: compteursCache.playlists,
      messages: (compteursCache.reponsesRecues || 0) + (compteursCache.annonces || 0)
    };
  }

  function appliquerBadgesTabs() {
    const mapping = mappingBadgesOnglets_();
    Object.keys(mapping).forEach(function (section) {
      const tab = document.querySelector('#tabsPrincipaux .tab[data-tab="' + section + '"]');
      if (!tab) return;
      const nombre = mapping[section];
      const cle = "arc_vu_" + section + "_" + codeActuel();
      let dernierVu = null;
      try { dernierVu = localStorage.getItem(cle); } catch (e) { /* stockage indisponible, tant pis */ }
      const estNouveau = dernierVu !== null && Number(dernierVu) < nombre;
      let badge = tab.querySelector(".badge-nouveau");
      if (estNouveau) {
        if (!badge) { badge = document.createElement("span"); badge.className = "badge-nouveau"; tab.appendChild(badge); }
      } else if (badge) { badge.remove(); }
      // Première visite jamais enregistrée : on initialise la référence sans afficher de badge
      // (sinon tout paraîtrait "nouveau" au tout premier chargement de l'application).
      if (dernierVu === null) { try { localStorage.setItem(cle, String(nombre)); } catch (e) {} }
    });
    // Onglet Admin et ses sous-onglets : le compteur "Nouveau" est la vérité du serveur
    // (Statut = Nouveau), pas besoin de mémoriser un "déjà vu" localement.
    const totalAdmin = (compteursCache && compteursCache.messagesNouveaux || 0) + (compteursCache && compteursCache.demandesNouvelles || 0);
    const tabAdmin = document.querySelector('#tabsPrincipaux .tab[data-tab="admin"]');
    if (tabAdmin) {
      let badge = tabAdmin.querySelector(".badge-nouveau");
      if (totalAdmin > 0) { if (!badge) { badge = document.createElement("span"); badge.className = "badge-nouveau"; tabAdmin.appendChild(badge); } }
      else if (badge) { badge.remove(); }
    }
  }

  // Marque un onglet comme "vu" (retire son point rouge) — appelé quand on l'ouvre.
  function marquerOngletVu_(nom) {
    const mapping = mappingBadgesOnglets_();
    if (mapping[nom] === undefined) return;
    try { localStorage.setItem("arc_vu_" + nom + "_" + codeActuel(), String(mapping[nom])); } catch (e) {}
    const tab = document.querySelector('#tabsPrincipaux .tab[data-tab="' + nom + '"]');
    const badge = tab && tab.querySelector(".badge-nouveau");
    if (badge) badge.remove();
  }

  function ouvrirGroupePriereVisiteur() {
    appelServeur("getConfig").then(function (config) {
      window.open(config.LienGroupePriere || "https://chat.whatsapp.com/E2CxvgmFfuWFJiRBpijtpO", "_blank");
    }).catch(function () {
      window.open("https://chat.whatsapp.com/E2CxvgmFfuWFJiRBpijtpO", "_blank");
    });
  }

  function quitterSession() {
    confirmerApp_("Voulez-vous vraiment vous déconnecter ?", function () {
    arreterTv_();
    effacerSession_();
    membreCourant = null;
    historiqueOnglets = [];
    ongletActuel = null;
    document.getElementById("ecranDashboard").style.display = "none";
    document.getElementById("topbar").style.display = "none";
    masquerSliderAffiches();
    entrerModeVisiteur();
    });
  }

  // ==================== LANGUE DE L'APPLICATION (bouton de l'en-tête) ====================
  const LANGUES_APP_ = [
    { code: "fr", nom: "Français (original)" }, { code: "en", nom: "English" }, { code: "es", nom: "Español" },
    { code: "pt", nom: "Português" }, { code: "ar", nom: "العربية" }, { code: "de", nom: "Deutsch" }, { code: "sw", nom: "Kiswahili" },
    { code: "am", nom: "አማርኛ (Amharique)" }, { code: "ti", nom: "ትግርኛ (Tigrigna)" }, { code: "mg", nom: "Malagasy" }, { code: "ny", nom: "Chichewa" },
    { code: "rw", nom: "Kinyarwanda" }, { code: "so", nom: "Soomaali" }, { code: "st", nom: "Sesotho" }
  ];
  function ouvrirMenuLangue_(evenement) {
    if (evenement) evenement.stopPropagation();
    const ancien = document.getElementById("menuLangue");
    if (ancien) { ancien.remove(); return; }
    const menu = document.createElement("div");
    menu.id = "menuLangue";
    menu.className = "menu-langue";
    menu.innerHTML = LANGUES_APP_.map(function (l) {
      return '<button type="button" onclick="choisirLangueApp_(\'' + l.code + '\')">' + escapeHtml(l.nom) + '</button>';
    }).join("");
    document.body.appendChild(menu);
    setTimeout(function () {
      document.addEventListener("click", function fermer() { const m = document.getElementById("menuLangue"); if (m) m.remove(); document.removeEventListener("click", fermer); });
    }, 0);
  }
  function choisirLangueApp_(code) {
    const m = document.getElementById("menuLangue"); if (m) m.remove();
    const sel = document.getElementById("selecteurTraduction");
    if (sel) sel.value = code;
    traduireVers(code);
  }

  // ==================== TRADUCTION (widget Google Translate gratuit) ====================
  function traduireVers(langue) {
    if (!langue) return;
    const essai = function (tentatives) {
      const select = document.querySelector("#google_translate_element select.goog-te-combo");
      if (select) {
        select.value = langue;
        select.dispatchEvent(new Event("change"));
      } else if (tentatives > 0) {
        setTimeout(function () { essai(tentatives - 1); }, 400);
      } else {
        alert("La traduction n'a pas pu se charger. Vérifiez votre connexion et réessayez.");
      }
    };
    essai(10);
  }

  function boutonPrecedent() {
    const lecteurs = ["lecteurVideoZone"];
    for (let i = 0; i < lecteurs.length; i++) {
      const el = document.getElementById(lecteurs[i]);
      if (el && el.style.display === "block" && el.innerHTML.trim() !== "") { el.style.display = "none"; el.innerHTML = ""; return; }
    }
    const zoneVideosPl = document.getElementById("listeVideosPlaylist");
    if (zoneVideosPl && zoneVideosPl.style.display === "block") {
      zoneVideosPl.style.display = "none";
      document.getElementById("listePlaylists").style.display = "block";
      return;
    }
    if (historiqueOnglets.length) {
      afficherOnglet(historiqueOnglets.pop(), true);
    } else if (modeVisiteur) {
      quitterSession();
    }
  }

  // Rend un lecteur flottant déplaçable au doigt, par appui long (≈450ms sans bouger) suivi
  // d'un glisser — pour ne jamais gêner un tap normal sur ses boutons (lecture, fermeture...).
  // Fonctionne aussi à la souris, pour pouvoir tester depuis un ordinateur.
  function rendreLecteurDeplacable_(id) {
    const el = document.getElementById(id);
    if (!el) return;
    let minuteur = null;
    let enDeplacement = false;
    let aBouge = false;
    let decalageX = 0, decalageY = 0;

    function positionner(x, y) {
      const largeur = el.offsetWidth, hauteur = el.offsetHeight;
      let left = x - decalageX;
      let top = y - decalageY;
      left = Math.max(6, Math.min(window.innerWidth - largeur - 6, left));
      top = Math.max(6, Math.min(window.innerHeight - hauteur - 6, top));
      el.style.left = left + "px";
      el.style.top = top + "px";
      el.style.right = "auto";
      el.style.bottom = "auto";
      el.style.transform = "none";
    }

    function demarrerAppui(x, y) {
      clearTimeout(minuteur);
      minuteur = setTimeout(function () {
        enDeplacement = true;
        aBouge = false;
        const rect = el.getBoundingClientRect();
        decalageX = x - rect.left;
        decalageY = y - rect.top;
        el.classList.add("lecteur-en-deplacement");
        if (navigator.vibrate) navigator.vibrate(15); // petit retour haptique si disponible
      }, 450);
    }

    function terminerAppui() {
      clearTimeout(minuteur);
      if (enDeplacement) el.classList.remove("lecteur-en-deplacement");
      enDeplacement = false;
    }

    el.addEventListener("touchstart", function (e) {
      if (e.target.closest("button, a, select, input")) return; // ne gêne pas les taps normaux
      const t = e.touches[0];
      demarrerAppui(t.clientX, t.clientY);
    }, { passive: true });

    el.addEventListener("touchmove", function (e) {
      if (!enDeplacement) { clearTimeout(minuteur); return; }
      aBouge = true;
      const t = e.touches[0];
      positionner(t.clientX, t.clientY);
      e.preventDefault(); // empêche le défilement de la page pendant le glisser
    }, { passive: false });

    el.addEventListener("touchend", function (e) {
      if (enDeplacement && aBouge) e.preventDefault(); // évite qu'un clic parasite se déclenche après le glisser
      terminerAppui();
    });

    el.addEventListener("mousedown", function (e) {
      if (e.target.closest("button, a, select, input")) return;
      demarrerAppui(e.clientX, e.clientY);
      const onMove = function (e2) {
        if (!enDeplacement) return;
        aBouge = true;
        positionner(e2.clientX, e2.clientY);
      };
      const onUp = function () {
        terminerAppui();
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
      };
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
    });
  }

  // Relie le bouton/geste "Retour" physique du téléphone (et celui du navigateur) à notre
  // propre navigation interne, au lieu de laisser l'appareil fermer l'application ou
  // afficher une page blanche. Technique : on maintient toujours une entrée d'historique
  // "factice" ; à chaque retour détecté, on en repose une immédiatement (pour rester sur la
  // même page) et on déclenche notre boutonPrecedent() habituel.
  function initialiserGestionRetourTelephone_() {
    history.pushState({ appEtat: true }, "");
    window.addEventListener("popstate", function () {
      history.pushState({ appEtat: true }, "");
      boutonPrecedent();
    });
  }

  function remplirBadge() {
    document.getElementById("badgeNom").textContent = (membreCourant.prenom + " " + membreCourant.nom).trim() || "—";
    document.getElementById("badgeRole").textContent = membreCourant.roleEglise || "Membre";
    document.getElementById("badgeTel").textContent = membreCourant.telephone || "—";
    document.getElementById("badgeCode").textContent = "Code : " + membreCourant.code;
    const statutEl = document.getElementById("badgeStatut");
    if (membreCourant.statut === "Actif") {
      statutEl.textContent = "";
      statutEl.style.display = "none";
    } else {
      statutEl.style.display = "";
      statutEl.textContent = membreCourant.statut || "Statut inconnu";
      statutEl.style.color = "#b8892f";
      statutEl.style.background = "#fdf1dc";
    }
    remplirCompte_();
    document.getElementById("badgeQr").src = "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=" + encodeURIComponent(membreCourant.code);
    document.getElementById("badgePhotoWrap").innerHTML = membreCourant.photoBase64 ? '<img src="data:image/png;base64,' + membreCourant.photoBase64 + '">' : "👤";
  }

  // ==================== MON COMPTE ====================
  function compteMessage_(id, texte, ok) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = texte;
    el.style.color = ok ? "var(--green)" : "var(--danger)";
    el.style.display = texte ? "block" : "none";
  }

  function remplirCompte_() {
    const m = membreCourant;
    if (!m) return;
    document.getElementById("cpEmail").value = m.email || "";
    document.getElementById("cpAdresse").value = m.adresseActuelle || "";
    document.getElementById("cpProfession").value = m.profession || "";
    document.getElementById("cpEglise").value = m.eglise || "";

    const cartes = [];
    if (m.estAuteur) cartes.push('<div class="card" style="margin-top:12px;"><p class="field-label">✍️ Auteur</p><p class="item-desc">Soumettez vos documents, audios et vidéos et suivez leur publication.</p><button class="secondary" onclick="afficherOnglet(\'soumissions\')">Mes soumissions</button></div>');
    if (m.estTvOwner) cartes.push('<div class="card" style="margin-top:12px;"><p class="field-label">📺 TV Owner</p><p class="item-desc">Gérez votre chaîne : logo, vidéos, playlists, boucle des temps morts, grille et lives.</p><button class="secondary" onclick="tvSousOnglet=\'studio\';afficherOnglet(\'tv\')">Mon studio TV</button></div>');
    const perms = permissionsDe_(m);
    if (perms.length) {
      const domaines = { finances: "Finances et collectes", demandesPriere: "Demandes de prière", contenus: "Contenus et TV", evenements: "Événements et organisateurs", systeme: "Membres, annonces et réglages" };
      cartes.push('<div class="card" style="margin-top:12px;"><p class="field-label">⚙ ' + escapeHtml(LIBELLES_ROLES[m.role] || "Administrateur") + '</p><p class="item-desc">Vous gérez : ' + perms.map(function (p) { return domaines[p]; }).join(", ") + '.</p><button class="secondary" onclick="afficherOnglet(\'admin\')">Ouvrir l\'administration</button></div>');
    }
    document.getElementById("compteRoles").innerHTML = cartes.join("");
  }

  function compteApresMiseAJour_(membre) {
    if (membre) Object.assign(membreCourant, membre);
    sauvegarderSession_();
    remplirBadge();
  }

  function compteSauvegarderInfos() {
    compteMessage_("cpMsgInfos", "", true);
    appelServeur("modifierMonProfil", membreCourant.code, {
      email: document.getElementById("cpEmail").value,
      adresseActuelle: document.getElementById("cpAdresse").value,
      profession: document.getElementById("cpProfession").value,
      eglise: document.getElementById("cpEglise").value
    }).then(function (res) {
      if (!res.succes) { compteMessage_("cpMsgInfos", res.message || "Échec de l'enregistrement.", false); return; }
      compteApresMiseAJour_(res.membre);
      compteMessage_("cpMsgInfos", "✓ Informations enregistrées.", true);
    }).catch(function (e) { compteMessage_("cpMsgInfos", "Erreur : " + e.message, false); });
  }

  function compteChangerTelephone() {
    const tel = document.getElementById("cpNouveauTel").value.trim();
    const mdp = document.getElementById("cpTelMdp").value;
    if (!tel || !mdp) { compteMessage_("cpMsgTel", "Renseignez le nouveau numéro et votre mot de passe actuel.", false); return; }
    appelServeur("changerTelephoneMembre", membreCourant.code, mdp, tel).then(function (res) {
      if (!res.succes) { compteMessage_("cpMsgTel", res.message || "Échec du changement.", false); return; }
      compteApresMiseAJour_(res.membre);
      document.getElementById("cpNouveauTel").value = "";
      document.getElementById("cpTelMdp").value = "";
      compteMessage_("cpMsgTel", "✓ Numéro modifié. Utilisez-le désormais pour vous connecter.", true);
    }).catch(function (e) { compteMessage_("cpMsgTel", "Erreur : " + e.message, false); });
  }

  function compteChangerMotDePasse() {
    const actuel = document.getElementById("cpMdpActuel").value;
    const nouveau = document.getElementById("cpMdpNouveau").value;
    const confirmation = document.getElementById("cpMdpConfirm").value;
    if (!actuel || !nouveau) { compteMessage_("cpMsgMdp", "Renseignez votre mot de passe actuel et le nouveau.", false); return; }
    if (nouveau.length < 4) { compteMessage_("cpMsgMdp", "Le nouveau mot de passe doit contenir au moins 4 caractères.", false); return; }
    if (nouveau !== confirmation) { compteMessage_("cpMsgMdp", "La confirmation ne correspond pas.", false); return; }
    appelServeur("changerMotDePasseMembre", membreCourant.code, actuel, nouveau).then(function (res) {
      if (!res.succes) { compteMessage_("cpMsgMdp", res.message || "Échec du changement.", false); return; }
      ["cpMdpActuel", "cpMdpNouveau", "cpMdpConfirm"].forEach(function (id) { document.getElementById(id).value = ""; });
      compteMessage_("cpMsgMdp", "✓ Mot de passe modifié.", true);
    }).catch(function (e) { compteMessage_("cpMsgMdp", "Erreur : " + e.message, false); });
  }

  function afficherOnglet(nom, depuisHistorique) {
    if (!depuisHistorique && ongletActuel && ongletActuel !== nom) historiqueOnglets.push(ongletActuel);
    if (ongletActuel === "bible" && nom !== "bible") arreterLectureBible(); // ne pas laisser la voix continuer en arrière-plan
    ongletActuel = nom;
    if (!modeVisiteur) sauvegarderSession_(); // prolonge la session tant que le membre navigue activement
    document.querySelectorAll("#tabsPrincipaux .tab").forEach(function (t) { t.classList.toggle("active", t.dataset.tab === nom); });
    document.querySelectorAll("#ecranDashboard > .section").forEach(function (s) { s.classList.toggle("active", s.id === "section-" + nom); });
    // Recharge les données à chaque visite de l'onglet, pour ne jamais afficher un contenu périmé.
    if (nom === "groupes") chargerGroupes();
    else if (nom === "cotisation") { chargerTypesCotisationMembre(); chargerMesCotisations(); }
    else if (nom === "offrandes") chargerMesOffrandes();
    else if (nom === "audios") chargerAudios();
    else if (nom === "documents") chargerDocuments();
    else if (nom === "bible") chargerLivresBible();
    else if (nom === "messages") { chargerMesMessages(); chargerMesAnnonces(); }
    else if (nom === "videos") chargerPlaylists();
    else if (nom === "prieres") chargerSeances();
    else if (nom === "tv") chargerTv();
    else if (nom === "evenements") chargerEvenements();
    else if (nom === "communaute") chargerCommunaute();
    else if (nom === "soumissions") chargerMesSoumissions();
    else if (nom === "admin") chargerDonneesAdmin();
    marquerOngletVu_(nom);
  }

  function construireAdminSubtabs() {
    const permissions = permissionsDe_(membreCourant);
    const tousLesSousOnglets = [
      { id: "apparence", label: "Apparence", permission: "systeme" },
      { id: "groupes", label: "Groupes", permission: "contenus" },
      { id: "seances", label: "Séances", permission: "contenus" },
      { id: "audios", label: "🎧 Audios", permission: "contenus" },
      { id: "documents", label: "📄 Documents", permission: "contenus" },
      { id: "playlists", label: "▶️ Playlists", permission: "contenus" },
      { id: "videosPlateforme", label: "🎬 Vidéos", permission: "contenus" },
      { id: "affiche", label: "🖼️ Affiche", permission: "contenus" },
      { id: "actualites", label: "📰 Actualités", permission: "contenus" },
      { id: "espacesPub", label: "📢 Espaces pub", permission: "contenus" },
      { id: "membres", label: "Membres", permission: "systeme" },
      { id: "annonces", label: "📢 Annonces", permission: "systeme" },
      { id: "paiements", label: "Paiements", permission: "finances" },
      { id: "cotisation", label: "Collectes", permission: "finances" },
      { id: "demandesPriere", label: "Demandes de prière", permission: "demandesPriere" },
      { id: "soumissions", label: "✍️ Soumissions", permission: "contenus" },
      { id: "tv", label: "📺 TV", permission: "contenus" },
      { id: "messages", label: "Messages", permission: "systeme" },
      { id: "codes", label: "🔐 Codes d'accès", permission: "systeme" }
    ];
    const visibles = tousLesSousOnglets.filter(function (s) { return permissions.indexOf(s.permission) !== -1; });
    document.getElementById("adminSubtabs").innerHTML = visibles.map(function (s, i) {
      const compteurs = { messages: compteursCache && compteursCache.messagesNouveaux, demandesPriere: compteursCache && compteursCache.demandesNouvelles };
      const nombre = compteurs[s.id];
      const badge = nombre ? '<span class="badge-compteur">' + nombre + '</span>' : '';
      return '<div class="admin-subtab' + (i === 0 ? " active" : "") + '" data-sub="' + s.id + '" onclick="afficherSousOnglet(\'' + s.id + '\')">' + s.label + badge + "</div>";
    }).join("");
    document.querySelectorAll(".admin-section").forEach(function (s) { s.classList.remove("active"); });
    if (visibles.length) {
      const premier = document.getElementById("admin-" + visibles[0].id);
      if (premier) premier.classList.add("active");
    }
    return visibles;
  }

  function afficherSousOnglet(nom) {
    document.querySelectorAll(".admin-subtab").forEach(function (t) { t.classList.toggle("active", t.dataset.sub === nom); });
    document.querySelectorAll(".admin-section").forEach(function (s) { s.classList.toggle("active", s.id === "admin-" + nom); });
    if (nom === "groupes") { appelServeur("getGroupesAdmin", membreCourant.code).then(afficherGroupesAdmin).catch(function (err) { afficherErreurZone("adminListeGroupes", err); }); document.getElementById("ggpLien").value = (configApp && configApp.LienGroupePriere) || ""; }
    else if (nom === "seances") appelServeur("getSeancesAdmin", membreCourant.code).then(afficherSeancesAdmin).catch(function (err) { afficherErreurZone("adminListeSeances", err); });
    else if (nom === "membres") appelServeur("getMembresAdmin", membreCourant.code).then(afficherMembresAdmin).catch(function (err) { afficherErreurZone("adminListeMembres", err); });
    else if (nom === "annonces") chargerMembresPourAnnonce();
    else if (nom === "paiements") appelServeur("getPaiementsAdmin", membreCourant.code).then(afficherPaiementsAdmin).catch(function (err) { afficherErreurZone("adminListePaiements", err); });
    else if (nom === "messages") { document.getElementById("rechercheMessagesAdmin").value = ""; appelServeur("getMessagesAdmin", membreCourant.code).then(function (data) { messagesAdminCache = data || []; afficherMessagesAdmin(messagesAdminCache); }).catch(function (err) { afficherErreurZone("adminListeMessages", err); }); }
    else if (nom === "cotisation") appelServeur("getTypesCotisation").then(afficherTypesCotisationAdmin).catch(function (err) { afficherErreurZone("adminListeTypesCotisation", err); });
    else if (nom === "audios") appelServeur("getEnregistrements").then(function (data) {
      if (categoriesAudioCache) { afficherEnregistrementsAdmin(data); return; }
      appelServeur("getCategoriesAudio").then(function (cats) { categoriesAudioCache = cats; afficherEnregistrementsAdmin(data); });
    }).catch(function (err) { afficherErreurZone("adminListeEnregistrements", err); });
    else if (nom === "documents") appelServeur("getDocuments").then(afficherDocumentsAdmin).catch(function (err) { afficherErreurZone("adminListeDocuments", err); });
    else if (nom === "playlists") appelServeur("getPlaylists").then(afficherPlaylistsAdmin).catch(function (err) { afficherErreurZone("adminListePlaylists", err); });
    else if (nom === "videosPlateforme") appelServeur("getVideos").then(afficherVideosPlateformeAdmin).catch(function (err) { afficherErreurZone("adminListeVideosPlateforme", err); });
    else if (nom === "affiche") chargerAfficheAdmin();
    else if (nom === "actualites") appelServeur("getActualitesAdmin").then(afficherActualitesAdmin).catch(function (err) { afficherErreurZone("adminListeActualites", err); });
    else if (nom === "espacesPub") appelServeur("getEspacesPubAdmin").then(afficherEspacesPubAdmin).catch(function (err) { afficherErreurZone("adminListeEspacesPub", err); });
    else if (nom === "demandesPriere") appelServeur("getDemandesPriereAdmin", membreCourant.code).then(afficherDemandesPriereAdmin).catch(function (err) { afficherErreurZone("adminListeDemandesPriere", err); });
    else if (nom === "tv") rechargerTvAdmin_();
    else if (nom === "soumissions") appelServeur("getSoumissionsAdmin", membreCourant.code).then(afficherSoumissionsAdmin).catch(function (err) { afficherErreurZone("adminListeSoumissions", err); });
    else if (nom === "codes") appelServeur("getCodesInscriptionAdmin", membreCourant.code).then(afficherCodesInscriptionAdmin).catch(function (err) { afficherErreurZone("adminListeCodesInscription", err); });
  }

  // ==================== GROUPES ====================
  function chargerGroupes() {
    appelServeur("getGroupes").then(afficherGroupes).catch(function (err) { afficherErreurZone("listeGroupes", err); });
  }

  function afficherGroupes(groupes) {
    groupes = groupes || [];
    const zone = document.getElementById("listeGroupes");
    if (!groupes.length) { zone.innerHTML = '<p class="empty-state">Aucun groupe pour le moment.</p>'; return; }
    zone.innerHTML = groupes.map(function (g) {
      return '<div class="item-block">' +
        '<div class="item-row" style="border:none;padding:0;">' +
        '<div><div class="item-nom">' + escapeHtml(g.NomGroupe) + '</div>' +
        '<div class="item-desc">' + escapeHtml(g.Description || "") + '</div></div>' +
        '<button class="btn-rejoindre" onclick="toggleJoinForm(\'' + g.ID + '\')">Rejoindre</button>' +
        '</div>' +
        '<div class="join-form" id="join-' + g.ID + '">' +
        '<input type="text" id="joincode-' + g.ID + '" placeholder="Code d\u2019accès du groupe">' +
        '<button class="small" onclick="validerCodeGroupe(\'' + g.ID + '\')">Valider</button>' +
        '<div class="join-error" id="joinerr-' + g.ID + '" style="display:none;"></div>' +
        '</div>' +
        '</div>';
    }).join("");
  }

  function toggleJoinForm(id) {
    document.getElementById("join-" + id).classList.toggle("active");
  }

  function validerCodeGroupe(id) {
    const code = document.getElementById("joincode-" + id).value.trim();
    const errZone = document.getElementById("joinerr-" + id);
    errZone.style.display = "none";
    if (!code) return;
    appelServeur("rejoindreGroupe", id, code).then(function (res) {
      if (res.succes) {
        window.open(res.lien, "_blank");
        document.getElementById("join-" + id).classList.remove("active");
      } else {
        errZone.textContent = res.message;
        errZone.style.display = "block";
      }
    }).catch(function (err) {
      errZone.textContent = err.message;
      errZone.style.display = "block";
    });
  }

  // ==================== SEANCES ====================
  function codeActuel() { return membreCourant ? membreCourant.code : "VISITEUR"; }

  let seancesCache = [];
  let sousOngletSeancesActuel = "accueil";

  function chargerSeances() {
    document.getElementById("rechercheSeances").value = "";
    const fonction = modeVisiteur ? "getSeancesPublic" : "getSeances";
    appelServeur(fonction, codeActuel()).then(function (seances) {
      seancesCache = seances || [];
      afficherSousSeances(sousOngletSeancesActuel || "accueil");
    }).catch(function (err) { afficherErreurZone("seancesAlaUne", err); });
  }

  function afficherSousSeances(nom) {
    sousOngletSeancesActuel = nom;
    document.querySelectorAll("#subNavSeances .sub-nav-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.sub === nom); });
    document.querySelectorAll("#section-prieres .sub-section").forEach(function (s) { s.classList.toggle("active", s.id === "seancesSous-" + nom); });
    if (nom === "accueil") afficherAccueilSeances();
    else if (nom === "actualites") afficherActualitesSeances();
    else if (nom === "toutes") afficherSeances(seancesCache);
  }

  function afficherAccueilSeances() {
    afficherPubsDoubles_("seances", "pubSeancesHaut", "pubSeancesBas");
    const zone = document.getElementById("seancesAlaUne");
    if (!seancesCache.length) { zone.innerHTML = '<p class="empty-state">Aucune séance programmée pour le moment.</p>'; return; }
    const vedette = seancesCache[0];
    const dateVedette = vedette.Date ? escapeHtml(String(vedette.Date)) : "Date à confirmer";
    const heureVedette = vedette.Heure ? " à " + escapeHtml(formaterHeureSeance_(vedette.Heure)) : "";
    let html = '<div class="hero-vedette" onclick="afficherSousSeances(\'toutes\')">' +
      '<div class="hero-vedette-body"><div class="hero-vedette-label">🙏 Prochaine séance</div><div class="hero-vedette-titre">' + escapeHtml(vedette.Titre) + '</div>' +
      '<div class="item-desc" style="color:rgba(255,255,255,.85);">' + dateVedette + heureVedette + '</div>' +
      '</div></div>';
    const restants = seancesCache.slice(1, 6);
    if (restants.length) {
      html += '<p class="field-label">À venir</p><div class="card">' + restants.map(construireCarteSeance_).join("") + '</div>';
    }
    zone.innerHTML = html;
  }

  let actualitesSeancesCache = null;

  function afficherActualitesSeances() {
    const zone = document.getElementById("seancesActualites");
    appelServeur("getActualites", "seances").then(function (liste) {
      actualitesSeancesCache = liste || [];
      if (!liste.length) { zone.innerHTML = '<p class="empty-state">Aucune actualité pour le moment.</p>'; return; }
      zone.innerHTML = liste.map(function (a) { return construireCarteActualite_(a, "ouvrirActualiteSeances_"); }).join("");
    }).catch(function (err) { afficherErreurZone("seancesActualites", err); });
  }

  function ouvrirActualiteSeances_(id) {
    const a = actualitesSeancesCache.find(function (x) { return x.ID === id; });
    if (a) afficherDetailActualiteModal_(a);
  }

  function filtrerSeances() {
    const requete = document.getElementById("rechercheSeances").value.trim().toLowerCase();
    if (!requete) { afficherSeances(seancesCache); return; }
    afficherSeances(seancesCache.filter(function (s) {
      return (s.Titre || "").toLowerCase().indexOf(requete) !== -1 ||
        (s.Date ? String(s.Date).toLowerCase().indexOf(requete) !== -1 : false);
    }));
  }

  function construireCarteSeance_(s) {
    const date = s.Date ? escapeHtml(String(s.Date)) : "Date à confirmer";
    const heure = s.Heure ? " à " + escapeHtml(formaterHeureSeance_(s.Heure)) : "";
    const badgePremium = s.Type === "Payant" ? '<span class="badge-premium">⭐ Premium</span>' : "";
    const bouton = (s.Type === "Payant" && !s.LienMeet)
      ? '<button class="flame small" onclick="acheterSeance(\'' + s.ID + '\',' + Number(s.Prix) + ')">💳 ' + Number(s.Prix).toLocaleString("fr-FR") + ' F</button>'
      : '<button class="btn-meet" onclick="ouvrirLienExterne_(\'' + jsq_(s.LienMeet || "") + '\')">Rejoindre</button>';
    return '<div class="item-row">' +
      '<div><div class="item-nom">' + escapeHtml(s.Titre) + badgePremium + '</div>' +
      '<div class="item-desc">' + date + heure + '</div></div>' +
      bouton +
      '</div>';
  }

  function afficherSeances(seances) {
    seances = seances || [];
    const zone = document.getElementById("listeSeances");
    if (!seances.length) { zone.innerHTML = '<p class="empty-state">Aucune séance trouvée.</p>'; return; }
    zone.innerHTML = seances.map(construireCarteSeance_).join("");
  }

  function acheterSeance(id, prix) {
    if (!configApp || !configApp.paiementPublicKey) { alert(messagePaiementNonConfigure_()); return; }
    typeCotisationEnCours = { nom: id, montant: prix, periodicite: "", categorie: "Seance" };
    openKkiapayWidget({ amount: prix, api_key: configApp.paiementPublicKey, sandbox: false, data: codeActuel() });
  }

  // ==================== COTISATIONS ====================
  function chargerTypesCotisationMembre() {
    appelServeur("getTypesCotisation").then(afficherTypesCotisationMembre).catch(function (err) { afficherErreurZone("listeTypesCotisation", err); });
  }

  function afficherTypesCotisationMembre(types) {
    types = types || [];
    const zone = document.getElementById("listeTypesCotisation");
    if (!types.length) { zone.innerHTML = '<p class="empty-state">Aucune collecte pour le moment.</p>'; return; }
    zone.innerHTML = types.map(function (t) {
      const nomEchappe = jsq_(t.Nom);
      const aObjectif = Number(t.MontantObjectif) > 0;
      const pourcentage = aObjectif ? t.Pourcentage : null;
      const barre = aObjectif
        ? '<div class="cotisation-progress-track"><div class="cotisation-progress-fill" style="width:' + pourcentage + '%;"></div></div>' +
          '<div class="cotisation-montants-row"><span>Collecté : <strong>' + Number(t.MontantCollecte).toLocaleString("fr-FR") + ' F</strong> (' + pourcentage + '%)</span>' +
          '<span>Reste : <strong>' + Number(t.Reste).toLocaleString("fr-FR") + ' F</strong></span></div>'
        : '';
      const dates = (t.DateDebut || t.DateFin)
        ? '<div class="cotisation-dates">' + (t.DateDebut ? "Du " + new Date(t.DateDebut).toLocaleDateString("fr-FR") : "") +
          (t.DateFin ? " au " + new Date(t.DateFin).toLocaleDateString("fr-FR") : "") + '</div>'
        : '';
      return '<div class="cotisation-type-card" style="flex-direction:column;align-items:stretch;">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;">' +
        '<div><div class="cotisation-type-nom">' + escapeHtml(t.Nom) + '</div>' +
        '<div class="cotisation-type-periode">' + escapeHtml(t.Periodicite) + '</div>' + dates + '</div>' +
        '<div class="cotisation-type-montant">Suggéré : ' + Number(t.Montant).toLocaleString("fr-FR") + ' F</div>' +
        '</div>' +
        barre +
        '<div class="cotisation-pay-row">' +
        '<input type="number" min="1" id="montant-' + t.ID + '" value="' + Number(t.Montant) + '">' +
        '<button class="flame small" onclick="lancerPaiement(\'' + t.ID + '\',\'' + nomEchappe + '\',\'' + t.Periodicite + '\')">Payer</button>' +
        '</div></div>';
    }).join("");
  }

  function chargerMesCotisations() {
    if (modeVisiteur) {
      document.getElementById("listeMesCotisations").innerHTML = '<p class="empty-state">Créez un compte pour retrouver l\'historique de vos cotisations et vos reçus.</p>';
      document.getElementById("statTotalPaye").textContent = "—";
      document.getElementById("statNbPaiements").textContent = "—";
      return;
    }
    appelServeur("getMesCotisations", membreCourant.code).then(function (data) {
      afficherMesCotisations(data, false);
    }).catch(function (err) { afficherErreurZone("listeMesCotisations", err); });
  }

  function afficherMesCotisations(data, estOffrande) {
    data = data || { paiements: [], totalPaye: 0 };
    const paiementsTous = data.paiements || [];
    const paiements = paiementsTous.filter(function (p) { return estOffrande ? (p.Categorie === "Don") : (p.Categorie !== "Don"); });

    if (estOffrande) {
      document.getElementById("listeMesOffrandes").innerHTML = construireTableauPaiements(paiements, true);
    } else {
      const totalPaye = paiements.filter(function (p) { return p.Statut === "Confirmé"; }).reduce(function (a, p) { return a + Number(p.Montant || 0); }, 0);
      document.getElementById("statTotalPaye").textContent = totalPaye.toLocaleString("fr-FR");
      document.getElementById("statNbPaiements").textContent = paiements.length;
      document.getElementById("listeMesCotisations").innerHTML = construireTableauPaiements(paiements, false);
    }
  }

  function construireTableauPaiements(paiements, estOffrande) {
    if (!paiements.length) return '<p class="empty-state">' + (estOffrande ? "Aucun don pour le moment." : "Aucun paiement pour le moment.") + '</p>';
    return '<table class="mini-table"><tr><th>Date</th><th>' + (estOffrande ? "Motif" : "Type") + '</th><th>Montant</th><th>Statut</th><th>Reçu</th></tr>' +
      paiements.map(function (p) {
        const date = p.Date ? new Date(p.Date).toLocaleDateString("fr-FR") : "";
        const okClass = p.Statut === "Confirmé" ? "success-text" : "error";
        const recu = p.Statut === "Confirmé"
          ? '<button class="small secondary" onclick="voirRecu(\'' + p.TransactionID + '\')">Voir</button>'
          : '—';
        return "<tr><td>" + date + "</td><td>" + escapeHtml(p.TypeCotisation || "—") + "</td><td>" + Number(p.Montant).toLocaleString("fr-FR") + " F</td>" +
          '<td class="' + okClass + '">' + escapeHtml(p.Statut) + "</td><td>" + recu + "</td></tr>";
      }).join("") + "</table>";
  }

  function lancerPaiement(id, nom, periodicite) {
    const inputMontant = document.getElementById("montant-" + id);
    const montant = Number(inputMontant ? inputMontant.value : 0);
    if (!montant || montant <= 0) {
      document.getElementById("messagePaiement").innerHTML = '<span class="error">Indiquez un montant valide.</span>';
      return;
    }
    if (!configApp || !configApp.paiementPublicKey) {
      document.getElementById("messagePaiement").innerHTML = '<span class="error">' + messagePaiementNonConfigure_() + '</span>';
      return;
    }
    document.getElementById("messagePaiement").innerHTML = '<span class="item-desc">Ouverture du paiement…</span>';
    typeCotisationEnCours = { nom: nom, montant: montant, periodicite: periodicite, categorie: "Cotisation" };
    openKkiapayWidget({ amount: montant, api_key: configApp.paiementPublicKey, sandbox: false, data: codeActuel() });
  }

  addKkiapayListener("success", function (response) {
    if (contextePaiement_ === "evenement") return;   // achat de billets : traité par evtApresPaiement_
    const transactionId = response.transactionId || (response.detail && response.detail.transactionId);
    const info = typeCotisationEnCours || { nom: "", montant: 0, periodicite: "", categorie: "Cotisation" };

    if (info.categorie === "Document") {
      const zoneDoc = document.getElementById("messageAchatDocument");
      zoneDoc.textContent = "Vérification du paiement…";
      appelServeur("verifierEtEnregistrerPaiement", codeActuel(), transactionId, info.montant, "FedaPay", info.nom, null, "Document")
        .then(function (res) {
          if (!res.succes) { zoneDoc.className = "error"; zoneDoc.textContent = texteEchecPaiement_(res); return; }
          return appelServeur("getLienDocument", codeActuel(), info.nom, transactionId).then(function (lienRes) {
            if (!lienRes.succes) { zoneDoc.className = "error"; zoneDoc.textContent = lienRes.message || "Téléchargement indisponible."; return; }
            zoneDoc.className = "success-text";
            zoneDoc.textContent = "✓ Paiement confirmé — téléchargement en cours…";
            window.open(lienRes.lien, "_blank");
          });
        }).catch(function (err) {
          zoneDoc.innerHTML = '<span class="error">Erreur : ' + escapeHtml(err.message) + "</span>";
        });
      return;
    }

    if (info.categorie === "Audio") {
      const zone = document.getElementById("lecteurAudioZone");
      appelServeur("verifierEtEnregistrerPaiement", codeActuel(), transactionId, info.montant, "FedaPay", info.nom, null, "Audio")
        .then(function (res) {
          if (!res.succes) { alert(texteEchecPaiement_(res)); return; }
          audiosDeverrouilles[info.nom] = true;
          if (indexAudioActuel >= 0) jouerAudio(indexAudioActuel);
        }).catch(function (err) { alert("Erreur : " + err.message); });
      return;
    }

    if (info.categorie === "Video") {
      appelServeur("verifierEtEnregistrerPaiement", codeActuel(), transactionId, info.montant, "FedaPay", info.nom, null, "Video")
        .then(function (res) {
          if (!res.succes) { alert(texteEchecPaiement_(res)); return; }
          videosDeverrouillees[info.nom] = true;
          if (indexVideoActuel >= 0) jouerVideoPlateforme(indexVideoActuel);
        }).catch(function (err) { alert("Erreur : " + err.message); });
      return;
    }

    if (info.categorie === "Seance") {
      appelServeur("verifierEtEnregistrerPaiement", codeActuel(), transactionId, info.montant, "FedaPay", info.nom, null, "Seance")
        .then(function (res) {
          if (!res.succes) { alert(texteEchecPaiement_(res)); return; }
          return appelServeur("getLienSeance", codeActuel(), info.nom, transactionId).then(function (lienRes) {
            if (!lienRes.succes) { alert(lienRes.message || "Accès indisponible."); return; }
            window.open(lienRes.lien, "_blank");
            chargerSeances();
          });
        }).catch(function (err) { alert("Erreur : " + err.message); });
      return;
    }

    if (info.categorie === "Publication") {
      appelServeur("verifierEtEnregistrerPaiement", codeActuel(), transactionId, info.montant, "FedaPay", info.nom, null, "Publication")
        .then(function (res) {
          alert(res.succes ? "✓ Paiement confirmé — votre contenu est maintenant publié !" : texteEchecPaiement_(res));
          chargerMesSoumissions();
        }).catch(function (err) { alert("Erreur : " + err.message); });
      return;
    }

    const estOffrande = info.categorie === "Don";
    const zoneMessage = document.getElementById(estOffrande ? "messageOffrande" : "messagePaiement");
    zoneMessage.textContent = "Vérification du paiement…";
    appelServeur("verifierEtEnregistrerPaiement", codeActuel(), transactionId, info.montant, "FedaPay", info.nom, info.periodicite, info.categorie)
      .then(function (res) {
        if (res.succes) {
          zoneMessage.className = "success-text";
          zoneMessage.textContent = estOffrande ? "Offrande confirmée. Vous êtes béni(e)." : "✓ Paiement confirmé pour \"" + info.nom + "\". Merci !";
          try { zoneMessage.scrollIntoView({ behavior: "smooth", block: "center" }); } catch (e) {}
          if (!modeVisiteur) { if (estOffrande) chargerMesOffrandes(); else chargerMesCotisations(); afficherRecuApresPaiement_(transactionId); }
        } else {
          zoneMessage.className = "error";
          zoneMessage.textContent = texteEchecPaiement_(res);
        }
      }).catch(function (err) {
        zoneMessage.innerHTML = '<span class="error">Erreur : ' + escapeHtml(err.message) + "</span>";
      });
  });

  // ==================== OFFRANDES / DONS ====================
  function chargerMesOffrandes() {
    if (modeVisiteur) {
      document.getElementById("listeMesOffrandes").innerHTML = '<p class="empty-state">Créez un compte pour retrouver l\'historique de vos dons et vos reçus.</p>';
      return;
    }
    appelServeur("getMesCotisations", membreCourant.code).then(function (data) {
      afficherMesCotisations(data, true);
    }).catch(function (err) { afficherErreurZone("listeMesOffrandes", err); });
  }

  function lancerOffrande() {
    const montant = Number(document.getElementById("offrandeMontant").value);
    const motif = document.getElementById("offrandeMotif").value.trim();
    const err = document.getElementById("erreurOffrande");
    err.style.display = "none";
    if (!montant || montant <= 0) { err.textContent = "Indiquez un montant valide."; err.style.display = "block"; return; }
    if (!configApp || !configApp.paiementPublicKey) { err.textContent = messagePaiementNonConfigure_(); err.style.display = "block"; return; }
    typeCotisationEnCours = { nom: motif || "Offrande / Don", montant: montant, periodicite: "", categorie: "Don" };
    openKkiapayWidget({ amount: montant, api_key: configApp.paiementPublicKey, sandbox: false, data: codeActuel() });
  }

  // ==================== REÇU DE PAIEMENT (reçu JESUS) ====================
  function remplirRecu_(res) {
    document.getElementById("recuOrgName").textContent = "JESUS";
    document.getElementById("recuLogo").innerHTML = document.getElementById("topbarLogo").innerHTML;
    document.getElementById("recuNomMembre").textContent = res.nomMembre;
    document.getElementById("recuCodeMembre").textContent = res.code;
    document.getElementById("recuType").textContent = res.type;
    document.getElementById("recuMethode").textContent = res.methode;
    document.getElementById("recuDate").textContent = res.date + (res.heure ? " à " + res.heure : "");
    document.getElementById("recuTransactionId").textContent = res.transactionId;
    document.getElementById("recuMontant").textContent = Number(res.montant).toLocaleString("fr-FR") + " FCFA";
  }

  function voirRecu(transactionId) {
    appelServeur("getRecuPaiement", membreCourant.code, transactionId).then(function (res) {
      if (!res.succes) { alert(res.message || "Reçu indisponible."); return; }
      remplirRecu_(res);
      window.print();
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }

  // Juste après un paiement confirmé : on montre NOTRE reçu à l'écran (impression / PDF possibles).
  function afficherRecuApresPaiement_(transactionId) {
    if (!membreCourant) return;
    appelServeur("getRecuPaiement", membreCourant.code, transactionId).then(function (res) {
      if (!res.succes) return;
      const fond = document.createElement("div");
      fond.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9500;display:flex;align-items:center;justify-content:center;padding:14px;";
      const ligne = function (a, b) { return '<div style="display:flex;justify-content:space-between;gap:10px;padding:7px 0;border-bottom:1px solid #e8eef7;"><span style="color:#5b6b82;">' + a + '</span><strong style="text-align:right;">' + escapeHtml(b) + '</strong></div>'; };
      fond.innerHTML = '<div style="background:#fff;color:#1b2430;border-radius:18px;max-width:400px;width:100%;max-height:92vh;overflow:auto;">' +
        '<div style="background:#0b2f68;color:#fff;text-align:center;padding:16px;border-radius:18px 18px 0 0;">' +
        '<div style="width:56px;height:56px;margin:0 auto 6px;border-radius:14px;overflow:hidden;background:#fff;">' + document.getElementById("topbarLogo").innerHTML + '</div>' +
        '<div style="font-size:20px;font-weight:800;">JESUS</div><div style="opacity:.85;font-size:12px;">Réveil Chrétien</div></div>' +
        '<div style="padding:16px;"><div style="font-size:17px;font-weight:800;color:#0b2f68;margin-bottom:6px;">✅ Paiement confirmé — Reçu</div>' +
        ligne("Membre", res.nomMembre) + ligne("Code membre", res.code) + ligne("Objet", res.type) +
        ligne("Date", res.date + (res.heure ? " à " + res.heure : "")) + ligne("Référence", res.transactionId) +
        '<div style="text-align:center;font-size:26px;font-weight:800;color:#0b2f68;margin:14px 0 4px;">' + Number(res.montant).toLocaleString("fr-FR") + ' FCFA</div>' +
        '<div style="text-align:center;font-size:13px;">Merci. Que Dieu vous bénisse.</div>' +
        '<div style="display:flex;gap:8px;margin-top:14px;"><button class="secondary" id="recuImprimer">🖨️ Imprimer / PDF</button><button class="flame" id="recuFermer">Fermer</button></div>' +
        '<div style="text-align:center;font-size:11px;color:#5b6b82;margin-top:10px;">Conservez ce reçu comme preuve de paiement.</div></div></div>';
      document.body.appendChild(fond);
      fond.querySelector("#recuFermer").onclick = function () { fond.remove(); };
      fond.querySelector("#recuImprimer").onclick = function () { remplirRecu_(res); window.print(); };
    }).catch(function () {});
  }

  // ==================== ENREGISTREMENTS (audio, Public/Membres) ====================
  // ==================== AUDIOS (playlists par catégorie + recherche) ====================
  let audiosCache = [];
  const CATEGORIES_AUDIO_DEFAUT = ["Séances live", "Prédications & Prières", "Adorations & Louanges", "Témoignages", "Annonces"];
  let categoriesAudioCache = null;
  let listeAudioActuelle = [];
  let indexAudioActuel = -1;
  const audiosDeverrouilles = {};
  let sousOngletAudiosActuel = "accueil";
  let auteursCache = null;

  // Élément publicitaire générique (image ou courte vidéo), réutilisé dans les 4 sections.
  function construireCartePub_(pub) {
    if (!pub) return "";
    const contenu = pub.Type === "Video"
      ? '' + lecteurAudioDrive_(pub.DriveFileId) + ''
      : '<img src="data:image/jpeg;base64,' + pub.ImageBase64 + '">';
    const interieur = pub.Lien ? '<a href="' + pub.Lien.replace(/"/g, "&quot;") + '" target="_blank">' + contenu + '</a>' : contenu;
    return '<div class="item-desc">Publicité</div>' + interieur;
  }

  function afficherPubsDoubles_(emplacement, idHaut, idBas) {
    appelServeur("getEspacesPub", emplacement).then(function (espaces) {
      espaces = espaces || [];
      const zoneHaut = document.getElementById(idHaut);
      const zoneBas = document.getElementById(idBas);
      if (zoneHaut) zoneHaut.innerHTML = espaces[0] ? construireCartePub_(espaces[0]) : "";
      if (zoneBas) zoneBas.innerHTML = espaces[1] ? construireCartePub_(espaces[1]) : "";
    }).catch(function () { /* pas grave si ça échoue */ });
  }

  // Contenus cochés « à la une » par le Super Admin : ils passent en tête de la rubrique, les autres gardent leur ordre.
  function ordonnerALaUne_(liste) {
    const unes = [], autres = [];
    (liste || []).forEach(function (x) { (x && x.ALaUne === true ? unes : autres).push(x); });
    return unes.concat(autres);
  }
  // Trois « favoris » carrés, côte à côte. Sans favori choisi, on montre les 3 contenus les plus récents.
  function construireFavoris_(liste, icone, clicDe_) {
    const choisis = liste.filter(function (x) { return x && x.ALaUne === true; }).slice(0, 3);
    const trio = choisis.length ? choisis : liste.slice(0, 3);
    const html = '<p class="field-label">' + (choisis.length ? "⭐ Favoris" : "À l\'affiche") + '</p><div class="fav-trio">' + trio.map(function (x, i) {
      return '<div class="fav-carre" onclick="' + clicDe_(i) + '">' + (x.CoverBase64 ? '<img src="data:image/jpeg;base64,' + x.CoverBase64 + '" alt="">' : '<div class="fav-ph">' + icone + '</div>') +
        (choisis.length ? '<span class="fav-etoile">⭐</span>' : "") + '<div class="fav-titre">' + escapeHtml(x.Titre) + '</div></div>';
    }).join("") + '</div>';
    return { html: html, nb: trio.length };
  }
  function caseALaUne_(type, id, coche) {
    const perms = membreCourant ? permissionsDe_(membreCourant) : [];
    if (perms.indexOf("systeme") === -1 && perms.indexOf("contenus") === -1) return "";
    return '<label style="display:flex;align-items:center;gap:4px;font-size:11px;font-weight:700;cursor:pointer;white-space:nowrap;"><input type="checkbox" style="width:auto;margin:0;"' + (coche ? " checked" : "") +
      ' onchange="basculerALaUne_(\'' + type + '\',\'' + id + '\',this)">⭐ Favori (3 max)</label>';
  }
  function basculerALaUne_(type, id, caseHtml) {
    const valeur = caseHtml.checked;
    caseHtml.disabled = true;
    appelServeur("definirALaUne", membreCourant.code, type, id, valeur).then(function () { caseHtml.disabled = false; })
      .catch(function (e) { caseHtml.disabled = false; caseHtml.checked = !valeur; alert("Erreur : " + e.message); });
  }

  function chargerAudios() {
    document.getElementById("rechercheAudios").value = "";
    // Le lecteur audio n'est plus réinitialisé ici : il reste visible et continue de jouer
    // même en changeant de rubrique — voir fermerLecteurAudio_() pour l'arrêt volontaire.
    const fonction = modeVisiteur ? "getEnregistrementsPublic" : "getEnregistrements";
    Promise.all([
      appelServeur(fonction),
      categoriesAudioCache ? Promise.resolve(categoriesAudioCache) : appelServeur("getCategoriesAudio")
    ]).then(function (resultats) {
      audiosCache = ordonnerALaUne_(resultats[0] || []);
      categoriesAudioCache = resultats[1] || [];
      afficherSousAudios(sousOngletAudiosActuel || "accueil");
    }).catch(function (err) { afficherErreurZone("audiosAlaUne", err); });
  }

  function afficherSousAudios(nom) {
    sousOngletAudiosActuel = nom;
    document.querySelectorAll("#subNavAudios .sub-nav-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.sub === nom); });
    document.querySelectorAll("#section-audios .sub-section").forEach(function (s) { s.classList.toggle("active", s.id === "audiosSous-" + nom); });
    if (nom === "accueil") afficherAccueilAudios();
    else if (nom === "emissions") afficherCategoriesAudio();
    else if (nom === "actualites") chargerActualitesAudios();
  }

  function afficherAccueilAudios() {
    afficherPubsDoubles_("audios", "pubAudiosHaut", "pubAudiosBas");
    const zone = document.getElementById("audiosAlaUne");
    if (!audiosCache.length) { zone.innerHTML = '<p class="empty-state">Aucun audio disponible pour le moment.</p>'; return; }
    const fav = construireFavoris_(audiosCache, "🎧", function (i) { return "jouerAudioDepuisAccueil_(" + i + ")"; });
    const restants = audiosCache.slice(fav.nb, fav.nb + 8);
    let html = fav.html;
    if (restants.length) {
      html += '<p class="field-label">Récemment ajoutés</p><div class="grille-alaune">' + restants.map(function (a, i) {
        const cover = a.CoverBase64 ? '<img src="data:image/jpeg;base64,' + a.CoverBase64 + '">' : '<div style="height:90px;background:#eef3f9;display:flex;align-items:center;justify-content:center;">🎧</div>';
        return '<div class="carte-alaune" onclick="jouerAudioDepuisAccueil_(' + (i + fav.nb) + ')">' + cover + '<div class="carte-alaune-body"><div class="carte-alaune-titre">' + escapeHtml(a.Titre) + '</div></div></div>';
      }).join("") + '</div>';
    }
    zone.innerHTML = html;
  }

  function jouerAudioDepuisAccueil_(index) {
    listeAudioActuelle = audiosCache;
    jouerAudio(index);
  }

  let actualitesAudiosCache = null;

  function chargerActualitesAudios() {
    appelServeur("getActualites", "audios").then(function (liste) {
      actualitesAudiosCache = liste || [];
      afficherActualitesAudios(actualitesAudiosCache);
    }).catch(function (err) { afficherErreurZone("listeActualitesAudios", err); });
  }

  function afficherActualitesAudios(liste) {
    const zone = document.getElementById("listeActualitesAudios");
    if (!liste.length) { zone.innerHTML = '<p class="empty-state">Aucune actualité pour le moment.</p>'; return; }
    zone.innerHTML = liste.map(function (a) { return construireCarteActualite_(a, "ouvrirActualiteAudios_"); }).join("");
  }

  function ouvrirActualiteAudios_(id) {
    const a = actualitesAudiosCache.find(function (x) { return x.ID === id; });
    if (a) afficherDetailActualiteModal_(a);
  }

  function afficherCategoriesAudio() {
    document.getElementById("listeAudiosCategorie").style.display = "none";
    const zone = document.getElementById("listeCategoriesAudio");
    zone.style.display = "block";
    if (!audiosCache.length) { zone.innerHTML = '<p class="empty-state">Aucun audio disponible pour le moment.</p>'; return; }
    zone.innerHTML = '<div class="grille-playlists">' + categoriesAudioCache.map(function (cat) {
      const nom = typeof cat === "string" ? cat : cat.Nom;
      const cover = (typeof cat !== "string" && cat.CoverBase64)
        ? '<img src="data:image/jpeg;base64,' + cat.CoverBase64 + '" style="width:100%;height:64px;object-fit:cover;border-radius:10px;margin-bottom:6px;">'
        : '<span class="ic">' + (iconePourNom_(nom) || "🎧") + '</span>';
      const nb = audiosCache.filter(function (a) { return a.Categorie === nom; }).length;
      return '<div class="playlist-tuile" onclick="ouvrirCategorieAudio(\'' + jsq_(nom) + '\')">' + cover + '<span class="lib">' + escapeHtml(nom) + '</span><div class="item-desc" style="margin-top:4px;">' + nb + ' audio(s)</div></div>';
    }).join("") + '</div>';
  }

  function ouvrirCategorieAudio(categorie) {
    document.getElementById("listeCategoriesAudio").style.display = "none";
    const zone = document.getElementById("listeAudiosCategorie");
    zone.style.display = "block";
    afficherListeAudios(audiosCache.filter(function (a) { return a.Categorie === categorie; }), categorie);
  }

  function afficherListeAudios(audios, titreZone) {
    listeAudioActuelle = audios;
    const zone = document.getElementById("listeAudiosCategorie");
    let entete = '<button class="secondary small" style="margin-bottom:10px;" onclick="afficherCategoriesAudio()">← Toutes les catégories</button>';
    if (titreZone) entete += '<p class="field-label">' + escapeHtml(titreZone) + '</p>';
    if (!audios.length) { zone.innerHTML = entete + '<p class="empty-state">Aucun audio ici pour le moment.</p>'; return; }
    const cartes = audios.map(function (a, i) {
      const payant = a.Type === "Payant";
      const cover = a.CoverBase64 ? '<img src="data:image/jpeg;base64,' + a.CoverBase64 + '" alt="" loading="lazy">' : '<div class="mkt-ph">🎧</div>';
      const boutonLyrics = (a.Paroles && a.Paroles.trim()) || a.ParolesFichierLien
        ? '<button class="secondary small mkt-mini" onclick="event.stopPropagation();afficherParolesAudioClick_(' + i + ')">📜 Lyrics</button>' : '';
      return '<div class="mkt-carte" onclick="jouerAudio(' + i + ')">' +
        '<div class="mkt-img">' + cover + (payant ? '<span class="mkt-badge">⭐ Premium</span>' : '') + (a.Visibilite === "Membres" ? '<span class="mkt-badge mem">Membres</span>' : '') + '</div>' +
        '<div class="mkt-corps"><div class="mkt-titre">' + escapeHtml(a.Titre) + '</div>' +
        (a.Auteur ? '<div class="mkt-sous">Par ' + lienAuteur_(a.Auteur) + '</div>' : '') +
        '<div class="mkt-prix' + (payant ? '' : ' gratuit') + '">' + (payant ? Number(a.Prix).toLocaleString("fr-FR") + " F" : "Gratuit") + '</div>' +
        statsCompactes_("audio", a.ID, a.Titre) +
        '<div class="mkt-sous">' + escapeHtml(a.DateAjout) + '</div>' + boutonLyrics + '</div></div>';
    });
    zone.innerHTML = entete + '<div class="mkt-grille">' + cartes.join("") + '</div>';
  }

  function afficherParolesAudioClick_(index) {
    const a = listeAudioActuelle[index];
    if (a) afficherParolesModal_(a.Titre, a.Paroles, a.ParolesFichierLien, a.ParolesFichierNom);
  }

  function filtrerAudios() {
    const requete = document.getElementById("rechercheAudios").value.trim().toLowerCase();
    if (!requete) { afficherCategoriesAudio(); return; }
    document.getElementById("listeCategoriesAudio").style.display = "none";
    document.getElementById("listeAudiosCategorie").style.display = "block";
    const resultats = audiosCache.filter(function (a) {
      return (a.Titre || "").toLowerCase().indexOf(requete) !== -1 ||
        (a.Description || "").toLowerCase().indexOf(requete) !== -1 ||
        (a.Auteur || "").toLowerCase().indexOf(requete) !== -1;
    });
    afficherListeAudios(resultats, "Résultats pour \"" + document.getElementById("rechercheAudios").value.trim() + "\"");
  }

  // --- Lecteur audio : précédent / suivant / répétition 1 / répétition tout / achat des payants ---
  let modeRepetitionAudio = "aucun"; // "aucun" | "un" | "tout"

  // Préchargement anticipé : pendant qu'un audio joue, on récupère déjà en arrière-plan
  // celui qui viendra juste après — pour qu'au moment où l'un se termine, le suivant soit
  // déjà prêt à jouer instantanément, au lieu d'attendre le chargement à ce moment-là.
  let audioPrecharge_ = {};

  function precalculerProchainIndexAudio_() {
    if (indexAudioActuel < listeAudioActuelle.length - 1) return indexAudioActuel + 1;
    if (modeRepetitionAudio === "tout" && listeAudioActuelle.length) return 0;
    return -1;
  }

  function precharger_AudioSuivant_() {
    const indexSuivant = precalculerProchainIndexAudio_();
    if (indexSuivant < 0) return;
    const audioSuivant = listeAudioActuelle[indexSuivant];
    // Le contenu payant reste exclu du préchargement : son accès dépend d'une vérification
    // de paiement au moment voulu, pas avant.
    if (!audioSuivant || audioPrecharge_[audioSuivant.ID] || (audioSuivant.Type === "Payant" && !audiosDeverrouilles[audioSuivant.ID])) return;
    appelServeur("getLienAudio", codeActuel(), audioSuivant.ID, null).then(function (res) {
      if (res.succes) audioPrecharge_[audioSuivant.ID] = res;
    }).catch(function () { /* tant pis, le chargement normal prendra le relais le moment venu */ });
  }

  function jouerAudio(index) {
    indexAudioActuel = index;
    const audio = listeAudioActuelle[index];
    if (!audio) return;
    const zone = document.getElementById("lecteurAudioZone");
    zone.style.display = "block";
    const btnFermer = '<button class="lecteur-fermer" onclick="fermerLecteurAudio_()" title="Fermer le lecteur">✕</button>';

    const cover = audio.CoverBase64 ? '<img class="lecteur-cover" src="data:image/jpeg;base64,' + audio.CoverBase64 + '">' : '<div class="lecteur-cover" style="display:flex;align-items:center;justify-content:center;">🎧</div>';
    const entete = '<div class="lecteur-entete">' + cover +
      '<div><div class="item-nom">' + escapeHtml(audio.Titre) + '</div>' +
      (audio.Auteur ? '<div class="item-desc">Par ' + lienAuteur_(audio.Auteur) + '</div>' : '') + blocNotes_("audio", audio.ID) + '</div></div>';

    if (audio.Type === "Payant" && !audiosDeverrouilles[audio.ID]) {
      zone.innerHTML = btnFermer + entete + '<div style="padding:0 14px 14px;">' +
        '<p class="item-desc">Contenu payant — ' + Number(audio.Prix).toLocaleString("fr-FR") + ' FCFA</p>' +
        '<button class="flame" onclick="acheterAudio(\'' + audio.ID + '\',' + Number(audio.Prix) + ')">💳 Acheter et écouter</button> ' +
        '<button class="secondary" onclick="PANIER.ajouter(\'audio\',\'' + audio.ID + '\',\'' + jsq_(audio.Titre) + '\',' + Number(audio.Prix) + ')">🛒 Ajouter au panier</button>' +
        '</div>';
      return;
    }

    // Déjà préchargé pendant la piste précédente : lecture instantanée, sans nouvel appel.
    if (audioPrecharge_[audio.ID]) {
      const res = audioPrecharge_[audio.ID];
      delete audioPrecharge_[audio.ID];
      audiosDeverrouilles[audio.ID] = true;
      compterVue_("audio", audio.ID);
      afficherLecteurActif(entete, res);
      precharger_AudioSuivant_();
      return;
    }

    zone.innerHTML = btnFermer + entete + '<div class="loading" style="padding:0 14px 14px;">Chargement…</div>';
    appelServeur("getLienAudio", codeActuel(), audio.ID, null).then(function (res) {
      if (!res.succes) { zone.innerHTML = btnFermer + entete + '<p class="error" style="padding:0 14px 14px;">' + escapeHtml(res.message) + '</p>'; return; }
      audiosDeverrouilles[audio.ID] = true;
      compterVue_("audio", audio.ID);
      afficherLecteurActif(entete, res);
      precharger_AudioSuivant_();
    }).catch(function (err) { zone.innerHTML = btnFermer + entete + '<p class="error" style="padding:0 14px 14px;">Erreur : ' + escapeHtml(err.message) + '</p>'; });
  }

  // Curseur de volume visible (le bouton natif ne fait que couper le son sur téléphone). Le réglage est mémorisé.
  // Sur iPhone, le navigateur ne laisse pas une page régler le volume : on y utilise les boutons du téléphone.
  function initialiserVolumeAudio_(element) {
    const curseur = document.getElementById("audioVolume");
    const bouton = document.getElementById("audioVolumeBtn");
    if (!curseur || !bouton) return;
    let v = 1;
    try { const m = localStorage.getItem("jesus_volume_audio"); if (m !== null && isFinite(Number(m))) v = Math.min(1, Math.max(0, Number(m))); } catch (e) {}
    element.volume = v;
    const majIcone = function () {
      const niveau = element.muted ? 0 : element.volume;
      bouton.textContent = niveau === 0 ? "🔇" : (niveau < 0.5 ? "🔉" : "🔊");
      curseur.value = String(Math.round(niveau * 100));
    };
    curseur.oninput = function () {
      const x = Number(curseur.value) / 100;
      element.muted = x === 0;
      element.volume = x;
      try { localStorage.setItem("jesus_volume_audio", String(x)); } catch (e) {}
      majIcone();
    };
    bouton.onclick = function () {
      if (element.muted || element.volume === 0) { element.muted = false; if (element.volume === 0) element.volume = 0.6; }
      else element.muted = true;
      majIcone();
    };
    element.addEventListener("volumechange", majIcone);
    majIcone();
  }

  function afficherLecteurActif(entete, res) {
    const zone = document.getElementById("lecteurAudioZone");
    // Lecteur audio natif du navigateur — le son est transmis directement en base64 (même
    // procédé que pour vos images), donc aucune marque Google, aucune autorisation demandée,
    // et une vraie lecture automatique au clic.
    const srcAudio = res.audioBase64
      ? "data:" + (res.audioMimeType || "audio/mpeg") + ";base64," + res.audioBase64
      : res.lien; // repli si le fichier est trop volumineux pour ce canal (voir erreur ci-dessous)
    zone.innerHTML = '<button class="lecteur-fermer" onclick="fermerLecteurAudio_()" title="Fermer le lecteur">✕</button>' + entete +
      '<audio id="audioElementActuel" style="width:calc(100% - 28px);margin:8px 14px 0;display:block;" src="' + srcAudio + '" controls autoplay></audio>' +
      '<div style="display:flex;align-items:center;gap:10px;padding:6px 14px 0;">' +
      '<button id="audioVolumeBtn" class="secondary small" style="width:auto;padding:6px 10px;flex-shrink:0;" title="Couper / rétablir le son">🔊</button>' +
      '<input id="audioVolume" type="range" min="0" max="100" step="1" value="100" style="flex:1;" title="Volume" aria-label="Volume">' +
      '</div>' +
      '<div id="audioErreurZone"></div>' +
      '<div class="lecteur-controles">' +
      '<button onclick="audioPrecedent()">⏮️</button>' +
      '<button id="btnRepeterUnAudio" class="' + (modeRepetitionAudio === "un" ? "actif" : "") + '" onclick="definirRepetitionAudio(\'un\')" title="Répéter cette piste">🔂 1</button>' +
      '<button id="btnRepeterToutAudio" class="' + (modeRepetitionAudio === "tout" ? "actif" : "") + '" onclick="definirRepetitionAudio(\'tout\')" title="Revenir au premier audio après le dernier">🔁 Tout</button>' +
      '<button onclick="audioSuivant()">⏭️</button>' +
      '</div>' +
      (window.XTR ? XTR.barreAudio(listeAudioActuelle[indexAudioActuel]) : "") +
      '<div style="padding:8px 14px 14px;"><button class="secondary small" id="btnTelechargerAudio" style="width:100%;" onclick="telechargerAudioPage_()">⬇️ Télécharger</button></div>';
    audioATelecharger_ = { lien: res.lien || "", base64: res.audioBase64 || "", mime: res.audioMimeType || "", titre: ((listeAudioActuelle[indexAudioActuel] || {}).Titre) || "audio" };

    const element = document.getElementById("audioElementActuel");
    initialiserVolumeAudio_(element);
    if (window.XTR && XTR.surLecteurAudio) { try { XTR.surLecteurAudio(element, listeAudioActuelle[indexAudioActuel]); } catch (e) { /* sans effet sur la lecture */ } }
    // Lance explicitement la lecture (en plus de l'attribut autoplay) : c'est ce qui garantit
    // le démarrage automatique sur le plus grand nombre de navigateurs, le clic de
    // l'utilisateur restant dans la même chaîne d'évènement.
    element.play().catch(function () { /* certains navigateurs bloquent, les contrôles restent utilisables manuellement */ });
    element.addEventListener("ended", gererFinAudio_);
    // Filets de sécurité, dans l'ordre : lecture directe depuis le lien (rapide) → si elle échoue, on demande le
    // fichier lui-même au serveur (plus lent mais fiable) → si cela échoue aussi, aperçu Google Drive.
    const apercuSecours = function () {
      document.getElementById("audioErreurZone").innerHTML =
        '<p class="item-desc" style="padding:0 14px 8px;">Lecteur de secours (👉 cliquez sur ▶ ci-dessous) :</p>' +
        '<iframe class="audio-frame" style="margin:0 14px;width:calc(100% - 28px);" src="' + res.apercu + '" allow="autoplay"></iframe>';
      element.style.display = "none";
    };
    let fichierDemande = !!res.audioBase64;
    element.addEventListener("error", function surErreur() {
      if (fichierDemande || !res.audioId) { element.removeEventListener("error", surErreur); apercuSecours(); return; }
      fichierDemande = true;
      document.getElementById("audioErreurZone").innerHTML = '<p class="item-desc" style="padding:0 14px 8px;">Chargement du fichier…</p>';
      appelServeur("getLienAudio", codeActuel(), res.audioId, null, true).then(function (r2) {
        if (r2.succes && r2.audioBase64) {
          document.getElementById("audioErreurZone").innerHTML = "";
          element.src = "data:" + (r2.audioMimeType || "audio/mpeg") + ";base64," + r2.audioBase64;
          element.play().catch(function () {});
        } else apercuSecours();
      }).catch(apercuSecours);
    });
  }

  function gererFinAudio_() {
    if (modeRepetitionAudio === "un") {
      const el = document.getElementById("audioElementActuel");
      if (el) { el.currentTime = 0; el.play(); }
      return;
    }
    if (indexAudioActuel < listeAudioActuelle.length - 1) {
      jouerAudio(indexAudioActuel + 1);
    } else if (modeRepetitionAudio === "tout" && listeAudioActuelle.length) {
      jouerAudio(0);
    }
    // Sinon : fin de liste sans répétition, la lecture s'arrête simplement.
  }

  // Arrêt volontaire : coupe le lecteur et le masque, quelle que soit la rubrique affichée.
  function fermerLecteurAudio_() {
    const zone = document.getElementById("lecteurAudioZone");
    zone.innerHTML = "";
    zone.style.display = "none";
    indexAudioActuel = -1;
  }

  function audioPrecedent() {
    if (indexAudioActuel > 0) jouerAudio(indexAudioActuel - 1);
  }

  function audioSuivant() {
    if (indexAudioActuel < listeAudioActuelle.length - 1) jouerAudio(indexAudioActuel + 1);
    else if (modeRepetitionAudio === "tout") jouerAudio(0);
  }

  // Un seul mode actif à la fois : cliquer sur un mode déjà actif le désactive.
  function definirRepetitionAudio(mode) {
    modeRepetitionAudio = (modeRepetitionAudio === mode) ? "aucun" : mode;
    const btnUn = document.getElementById("btnRepeterUnAudio");
    const btnTout = document.getElementById("btnRepeterToutAudio");
    if (btnUn) btnUn.classList.toggle("actif", modeRepetitionAudio === "un");
    if (btnTout) btnTout.classList.toggle("actif", modeRepetitionAudio === "tout");
    precharger_AudioSuivant_(); // le "suivant" a pu changer (ex : Répéter Tout activé près de la fin)
  }

  // ==================== NOTES (étoiles) ET NOMBRE DE VUES ====================
  let statsContenus_ = { stats: {}, mes: {}, charge: 0, enCours: false };
  const vuesComptees_ = {};
  function cleNote_() {
    if (membreCourant) return membreCourant.code;
    let id = "";
    try { id = localStorage.getItem("jesus_appareil") || ""; } catch (e) {}
    if (!id) {
      id = "V-" + Math.random().toString(36).slice(2, 12) + Date.now().toString(36);
      id = id.replace(/[^A-Za-z0-9-]/g, "");
      try { localStorage.setItem("jesus_appareil", id); } catch (e) { statsContenus_.idMemoire = statsContenus_.idMemoire || id; id = statsContenus_.idMemoire; }
    }
    return id;
  }
  function chargerStatsContenus_() {
    if (statsContenus_.enCours) return;
    statsContenus_.enCours = true;
    Promise.all([appelServeur("getStatsContenus"), appelServeur("getMesNotes", cleNote_())]).then(function (rs) {
      statsContenus_.stats = rs[0].stats || {}; statsContenus_.mes = rs[1].mes || {}; statsContenus_.charge = Date.now();
      statsContenus_.enCours = false; majBlocsNotes_();
    }).catch(function () { statsContenus_.enCours = false; statsContenus_.charge = Date.now() - 60000; });   // en cas d'échec : réessai dans ~30 s
  }
  function htmlNotes_(type, id) {
    if (Date.now() - statsContenus_.charge > 90000 && !statsContenus_.enCours) setTimeout(chargerStatsContenus_, 0);
    const s = statsContenus_.stats[type + ":" + id] || { v: 0, n: 0, t: 0 };
    const moyenne = s.n ? s.t / s.n : 0;
    const ma = statsContenus_.mes[type + ":" + id] || 0;
    const rempli = ma || Math.round(moyenne);
    let etoiles = "";
    for (let i = 1; i <= 5; i++) {
      etoiles += '<span class="etoile' + (i <= rempli ? ' on' : '') + '" role="button" aria-label="' + i + ' étoile(s)" onclick="event.stopPropagation();noterContenu_(\'' + type + "','" + id + "'," + i + ')">★</span>';
    }
    const texte = s.n ? moyenne.toFixed(1).replace(".", ",") + "/5 (" + s.n + " avis)" : "Pas encore noté";
    return '<span class="etoiles" title="Touchez une étoile pour noter">' + etoiles + "</span>" +
      '<span class="notes-texte">' + texte + (ma ? " · votre note : " + ma : "") + "</span>" +
      '<span class="notes-vues">👁 ' + Number(s.v || 0).toLocaleString("fr-FR") + " vue" + (s.v > 1 ? "s" : "") + "</span>";
  }
  function blocNotes_(type, id) {
    return '<div class="bloc-notes" data-t="' + type + '" data-i="' + id + '" onclick="event.stopPropagation()">' + htmlNotes_(type, id) + "</div>";
  }
  // Version compacte pour les cartes « marketplace » : ★ moyenne (avis) · 👁 vues. Un toucher ouvre la notation.
  function htmlStatsCompactes_(type, id) {
    const s = statsContenus_.stats[type + ":" + id] || { v: 0, n: 0, t: 0 };
    const note = s.n ? '<span><span class="st">★</span> ' + (s.t / s.n).toFixed(1).replace(".", ",") + " (" + s.n + ")</span>" : '<span><span class="st">☆</span> Noter</span>';
    return note + "<span>👁 " + Number(s.v || 0).toLocaleString("fr-FR") + "</span>";
  }
  function statsCompactes_(type, id, titre) {
    if (Date.now() - statsContenus_.charge > 90000 && !statsContenus_.enCours) setTimeout(chargerStatsContenus_, 0);
    return '<div class="mkt-stats bloc-stats" data-t="' + type + '" data-i="' + id + '" title="Touchez pour noter" onclick="event.stopPropagation();noterDepuisCarte_(\'' + type + "','" + id + "','" + jsq_(titre || "") + '\')">' + htmlStatsCompactes_(type, id) + "</div>" + (window.XTR && (type === "audio" || type === "video" || type === "document") ? XTR.coeurHtml(type, id, titre) : "");
  }
  function noterDepuisCarte_(type, id, titre) {
    const fond = document.createElement("div");
    fond.id = "notationCarte";
    fond.innerHTML = '<div class="boite"><div class="item-nom" style="margin-bottom:6px;">' + escapeHtml(titre || "Noter") + '</div><p class="item-desc" style="margin:0 0 6px;">Touchez une étoile pour donner votre note.</p>' +
      blocNotes_(type, id) + '<button class="secondary small full-mt" style="width:100%;">Fermer</button></div>';
    fond.addEventListener("click", function (e) { if (e.target === fond || e.target.tagName === "BUTTON") fond.remove(); });
    document.body.appendChild(fond);
  }
  function majBlocsNotes_() {
    document.querySelectorAll(".bloc-stats").forEach(function (el) { el.innerHTML = htmlStatsCompactes_(el.getAttribute("data-t"), el.getAttribute("data-i")); });
    document.querySelectorAll(".bloc-notes").forEach(function (el) { el.innerHTML = htmlNotes_(el.getAttribute("data-t"), el.getAttribute("data-i")); });
  }
  function noterContenu_(type, id, note) {
    appelServeur("noterContenu", type, id, cleNote_(), note).then(function (r) {
      if (!r.succes) { alert(r.message || "Note non enregistrée."); return; }
      const s = statsContenus_.stats[type + ":" + id] || { v: 0, n: 0, t: 0 };
      s.n += r.dn || 0; s.t += r.dt || 0;
      statsContenus_.stats[type + ":" + id] = s; statsContenus_.mes[type + ":" + id] = r.ma;
      majBlocsNotes_();
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }
  // Une vue par contenu et par période de 30 minutes sur cet appareil (relecture immédiate = pas de double comptage).
  function compterVue_(type, id) {
    const cle = type + ":" + id, maintenant = Date.now();
    if (vuesComptees_[cle] && maintenant - vuesComptees_[cle] < 1800000) return;
    vuesComptees_[cle] = maintenant;
    appelServeur("compterVue", type, id).then(function (r) {
      const s = statsContenus_.stats[cle] || { v: 0, n: 0, t: 0 };
      s.v += 1; statsContenus_.stats[cle] = s; majBlocsNotes_();
    }).catch(function () { delete vuesComptees_[cle]; });
  }

  // Téléchargement d'un audio SANS quitter la page : le fichier est reçu en direct, le bouton affiche le pourcentage,
  // puis l'enregistrement se déclenche tout seul.
  let audioATelecharger_ = null, telechargementAudioEnCours_ = false;
  function extensionAudio_(mime) {
    const m = String(mime || "").toLowerCase();
    if (m.indexOf("mp4") > -1 || m.indexOf("m4a") > -1) return "m4a";
    if (m.indexOf("wav") > -1) return "wav";
    if (m.indexOf("ogg") > -1) return "ogg";
    if (m.indexOf("aac") > -1) return "aac";
    if (m.indexOf("webm") > -1) return "webm";
    return "mp3";
  }
  function enregistrerBlobAudio_(blob, titre) {
    const nom = String(titre || "audio").replace(/[\\/:*?"<>|\r\n]+/g, " ").trim().slice(0, 90) + "." + extensionAudio_(blob.type);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = nom; a.style.display = "none";
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 60000);
  }
  function telechargerAudioPage_() {
    const src = audioATelecharger_, btn = document.getElementById("btnTelechargerAudio");
    if (!src || !btn || telechargementAudioEnCours_) return;
    const libelle = btn.innerHTML;
    const progres = function (texte, pct) {
      btn.textContent = texte;
      btn.style.background = pct == null ? "" : "linear-gradient(to right, #bcd3f7 " + pct + "%, #eef3fb " + pct + "%)";
    };
    const fin = function () { telechargementAudioEnCours_ = false; btn.disabled = false; btn.innerHTML = libelle; btn.style.background = ""; };
    telechargementAudioEnCours_ = true; btn.disabled = true;
    if (src.base64) {   // petit fichier déjà reçu avec le lecteur : rien à attendre
      try {
        const bin = atob(src.base64), octets = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) octets[i] = bin.charCodeAt(i);
        enregistrerBlobAudio_(new Blob([octets], { type: src.mime || "audio/mpeg" }), src.titre);
        progres("✓ Téléchargé (100 %)", 100); setTimeout(fin, 2500);
      } catch (e) { fin(); alert("Téléchargement impossible : " + e.message); }
      return;
    }
    if (!src.lien) { fin(); alert("Téléchargement indisponible pour cet audio."); return; }
    if (src.lien.indexOf("/media/") === -1) { fin(); window.open(src.lien, "_blank"); return; }   // fichier hébergé ailleurs : ancien comportement
    progres("Téléchargement… 0 %", 0);
    fetch(src.lien).then(function (rep) {
      if (!rep.ok) throw new Error("Lien expiré ou invalide (code " + rep.status + "). Relancez la lecture puis réessayez.");
      const total = Number(rep.headers.get("Content-Length")) || 0;
      const type = rep.headers.get("Content-Type") || "audio/mpeg";
      if (!rep.body || !rep.body.getReader) return rep.blob();
      const lecteur = rep.body.getReader(), morceaux = [];
      let recu = 0;
      const lire = function () {
        return lecteur.read().then(function (r) {
          if (r.done) return new Blob(morceaux, { type: type });
          morceaux.push(r.value); recu += r.value.length;
          if (total) { const p = Math.min(100, Math.floor(recu * 100 / total)); progres("Téléchargement… " + p + " %", p); }
          else progres("Téléchargement… " + (recu / 1048576).toFixed(1).replace(".", ",") + " Mo", null);
          return lire();
        });
      };
      return lire();
    }).then(function (blob) {
      enregistrerBlobAudio_(blob, src.titre);
      progres("✓ Téléchargé (100 %)", 100); setTimeout(fin, 2500);
    }).catch(function (err) { fin(); alert("Téléchargement impossible : " + err.message); });
  }

  function acheterAudio(audioId, prix) {
    if (!configApp || !configApp.paiementPublicKey) { alert(messagePaiementNonConfigure_()); return; }
    typeCotisationEnCours = { nom: audioId, montant: prix, periodicite: "", categorie: "Audio" };
    openKkiapayWidget({ amount: prix, api_key: configApp.paiementPublicKey, sandbox: false, data: codeActuel() });
  }

  // ==================== VIDÉOS DE LA PLATEFORME (fusionnées dans les mêmes catégories que YouTube) ====================
  let videosPlateformeCache = [];
  let playlistsCache = [];
  let sousOngletVideosActuel = "accueil";
  const videosDeverrouillees = {};
  let indexVideoUnifieActuel = -1;
  let modeRepetitionVideo = "aucun"; // "aucun" | "un" | "tout"
  let ytPlayerActuel = null;

  // --- Chargement paresseux de l'API YouTube (nécessaire pour détecter la fin de lecture) ---
  let ytApiPret = false;
  let ytApiCallbacks = [];
  function onYouTubeIframeAPIReady() {
    ytApiPret = true;
    ytApiCallbacks.forEach(function (cb) { cb(); });
    ytApiCallbacks = [];
  }
  function chargerApiYoutube_(callback) {
    if (ytApiPret && window.YT && window.YT.Player) { callback(); }
    else { ytApiCallbacks.push(callback); }
  }

  function detruireLecteurYoutube_() {
    if (ytPlayerActuel) {
      try { ytPlayerActuel.destroy(); } catch (e) { /* déjà détruit, pas grave */ }
      ytPlayerActuel = null;
    }
  }

  // Affiche/masque le jeu Verse Blitz intégré directement dans la page (dans un cadre) —
  // le seul des 4 jeux à être jouable au web, les 3 autres étant des applications mobiles
  // natives, techniquement impossibles à faire tourner à l'intérieur d'un site.
  function toggleJeuIntegre_() {
    const zone = document.getElementById("jeuIntegreZone");
    zone.style.display = zone.style.display === "none" ? "block" : "none";
    if (zone.style.display === "block") zone.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Arrêt volontaire : coupe le lecteur (YouTube ou plateforme) et le masque, quelle que
  // soit la rubrique affichée.
  function fermerLecteurVideo_() {
    detruireLecteurYoutube_();
    const zone = document.getElementById("lecteurVideoZone");
    zone.innerHTML = "";
    zone.style.display = "none";
    indexVideoUnifieActuel = -1;
  }

  function construireControlesVideo_(masquerRepeterUn) {
    const boutonRepeterUn = masquerRepeterUn ? '' :
      '<button id="btnRepeterUnVideo" class="' + (modeRepetitionVideo === "un" ? "actif" : "") + '" onclick="definirRepetitionVideo(\'un\')" title="Répéter cette vidéo">🔂 1</button>';
    return '<div class="lecteur-controles">' +
      '<button onclick="videoUnifieePrecedente()">⏮️</button>' +
      boutonRepeterUn +
      '<button id="btnRepeterToutVideo" class="' + (modeRepetitionVideo === "tout" ? "actif" : "") + '" onclick="definirRepetitionVideo(\'tout\')" title="Répéter toute la liste">🔁 Tout</button>' +
      '<button onclick="videoUnifieeSuivante()">⏭️</button>' +
      '</div>';
  }

  // Joue l'élément à l'index donné de la liste UNIFIÉE (videosPlaylistCourante) — qu'il
  // s'agisse d'une vidéo YouTube ou d'une vidéo de la plateforme. Un seul et même lecteur
  // (lecteurVideoZone) est utilisé pour les deux, ce qui permet une vraie navigation
  // continue (précédent/suivant/répétition) sur toute la liste, mélangée.
  function lireVideoUnifiee(index) {
    const v = videosPlaylistCourante[index];
    if (!v) return;
    indexVideoUnifieActuel = index;
    detruireLecteurYoutube_();
    if (v.source === "youtube") afficherLecteurYoutube_(v);
    else afficherLecteurVideoPlateforme_(v);
  }

  function afficherLecteurYoutube_(v) {
    const zone = document.getElementById("lecteurVideoZone");
    zone.style.display = "block";
    // On construit nous-mêmes le même lecteur simple qu'avant (youtube-nocookie, sans
    // habillage supplémentaire) — enablejsapi=1 permet juste de détecter la fin de lecture
    // en coulisses, sans changer l'apparence ni ajouter les suggestions "plein écran" du
    // lecteur officiel généré automatiquement par l'API.
    zone.innerHTML = '<button class="lecteur-fermer" onclick="fermerLecteurVideo_()" title="Fermer le lecteur">✕</button>' +
      '<iframe id="ytPlayerHost" class="video-player-frame" src="https://www.youtube-nocookie.com/embed/' + v.videoId + '?autoplay=1&rel=0&enablejsapi=1" title="' + escapeHtml(v.titre).replace(/"/g, "&quot;") + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>' + construireControlesVideo_();
    chargerApiYoutube_(function () {
      // La zone peut avoir changé entretemps (utilisateur ayant cliqué ailleurs) : on
      // vérifie que le conteneur existe toujours avant de s'y attacher.
      if (!document.getElementById("ytPlayerHost")) return;
      // On s'attache à l'iframe déjà affichée (au lieu de laisser l'API en générer une
      // nouvelle) : le lecteur garde exactement son apparence simple habituelle, seule la
      // détection de fin de lecture est ajoutée en coulisses.
      ytPlayerActuel = new YT.Player("ytPlayerHost", {
        events: {
          onStateChange: function (e) { if (e.data === YT.PlayerState.ENDED) gererFinVideo_(); }
        }
      });
    });
  }

  function afficherLecteurVideoPlateforme_(v) {
    const zone = document.getElementById("lecteurVideoZone");
    zone.style.display = "block";
    const entete = '<button class="lecteur-fermer" onclick="fermerLecteurVideo_()" title="Fermer le lecteur">✕</button><div class="lecteur-entete"><div><div class="item-nom">' + escapeHtml(v.titre) + '</div>' +
      (v.auteur ? '<div class="item-desc">Par ' + lienAuteur_(v.auteur) + '</div>' : '') + blocNotes_("video", v.id) + '</div></div>';

    if (v.type === "Payant" && !videosDeverrouillees[v.id]) {
      zone.innerHTML = entete + '<div style="padding:0 14px 14px;">' +
        '<p class="item-desc">Contenu payant — ' + Number(v.prix).toLocaleString("fr-FR") + ' FCFA</p>' +
        '<button class="flame" onclick="acheterVideo(\'' + v.id + '\',' + Number(v.prix) + ')">💳 Acheter et regarder</button> ' +
        '<button class="secondary" onclick="PANIER.ajouter(\'video\',\'' + v.id + '\',\'' + jsq_(v.titre) + '\',' + Number(v.prix) + ')">🛒 Ajouter au panier</button>' +
        '</div>';
      return;
    }

    zone.innerHTML = entete + '<div class="loading" style="padding:0 14px 14px;">Chargement…</div>';
    appelServeur("getLienVideo", codeActuel(), v.id, null).then(function (res) {
      if (!res.succes) { zone.innerHTML = entete + '<p class="error" style="padding:0 14px 14px;">' + escapeHtml(res.message) + '</p>'; return; }
      videosDeverrouillees[v.id] = true;
      compterVue_("video", v.id);
      const boutonTelecharger = (v.type === "Payant" ? '<div style="padding:0 14px 14px;"><a class="secondary small" style="display:block;text-align:center;text-decoration:none;" href="' + (res.lienTelechargement || res.lien) + '" target="_blank">⬇️ Télécharger</a></div>' : '');
      if (res.r2) {
        // Fichier hébergé sur Cloudflare R2 : lecteur natif (démarrage rapide, avance/retour, vidéo centrée).
        zone.innerHTML = entete +
          '<video class="video-player-frame video-natif" src="' + res.lien + '" controls autoplay playsinline preload="auto"' + (v.type === "Payant" ? "" : ' controlsList="nodownload"') + ' onended="gererFinVideo_()"></video>' +
          construireControlesVideo_(true) + boutonTelecharger;
        const lecteurNatif = zone.querySelector("video.video-natif");
        lecteurNatif.addEventListener("error", function () {          // format non lisible par ce navigateur : aperçu Drive
          const f = document.createElement("iframe");
          f.className = "video-player-frame"; f.src = res.apercu; f.allow = "autoplay"; f.setAttribute("allowfullscreen", "");
          lecteurNatif.replaceWith(f);
        });
        return;
      }
      // Revenu à l'aperçu Google Drive (plus fiable pour la lecture que le lecteur natif du
      // navigateur, qui échouait souvent avec les liens Drive). Contrepartie : pas de
      // détection automatique de fin de lecture pour cette source — Précédent/Suivant
      // restent pleinement fonctionnels, et "Répéter Tout" boucle bien au dernier Suivant.
      zone.innerHTML = entete +
        '<iframe class="video-player-frame" src="' + res.apercu + '" allow="autoplay" allowfullscreen></iframe>' +
        construireControlesVideo_(true) + boutonTelecharger;
    }).catch(function (err) { zone.innerHTML = entete + '<p class="error" style="padding:0 14px 14px;">Erreur : ' + escapeHtml(err.message) + '</p>'; });
  }

  function gererFinVideo_() {
    if (modeRepetitionVideo === "un") {
      const natif = document.querySelector("#lecteurVideoZone video.video-natif");
      if (natif) { natif.currentTime = 0; natif.play().catch(function () {}); return; }
      const v = videosPlaylistCourante[indexVideoUnifieActuel];
      if (v && v.source === "youtube" && ytPlayerActuel) { ytPlayerActuel.seekTo(0); ytPlayerActuel.playVideo(); }
      return;
    }
    if (indexVideoUnifieActuel < videosPlaylistCourante.length - 1) {
      lireVideoUnifiee(indexVideoUnifieActuel + 1);
    } else if (modeRepetitionVideo === "tout" && videosPlaylistCourante.length) {
      lireVideoUnifiee(0);
    }
    // Sinon : fin de liste sans répétition, la lecture s'arrête simplement.
  }

  function videoUnifieePrecedente() {
    if (indexVideoUnifieActuel > 0) lireVideoUnifiee(indexVideoUnifieActuel - 1);
  }

  function videoUnifieeSuivante() {
    if (indexVideoUnifieActuel < videosPlaylistCourante.length - 1) lireVideoUnifiee(indexVideoUnifieActuel + 1);
    else if (modeRepetitionVideo === "tout") lireVideoUnifiee(0);
  }

  // Un seul mode actif à la fois : cliquer sur un mode déjà actif le désactive.
  function definirRepetitionVideo(mode) {
    modeRepetitionVideo = (modeRepetitionVideo === mode) ? "aucun" : mode;
    const btnUn = document.getElementById("btnRepeterUnVideo");
    const btnTout = document.getElementById("btnRepeterToutVideo");
    if (btnUn) btnUn.classList.toggle("actif", modeRepetitionVideo === "un");
    if (btnTout) btnTout.classList.toggle("actif", modeRepetitionVideo === "tout");
  }

  function acheterVideo(videoId, prix) {
    if (!configApp || !configApp.paiementPublicKey) { alert(messagePaiementNonConfigure_()); return; }
    typeCotisationEnCours = { nom: videoId, montant: prix, periodicite: "", categorie: "Video" };
    openKkiapayWidget({ amount: prix, api_key: configApp.paiementPublicKey, sandbox: false, data: codeActuel() });
  }

  // ==================== SOUMISSIONS DE CONTENU (membres Auteur) ====================
  const LIBELLES_STATUT_SOUMISSION = { EnAttente: "En attente", Validé: "Validé", Rejeté: "Rejeté", Publié: "Publié" };
  const LIBELLES_TYPE_SOUMISSION = { Document: "📄 Document", Audio: "🎧 Audio", Video: "🎬 Vidéo" };

  function compterMotsSoumission() {
    const texte = document.getElementById("subDescription").value.trim();
    const nbMots = texte ? texte.split(/\s+/).filter(Boolean).length : 0;
    const compteur = document.getElementById("compteurMotsSoumission");
    compteur.textContent = nbMots + " / 200 mots";
    compteur.style.color = nbMots > 200 ? "#d71920" : "";
  }

  // Lit un fichier quelconque (PDF, etc.) choisi dans un <input type="file"> et renvoie son
  // contenu en base64 avec son nom et son type — callback(base64, nom, mimeType), ou
  // callback(null, null, null) si aucun fichier n'a été choisi (champ facultatif).
  function lireFichierGenerique_(inputId, callback) {
    const fichier = document.getElementById(inputId).files[0];
    if (!fichier) { callback(null, null, null); return; }
    const lecteur = new FileReader();
    lecteur.onload = function () { callback(lecteur.result.split(",")[1], fichier.name, fichier.type || "application/octet-stream"); };
    lecteur.readAsDataURL(fichier);
  }

  function envoyerSoumissionClick() {
    const err = document.getElementById("erreurSoumission");
    err.style.display = "none";
    const type = document.getElementById("subType").value;
    const titre = document.getElementById("subTitre").value.trim();
    const description = document.getElementById("subDescription").value.trim();
    const nbMots = description ? description.split(/\s+/).filter(Boolean).length : 0;
    const prix = document.getElementById("subPrix").value || 0;
    const email = document.getElementById("subEmail").value.trim();
    const fichier = document.getElementById("subFichier").files[0];
    const paroles = document.getElementById("subParoles").value.trim();

    if (!titre) { err.textContent = "Le titre est obligatoire."; err.style.display = "block"; return; }
    if (nbMots > 200) { err.textContent = "La description dépasse 200 mots."; err.style.display = "block"; return; }
    if (!email) { err.textContent = "Votre e-mail est obligatoire."; err.style.display = "block"; return; }
    if (!fichier) { err.textContent = "Choisissez un fichier à soumettre."; err.style.display = "block"; return; }

    const bouton = document.getElementById("btnEnvoyerSoumission");
    const info = document.getElementById("infoSoumission");
    const libelleBouton = bouton.textContent;
    const octets = fichier.size;
    const taille = octets > 1048576 ? (octets / 1048576).toFixed(1) + " Mo" : Math.max(1, Math.round(octets / 1024)) + " Ko";
    bouton.disabled = true; bouton.textContent = "⏳ Envoi en cours… ne fermez pas l'application";
    info.style.display = "block";
    info.textContent = "Envoi de « " + fichier.name + " » (" + taille + ")." + (octets > 20 * 1048576 ? " Un gros fichier peut demander plusieurs minutes : patientez jusqu'à la confirmation." : "");
    const terminerEnvoi = function () { bouton.disabled = false; bouton.textContent = libelleBouton; info.style.display = "none"; };
    televerserVersR2_(fichier, "soumission", function (pct) {
      bouton.textContent = "⏳ Envoi du fichier… " + pct + " %";
    }).then(function (r2) {
      bouton.textContent = "⏳ Enregistrement…";
      lireFichierGenerique_("subParolesFichier", function (parolesBase64, parolesNom, parolesMime) {
        appelServeur("soumettreContenu", membreCourant.code, type, titre, description, prix, email, "", fichier.name, fichier.type || "application/octet-stream", couverturesEnCours.soumission || "", paroles, parolesBase64, parolesNom, parolesMime, r2)
          .then(function () {
            terminerEnvoi();
            alert("✓ Votre soumission a été envoyée pour vérification.");
            document.getElementById("subTitre").value = "";
            document.getElementById("subDescription").value = "";
            document.getElementById("subPrix").value = "0";
            document.getElementById("subEmail").value = "";
            document.getElementById("subFichier").value = "";
            document.getElementById("subCoverPreviewZone").style.display = "none";
            document.getElementById("subCoverFichier").value = "";
            document.getElementById("subParoles").value = "";
            document.getElementById("subParolesFichier").value = "";
            document.getElementById("subParolesFichierNom").textContent = "";
            delete couverturesEnCours.soumission;
            compterMotsSoumission();
            chargerMesSoumissions();
          }).catch(function (e) {
            terminerEnvoi();
            err.textContent = "Erreur : " + e.message;
            err.style.display = "block";
          });
      });
    }).catch(function (e) {
      terminerEnvoi();
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function chargerMesSoumissions() {
    appelServeur("getMesSoumissions", membreCourant.code).then(afficherMesSoumissions).catch(function (err) { afficherErreurZone("listeMesSoumissions", err); });
  }

  function afficherMesSoumissions(soumissions) {
    soumissions = soumissions || [];
    const zone = document.getElementById("listeMesSoumissions");
    if (!soumissions.length) { zone.innerHTML = '<p class="empty-state">Vous n\u2019avez pas encore soumis de contenu.</p>'; return; }
    const montantPublication = (configApp && configApp.MontantPublication) || 2000;
    zone.innerHTML = soumissions.map(function (s) {
      const pillClass = s.Statut === "Publié" ? "role-membre" : s.Statut === "Rejeté" ? "role-admin" : "vis-pill";
      const actionPaiement = s.Statut === "Validé"
        ? '<button class="flame small full-mt" onclick="payerPublicationClick(\'' + s.ID + '\')">💳 Payer ' + Number(montantPublication).toLocaleString("fr-FR") + ' FCFA pour publier</button>'
        : "";
      return '<div class="item-row">' +
        '<div><div class="item-nom">' + (LIBELLES_TYPE_SOUMISSION[s.TypeContenu] || s.TypeContenu) + " " + escapeHtml(s.Titre) + '</div>' +
        '<div class="item-desc">' + escapeHtml(s.Date) + (Number(s.Prix) > 0 ? " · Prix prévu : " + Number(s.Prix).toLocaleString("fr-FR") + " F" : " · Gratuit") + '</div>' +
        actionPaiement + '</div>' +
        '<span class="role-pill ' + pillClass + '">' + (LIBELLES_STATUT_SOUMISSION[s.Statut] || s.Statut) + "</span>" +
        '</div>';
    }).join("");
  }

  function payerPublicationClick(idSoumission) {
    if (!configApp || !configApp.paiementPublicKey) { alert(messagePaiementNonConfigure_()); return; }
    const montant = (configApp && configApp.MontantPublication) || 2000;
    typeCotisationEnCours = { nom: idSoumission, montant: montant, periodicite: "", categorie: "Publication" };
    openKkiapayWidget({ amount: montant, api_key: configApp.paiementPublicKey, sandbox: false, data: codeActuel() });
  }

  // ==================== NOS ÉCRITS (documents) ====================
  // ==================== DOCUMENTS (gratuits ou payants, téléchargeables) ====================
  let documentEnCoursAchat = null;

  let documentsCache = [];
  let sousOngletDocumentsActuel = "accueil";

  function chargerDocuments() {
    document.getElementById("rechercheDocuments").value = "";
    appelServeur("getDocuments").then(function (documents) {
      documentsCache = ordonnerALaUne_(documents || []);
      afficherSousDocuments(sousOngletDocumentsActuel || "accueil");
    }).catch(function (err) { afficherErreurZone("documentsAlaUne", err); });
  }

  function afficherSousDocuments(nom) {
    sousOngletDocumentsActuel = nom;
    document.querySelectorAll("#subNavDocuments .sub-nav-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.sub === nom); });
    document.querySelectorAll("#section-documents .sub-section").forEach(function (s) { s.classList.toggle("active", s.id === "documentsSous-" + nom); });
    if (nom === "accueil") afficherAccueilDocuments();
    else if (nom === "actualites") afficherActualitesDocuments();
    else if (nom === "tous") afficherDocuments(documentsCache);
  }

  function afficherAccueilDocuments() {
    afficherPubsDoubles_("documents", "pubDocumentsHaut", "pubDocumentsBas");
    const zone = document.getElementById("documentsAlaUne");
    if (!documentsCache.length) { zone.innerHTML = '<p class="empty-state">Aucun document pour le moment.</p>'; return; }
    const fav = construireFavoris_(documentsCache, "📄", function () { return "afficherSousDocuments('tous')"; });
    const restants = documentsCache.slice(fav.nb, fav.nb + 8);
    let html = fav.html;
    if (restants.length) {
      html += '<p class="field-label">Récemment ajoutés</p><div class="grille-alaune">' + restants.map(function (d) {
        const cover = d.CoverBase64 ? '<img src="data:image/jpeg;base64,' + d.CoverBase64 + '">' : '<div style="height:90px;background:#eef3f9;display:flex;align-items:center;justify-content:center;">📄</div>';
        return '<div class="carte-alaune" onclick="afficherSousDocuments(\'tous\')">' + cover + '<div class="carte-alaune-body"><div class="carte-alaune-titre">' + escapeHtml(d.Titre) + '</div></div></div>';
      }).join("") + '</div>';
    }
    zone.innerHTML = html;
  }

  // "Actualités" : les 10 derniers documents ajoutés, avec leur fiche complète (comme dans
  // "Tous les documents"), pour permettre l'action (téléchargement/achat) directement.
  let actualitesDocumentsCache = null;

  function afficherActualitesDocuments() {
    const zone = document.getElementById("documentsActualites");
    appelServeur("getActualites", "documents").then(function (liste) {
      actualitesDocumentsCache = liste || [];
      if (!liste.length) { zone.innerHTML = '<p class="empty-state">Aucune actualité pour le moment.</p>'; return; }
      zone.innerHTML = liste.map(function (a) { return construireCarteActualite_(a, "ouvrirActualiteDocuments_"); }).join("");
    }).catch(function (err) { afficherErreurZone("documentsActualites", err); });
  }

  function ouvrirActualiteDocuments_(id) {
    const a = actualitesDocumentsCache.find(function (x) { return x.ID === id; });
    if (a) afficherDetailActualiteModal_(a);
  }

  function filtrerDocuments() {
    const requete = document.getElementById("rechercheDocuments").value.trim().toLowerCase();
    if (!requete) { afficherDocuments(documentsCache); return; }
    afficherDocuments(documentsCache.filter(function (d) {
      return (d.Titre || "").toLowerCase().indexOf(requete) !== -1 ||
        (d.Description || "").toLowerCase().indexOf(requete) !== -1 ||
        (d.Auteur || "").toLowerCase().indexOf(requete) !== -1;
    }));
  }

  function construireCarteDocument_(d) {
    const payant = d.Type === "Payant";
    const titreEchappe = jsq_(d.Titre);
    const cover = d.CoverBase64 ? '<img src="data:image/jpeg;base64,' + d.CoverBase64 + '" alt="" loading="lazy">' : '<div class="mkt-ph">📄</div>';
    const actions = payant
      ? '<div class="mkt-actions"><button class="flame small" onclick="acheterDocument(\'' + d.ID + '\',\'' + titreEchappe + '\',' + Number(d.Prix) + ')">💳 Acheter</button>' +
        '<button class="secondary small" onclick="PANIER.ajouter(\'document\',\'' + d.ID + '\',\'' + titreEchappe + '\',' + Number(d.Prix) + ')">🛒</button></div>'
      : '<div class="mkt-actions"><button class="secondary small" onclick="lireDocument(\'' + d.ID + '\')">📖 Lire</button><button class="secondary small" onclick="telechargerDocument(\'' + d.ID + '\')">⬇️</button></div>';
    return '<div class="mkt-carte" style="cursor:default;">' +
      '<div class="mkt-img">' + cover + (payant ? '<span class="mkt-badge">⭐ Premium</span>' : '') + '</div>' +
      '<div class="mkt-corps"><div class="mkt-titre">' + escapeHtml(d.Titre) + '</div>' +
      (d.Auteur ? '<div class="mkt-sous">Par ' + lienAuteur_(d.Auteur) + '</div>' : '') +
      (d.Description ? '<div class="mkt-sous deux">' + escapeHtml(d.Description) + '</div>' : '') +
      '<div class="mkt-prix' + (payant ? '' : ' gratuit') + '">' + (payant ? Number(d.Prix).toLocaleString("fr-FR") + " F" : "Gratuit") + '</div>' +
      statsCompactes_("document", d.ID, d.Titre) +
      '<div class="mkt-sous">' + escapeHtml(d.DateAjout) + '</div>' + actions + '</div></div>';
  }

  function afficherDocuments(documents) {
    documents = documents || [];
    const zone = document.getElementById("listeDocuments");
    if (!documents.length) { zone.innerHTML = '<p class="empty-state">Aucun document pour le moment.</p>'; return; }
    zone.innerHTML = '<div class="mkt-grille">' + documents.map(construireCarteDocument_).join("") + "</div>";
  }

  // Ouvre tout de suite un onglet d'attente, DANS le clic : les navigateurs bloquent les fenêtres ouvertes plus tard
  // (après l'attente du serveur). On y charge ensuite le document.
  function ouvrirFenetreAttente_() {
    const f = window.open("", "_blank");
    if (f) { try { f.document.write('<p style="font-family:sans-serif;padding:24px;color:#0b2f68;">Ouverture du document…</p>'); } catch (e) {} }
    return f;
  }
  function allerVers_(fenetre, adresse) {
    if (fenetre && !fenetre.closed) fenetre.location.href = adresse;
    else window.location.href = adresse; // fenêtre bloquée : on ouvre dans cet onglet
  }

  // Documents gratuits, ou membre ayant déjà acheté ce document : téléchargement direct.
  function telechargerDocument(documentId) {
    const fenetre = ouvrirFenetreAttente_();
    appelServeur("getLienDocument", codeActuel(), documentId, null).then(function (res) {
      if (!res.succes) { if (fenetre) fenetre.close(); alert(res.message || "Téléchargement impossible."); return; }
      allerVers_(fenetre, res.lien);
      compterVue_("document", documentId);
    }).catch(function (err) { if (fenetre) fenetre.close(); alert("Erreur : " + err.message); });
  }

  // Ouvre le document dans un nouvel onglet (aperçu Google Drive : fonctionne pour les PDF et les documents Office).
  function lireDocument(documentId) {
    const fenetre = ouvrirFenetreAttente_();
    appelServeur("getLienDocument", codeActuel(), documentId, null).then(function (res) {
      if (!res.succes) { if (fenetre) fenetre.close(); alert(res.message || "Lecture impossible."); return; }
      allerVers_(fenetre, res.apercu || res.lien);
      compterVue_("document", documentId);
    }).catch(function (err) { if (fenetre) fenetre.close(); alert("Erreur : " + err.message); });
  }

  // Document payant pas encore acheté : passe par Kkiapay avant de débloquer le téléchargement.
  function acheterDocument(documentId, titre, prix) {
    if (!configApp || !configApp.paiementPublicKey) {
      document.getElementById("messageAchatDocument").innerHTML = '<span class="error">' + messagePaiementNonConfigure_() + '</span>';
      return;
    }
    documentEnCoursAchat = { id: documentId, titre: titre, prix: prix };
    typeCotisationEnCours = { nom: documentId, montant: prix, periodicite: "", categorie: "Document" };
    openKkiapayWidget({ amount: prix, api_key: configApp.paiementPublicKey, sandbox: false, data: codeActuel() });
  }

  // ==================== BIBLE (bilingue FR/EN) ====================
  let langueBibleActuelle = "fr";
  let livresBibleCache = null;

  function chargerLivresBible() {
    if (livresBibleCache) { construireSelecteursBible(); return; }
    appelServeur("getLivresBible").then(function (livres) {
      livresBibleCache = livres;
      construireSelecteursBible();
    }).catch(function (err) { afficherErreurZone("bibleContenuZone", err); });
  }

  function construireSelecteursBible() {
    const selectLivre = document.getElementById("bibleLivre");
    selectLivre.innerHTML = livresBibleCache.map(function (l) {
      return '<option value="' + l.id + '">' + escapeHtml(langueBibleActuelle === "en" ? l.en : l.fr) + '</option>';
    }).join("");
    remplirSelecteurChapitres();
  }

  function remplirSelecteurChapitres() {
    const selectChapitre = document.getElementById("bibleChapitre");
    const actuel = selectChapitre.value || "1";
    let options = "";
    for (let i = 1; i <= 150; i++) options += '<option value="' + i + '">' + i + "</option>";
    selectChapitre.innerHTML = options;
    selectChapitre.value = actuel;
  }

  function changerLangueBible(langue) {
    arreterLectureBible();
    langueBibleActuelle = langue;
    document.getElementById("bibleBtnFr").className = langue === "fr" ? "secondary" : "";
    document.getElementById("bibleBtnEn").className = langue === "en" ? "secondary" : "";
    if (livresBibleCache) construireSelecteursBible();
    if (document.getElementById("bibleLivre").value) chargerChapitreBible();
  }

  function chargerChapitreBible() {
    const livreId = document.getElementById("bibleLivre").value;
    const chapitre = document.getElementById("bibleChapitre").value;
    if (!livreId || !chapitre) return;
    // Une navigation manuelle (menu déroulant, ◀ ▶ cliqués par l'utilisateur) coupe tout,
    // y compris l'enchaînement automatique. Ce n'est PAS le cas quand ce chargement vient de
    // l'enchaînement lui-même (avancementAutomatiqueBible_ === true) : on préserve alors
    // l'intention de continuer à lire, posée juste avant par lireChapitreBibleActuel_.
    if (!avancementAutomatiqueBible_) arreterLectureBible();
    const zone = document.getElementById("bibleContenuZone");
    zone.innerHTML = '<div class="loading">Chargement…</div>';
    appelServeur("getChapitreBiblique", Number(livreId), Number(chapitre), langueBibleActuelle).then(function (res) {
      if (!res.succes) {
        // "Suivant" a dépassé le dernier chapitre du livre : on passe au livre suivant, chapitre 1.
        if (window._bibleAllerLivreSuivant) { window._bibleAllerLivreSuivant = false; changerLivreBible(1); return; }
        afficherErreurZone("bibleContenuZone", { message: res.message });
        avancementAutomatiqueBible_ = false;
        lectureBibleContinue = false;
        mettreAJourBoutonLectureBible_();
        return;
      }
      versetsBibleActuels = res.versets || [];
      bibleChapitreAffiche_ = { livre: livreId, chapitre: chapitre };
      bibleSelection_ = [];
      bibleModePlage_ = false;
      bibleAfficherVersets_();
      if (bibleVersetAMontrer_) { const n = bibleVersetAMontrer_; bibleVersetAMontrer_ = null; setTimeout(function () { bibleMontrerVerset_(n); }, 60); }
      // Le chapitre précédent vient de se terminer et l'enchaînement automatique est actif :
      // on démarre directement la lecture de celui-ci, sans action de l'utilisateur.
      if (avancementAutomatiqueBible_) {
        avancementAutomatiqueBible_ = false;
        lireChapitreBibleActuel_();
      }
    }).catch(function (err) {
      afficherErreurZone("bibleContenuZone", err);
      avancementAutomatiqueBible_ = false;
      lectureBibleContinue = false;
      mettreAJourBoutonLectureBible_();
    });
  }

  // ==================== BIBLE — LECTURE À VOIX HAUTE ====================
  // Utilise la synthèse vocale intégrée au navigateur (gratuite, aucun fichier audio à
  // héberger) pour lire le chapitre affiché, dans la langue actuellement choisie (FR/EN),
  // avec enchaînement automatique sur le chapitre suivant une fois celui-ci terminé.
  let versetsBibleActuels = [];
  let lectureBibleEnCours = false;
  let lectureBibleContinue = false; // enchaînement automatique activé par l'utilisateur
  let avancementAutomatiqueBible_ = false; // usage interne, le temps du chargement du chapitre suivant

  function toggleLectureBible() {
    if (!("speechSynthesis" in window)) {
      alert("La lecture à voix haute n'est pas prise en charge par ce navigateur.");
      return;
    }
    const synth = window.speechSynthesis;
    if (synth.speaking && !synth.paused) { synth.pause(); lectureBibleEnCours = false; mettreAJourBoutonLectureBible_(); return; }
    if (synth.paused) { synth.resume(); lectureBibleEnCours = true; mettreAJourBoutonLectureBible_(); return; }
    if (!versetsBibleActuels.length) { alert("Choisissez d'abord un livre et un chapitre à lire."); return; }
    lectureBibleContinue = true;
    lireChapitreBibleActuel_();
  }

  // Choisit, parmi les voix disponibles sur l'appareil, une voix masculine dans la bonne
  // langue si possible (repérée par son nom — l'API du navigateur ne fournit pas de vrai
  // indicateur de genre). Limite honnête : le ton "narratif et spirituel" en lui-même reste
  // hors de portée d'une voix de synthèse, quelle qu'elle soit — c'est le mieux que la
  // lecture à voix haute du navigateur puisse offrir.
  function choisirVoixBible_(lang) {
    if (!("speechSynthesis" in window)) return null;
    const voix = window.speechSynthesis.getVoices();
    if (!voix.length) return null;
    const prefixe = lang === "en" ? "en" : "fr";
    const candidates = voix.filter(function (v) { return v.lang && v.lang.toLowerCase().indexOf(prefixe) === 0; });
    if (!candidates.length) return null;
    const nomsMasculins = ["thomas", "paul", "daniel", "david", "mark", "nicolas", "henri", "guillaume", "male", "homme", "man"];
    const masculine = candidates.find(function (v) {
      const nom = v.name.toLowerCase();
      return nomsMasculins.some(function (m) { return nom.indexOf(m) !== -1; });
    });
    return masculine || candidates[0];
  }

  // Précharge la liste des voix dès que possible : sur certains navigateurs, elle n'est
  // disponible qu'après l'évènement "voiceschanged", pas immédiatement au chargement.
  if ("speechSynthesis" in window) {
    window.speechSynthesis.getVoices();
    window.speechSynthesis.onvoiceschanged = function () { window.speechSynthesis.getVoices(); };
  }

  // Lit le chapitre verset par verset (au lieu d'un seul long texte d'un coup) : Chrome et
  // certains navigateurs mobiles interrompent silencieusement la synthèse vocale au-delà
  // d'une quinzaine de secondes de lecture continue — découper en versets contourne ce
  // problème et permet en plus une reprise plus précise en cas de pause.
  let indexVersetLectureBible_ = 0;

  function lireChapitreBibleActuel_() {
    indexVersetLectureBible_ = 0;
    lireVersetSuivant_();
  }

  let minuteurSecoursBible_ = null;
  let erreursLectureBible_ = 0;

  function lireVersetSuivant_() {
    clearTimeout(minuteurSecoursBible_);
    if (indexVersetLectureBible_ >= versetsBibleActuels.length) {
      lectureBibleEnCours = false;
      if (lectureBibleContinue) {
        avancementAutomatiqueBible_ = true;
        chapitreBibleSuivant();      // chapitre suivant (ou livre suivant) : la lecture reprend toute seule
      } else {
        mettreAJourBoutonLectureBible_();
      }
      return;
    }
    const synth = window.speechSynthesis;
    const verset = versetsBibleActuels[indexVersetLectureBible_];
    const utterance = new SpeechSynthesisUtterance(verset.texte);
    utterance.lang = langueBibleActuelle === "en" ? "en-US" : "fr-FR";
    const voixChoisie = choisirVoixBible_(langueBibleActuelle);
    if (voixChoisie) utterance.voice = voixChoisie;
    utterance.rate = 0.92;
    utterance.pitch = 0.85; // légèrement plus grave, pour un ton plus posé et narratif
    const indexCourant = indexVersetLectureBible_;
    let termine = false;
    const passerAuSuivant = function () {
      if (termine) return;
      termine = true;
      clearTimeout(minuteurSecoursBible_);
      if (!lectureBibleEnCours || indexVersetLectureBible_ !== indexCourant) return;   // arrêt volontaire ou autre lecture entre-temps
      indexVersetLectureBible_++;
      lireVersetSuivant_();
    };
    utterance.onend = function () { erreursLectureBible_ = 0; passerAuSuivant(); };
    utterance.onerror = function (e) {
      // Interruptions volontaires (arrêt, navigation) : on ne fait rien. Erreur ponctuelle d'un verset : on le saute.
      const code = e && e.error;
      if (code === "canceled" || code === "interrupted" || !lectureBibleEnCours) return;
      if (++erreursLectureBible_ >= 3) { lectureBibleEnCours = false; lectureBibleContinue = false; mettreAJourBoutonLectureBible_(); return; }
      setTimeout(passerAuSuivant, 150);
    };
    // Filet de sécurité : certains navigateurs mobiles n'envoient jamais « fin de lecture » ; si la voix est muette
    // bien après la durée prévue, on passe au verset suivant.
    const surveiller = function () {
      if (termine || !lectureBibleEnCours) return;
      if (window.speechSynthesis.speaking || window.speechSynthesis.pending) { minuteurSecoursBible_ = setTimeout(surveiller, 2500); return; }
      passerAuSuivant();
    };
    minuteurSecoursBible_ = setTimeout(surveiller, Math.max(4000, verset.texte.length * 110 + 3000));
    synth.speak(utterance);
    lectureBibleEnCours = true;
    mettreAJourBoutonLectureBible_();
  }

  // Arrêt volontaire (bouton, changement de langue, navigation manuelle, changement d'onglet)
  // — coupe aussi bien la lecture en cours que l'intention d'enchaîner sur la suite.
  function arreterLectureBible() {
    clearTimeout(minuteurSecoursBible_);
    lectureBibleContinue = false;
    lectureBibleEnCours = false; // avant cancel() : empêche le onend du verset en cours d'enchaîner sur le suivant
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    mettreAJourBoutonLectureBible_();
  }

  function mettreAJourBoutonLectureBible_() {
    const btn = document.getElementById("btnEcouterBible");
    if (btn) btn.textContent = lectureBibleEnCours ? "⏸️ Pause" : "🔊 Écouter";
  }

  function chapitreBibleSuivant() {
    const chapitre = Number(document.getElementById("bibleChapitre").value) || 1;
    document.getElementById("bibleChapitre").value = chapitre + 1;
    window._bibleAllerLivreSuivant = true;
    chargerChapitreBible();
  }

  function chapitreBiblePrecedent() {
    const chapitre = Number(document.getElementById("bibleChapitre").value) || 1;
    if (chapitre > 1) {
      document.getElementById("bibleChapitre").value = chapitre - 1;
      chargerChapitreBible();
    } else {
      changerLivreBible(-1);
    }
  }

  function changerLivreBible(direction) {
    const selectLivre = document.getElementById("bibleLivre");
    const nouvelIndex = selectLivre.selectedIndex + direction;
    if (nouvelIndex < 0 || nouvelIndex >= selectLivre.options.length) return;
    selectLivre.selectedIndex = nouvelIndex;
    document.getElementById("bibleChapitre").value = 1;
    chargerChapitreBible();
  }

  // ==================== BIBLE — SÉLECTION, SURLIGNAGE, COPIE, RECHERCHE ====================
  let bibleSelection_ = [];
  let bibleSelectionNative_ = false;   // sélection faite au doigt/souris sur le texte (et non en touchant un verset)
  let bibleTexteNatif_ = "";
  let bibleModePlage_ = false;
  let bibleVersetAMontrer_ = null;
  let bibleChapitreAffiche_ = { livre: "", chapitre: "" };
  let bibleRecherche_ = { terme: "", portee: "", page: 1, affiches: 0, brut: 0, total: 0 };

  function bibleSurlignages_() { try { return JSON.parse(localStorage.getItem("sun_bible_surlignages") || "{}"); } catch (e) { return {}; } }
  function bibleSauverSurlignages_(o) { try { localStorage.setItem("sun_bible_surlignages", JSON.stringify(o)); } catch (e) {} }
  function bibleCleVerset_(n) { return bibleChapitreAffiche_.livre + ":" + bibleChapitreAffiche_.chapitre + ":" + n; }

  function bibleAfficherVersets_() {
    const zone = document.getElementById("bibleContenuZone");
    const hl = bibleSurlignages_();
    zone.innerHTML = versetsBibleActuels.map(function (v) {
      const c = hl[bibleCleVerset_(v.numero)];
      const sel = bibleSelection_.indexOf(Number(v.numero)) !== -1;
      return '<div class="bible-verset' + (c ? " hl-" + c : "") + (sel ? " selectionne" : "") + '" data-v="' + v.numero + '" onclick="bibleToucherVerset_(' + v.numero + ')"><span class="num">' + v.numero + "</span>" + escapeHtml(v.texte) + "</div>";
    }).join("");
    bibleMajBarre_();
  }

  function bibleMajBarre_() {
    const barre = document.getElementById("bibleBarreSelection");
    if (!barre) return;
    const n = bibleSelection_.length;
    barre.style.display = n ? "flex" : "none";
    document.getElementById("bibleNbSel").textContent = bibleModePlage_ ? "Touchez le dernier verset" : n + (n > 1 ? " versets" : " verset");
    document.getElementById("bibleBtnPlage").classList.toggle("actif", bibleModePlage_);
  }

  // Sélection au doigt ou à la souris sur le texte : la boîte (couleurs + copier) apparaît toute seule.
  let bibleMinuteurSel_ = null;
  document.addEventListener("selectionchange", function () {
    clearTimeout(bibleMinuteurSel_);
    bibleMinuteurSel_ = setTimeout(function () {
      const zone = document.getElementById("bibleContenuZone");
      if (!zone || !zone.offsetParent) return;
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.rangeCount || !zone.contains(sel.getRangeAt(0).commonAncestorContainer)) {
        if (bibleSelectionNative_) { bibleSelectionNative_ = false; bibleTexteNatif_ = ""; bibleSelection_ = []; bibleMajBarre_(); }
        return;
      }
      const range = sel.getRangeAt(0);
      const nums = [];
      zone.querySelectorAll(".bible-verset").forEach(function (el) { if (range.intersectsNode(el)) nums.push(Number(el.getAttribute("data-v"))); });
      if (!nums.length) return;
      bibleSelectionNative_ = true; bibleTexteNatif_ = sel.toString(); bibleSelection_ = nums; bibleModePlage_ = false;
      bibleMajBarre_();
    }, 180);
  });

  function bibleToucherVerset_(n) {
    const sel = window.getSelection && window.getSelection().toString();
    if (sel && sel.length > 0) return; // l'utilisateur sélectionne du texte à la main : on ne touche à rien
    n = Number(n);
    if (bibleModePlage_ && bibleSelection_.length) {
      const bornes = bibleSelection_.concat([n]);
      const a = Math.min.apply(null, bornes), b = Math.max.apply(null, bornes);
      bibleSelection_ = versetsBibleActuels.map(function (v) { return Number(v.numero); }).filter(function (x) { return x >= a && x <= b; });
      bibleModePlage_ = false;
    } else {
      const i = bibleSelection_.indexOf(n);
      if (i === -1) bibleSelection_.push(n); else bibleSelection_.splice(i, 1);
    }
    bibleAfficherVersets_();
  }

  function bibleToutSelectionner() {
    const tous = versetsBibleActuels.map(function (v) { return Number(v.numero); });
    if (!tous.length) return;
    bibleSelection_ = (bibleSelection_.length === tous.length) ? [] : tous;
    bibleModePlage_ = false;
    bibleAfficherVersets_();
  }

  function bibleEffacerSelectionNative_() {
    bibleSelectionNative_ = false; bibleTexteNatif_ = "";
    try { window.getSelection().removeAllRanges(); } catch (e) {}
  }

  function bibleAnnulerSelection() { bibleSelection_ = []; bibleModePlage_ = false; bibleEffacerSelectionNative_(); bibleAfficherVersets_(); }

  function bibleSurligner(couleur) {
    if (!bibleSelection_.length) return;
    const hl = bibleSurlignages_();
    bibleSelection_.forEach(function (n) {
      if (couleur) hl[bibleCleVerset_(n)] = couleur; else delete hl[bibleCleVerset_(n)];
    });
    bibleSauverSurlignages_(hl);
    bibleSelection_ = [];
    bibleEffacerSelectionNative_();
    bibleAfficherVersets_();
  }

  function bibleToast_(texte) {
    const t = document.createElement("div");
    t.textContent = texte;
    t.style.cssText = "position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#111;color:#fff;padding:10px 18px;border-radius:999px;font-size:13px;font-weight:700;z-index:9999;";
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 1800);
  }

  function bibleCopierTexte_(texte) {
    const fin = function (ok) { bibleToast_(ok ? "✓ Copié" : "Copie impossible"); };
    const repli = function () {
      const ta = document.createElement("textarea");
      ta.value = texte; ta.style.cssText = "position:fixed;opacity:0;top:0;left:0;";
      document.body.appendChild(ta); ta.select();
      let ok = false;
      try { ok = document.execCommand("copy"); } catch (e) {}
      ta.remove(); fin(ok);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(texte).then(function () { fin(true); }).catch(repli);
    else repli();
  }

  function bibleNomLivre_(id) {
    const l = (livresBibleCache || []).find(function (x) { return String(x.id) === String(id); });
    return l ? (langueBibleActuelle === "en" ? l.en : l.fr) : "";
  }

  function bibleCopier() {
    if (!bibleSelection_.length) return;
    const nums = bibleSelection_.slice().sort(function (a, b) { return a - b; });
    const plages = [];
    nums.forEach(function (n) {
      const d = plages[plages.length - 1];
      if (d && n === d[1] + 1) d[1] = n; else plages.push([n, n]);
    });
    const ref = plages.map(function (p) { return p[0] === p[1] ? p[0] : p[0] + "-" + p[1]; }).join(", ");
    const entete = bibleNomLivre_(bibleChapitreAffiche_.livre) + " " + bibleChapitreAffiche_.chapitre + ":" + ref + " (" + (langueBibleActuelle === "en" ? "KJV" : "LSG") + ")";
    if (bibleSelectionNative_ && bibleTexteNatif_.trim()) {   // texte exactement tel qu'il a été sélectionné
      bibleCopierTexte_(entete + "\n" + bibleTexteNatif_.trim());
      return;
    }
    const lignes = nums.map(function (n) {
      const v = versetsBibleActuels.find(function (x) { return Number(x.numero) === n; });
      return n + " " + (v ? v.texte.trim() : "");
    });
    bibleCopierTexte_(entete + "\n" + lignes.join("\n"));
  }

  function bibleMontrerVerset_(n) {
    const el = document.querySelector('#bibleContenuZone .bible-verset[data-v="' + n + '"]');
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("flash");
    setTimeout(function () { el.classList.remove("flash"); }, 2500);
  }

  function bibleAllerAuVerset_(livre, chapitre, verset) {
    if (String(livre) === String(bibleChapitreAffiche_.livre) && String(chapitre) === String(bibleChapitreAffiche_.chapitre)) { bibleMontrerVerset_(verset); return; }
    document.getElementById("bibleLivre").value = String(livre);
    document.getElementById("bibleChapitre").value = String(chapitre);
    bibleVersetAMontrer_ = verset;
    chargerChapitreBible();
  }

  // ----- Recherche -----
  function bibleSansAccents_(t) { return Array.from(String(t)).map(function (c) { return c.normalize("NFD").replace(/[\u0300-\u036f]/g, "") || c; }); }

  function bibleMarquer_(texte, terme) {
    const orig = Array.from(String(texte));
    const plat = bibleSansAccents_(texte);
    const cherche = bibleSansAccents_(terme).join("").toLowerCase();
    if (plat.some(function (c) { return c.length !== 1; }) || !cherche) return escapeHtml(texte);
    const hay = plat.join("").toLowerCase();
    if (hay.length !== orig.length) return escapeHtml(texte);
    let out = "", i = 0;
    while (i < orig.length) {
      const k = hay.indexOf(cherche, i);
      if (k === -1) { out += escapeHtml(orig.slice(i).join("")); break; }
      out += escapeHtml(orig.slice(i, k).join("")) + "<mark>" + escapeHtml(orig.slice(k, k + cherche.length).join("")) + "</mark>";
      i = k + cherche.length;
    }
    return out;
  }

  function bibleToggleRecherche() {
    const c = document.getElementById("bibleRechercheCard");
    const ouvrir = c.style.display === "none";
    c.style.display = ouvrir ? "block" : "none";
    if (ouvrir) document.getElementById("bibleRechercheTexte").focus();
  }

  function bibleLigneResultat_(livre, chapitre, verset, texte, terme, local) {
    const action = local ? "bibleMontrerVerset_(" + verset + ")" : "bibleAllerAuVerset_(" + livre + "," + chapitre + "," + verset + ")";
    return '<div class="bible-resultat" onclick="' + action + '"><div class="ref">' + escapeHtml(bibleNomLivre_(livre)) + " " + chapitre + ":" + verset + "</div><div>" + bibleMarquer_(texte, terme) + "</div></div>";
  }

  function bibleLancerRecherche(page) {
    const terme = document.getElementById("bibleRechercheTexte").value.trim();
    const portee = document.getElementById("bibleRechercheScope").value;
    const zone = document.getElementById("bibleRechercheResultats");
    if (terme.length < 2) { zone.innerHTML = '<p class="item-desc">Saisissez au moins 2 lettres.</p>'; return; }

    if (portee === "chapitre") {
      if (!versetsBibleActuels.length) { zone.innerHTML = '<p class="item-desc">Ouvrez d\'abord un chapitre.</p>'; return; }
      const q = bibleSansAccents_(terme).join("").toLowerCase();
      const trouves = versetsBibleActuels.filter(function (v) { return bibleSansAccents_(v.texte).join("").toLowerCase().indexOf(q) !== -1; });
      zone.innerHTML = trouves.length
        ? '<p class="item-desc">' + trouves.length + " résultat(s) dans ce chapitre.</p>" + trouves.map(function (v) { return bibleLigneResultat_(bibleChapitreAffiche_.livre, bibleChapitreAffiche_.chapitre, v.numero, v.texte, terme, true); }).join("")
        : '<p class="item-desc">Aucun résultat dans ce chapitre.</p>';
      return;
    }

    if (page === 1) { bibleRecherche_ = { terme: terme, portee: portee, page: 1, affiches: 0, brut: 0, total: 0 }; zone.innerHTML = '<div class="loading">Recherche…</div>'; }
    const livre = Number(document.getElementById("bibleLivre").value);
    appelServeur("rechercherBible", bibleRecherche_.terme, bibleRecherche_.portee, livre, langueBibleActuelle, page).then(function (res) {
      if (!res.succes) { zone.innerHTML = '<p class="error">' + escapeHtml(res.message || "Recherche impossible.") + "</p>"; return; }
      bibleRecherche_.page = page;
      bibleRecherche_.brut += res.brut;
      bibleRecherche_.total = res.total;
      bibleRecherche_.affiches += res.resultats.length;
      const ancien = zone.querySelector("#bibleResultatsListe");
      const lignes = res.resultats.map(function (r) { return bibleLigneResultat_(r.livre, r.chapitre, r.numero, r.texte, bibleRecherche_.terme, false); }).join("");
      if (page === 1 && !res.resultats.length) { zone.innerHTML = '<p class="item-desc">Aucun résultat.</p>'; return; }
      const encore = res.brut > 0 && bibleRecherche_.brut < res.total;
      const entete = '<p class="item-desc">' + res.total + " résultat(s)" + (bibleRecherche_.portee === "livre" ? " dans " + escapeHtml(bibleNomLivre_(livre)) : "") + ".</p>";
      const liste = (ancien ? ancien.innerHTML : "") + lignes;
      zone.innerHTML = entete + '<div id="bibleResultatsListe">' + liste + "</div>" +
        (encore ? '<button class="secondary full-mt" onclick="bibleLancerRecherche(' + (page + 1) + ')">Voir plus de résultats</button>' : "");
    }).catch(function (err) { zone.innerHTML = '<p class="error">Erreur : ' + escapeHtml(err.message) + "</p>"; });
  }

  // ==================== MESSAGERIE (texte + audio) ====================
  let mesMessagesCache = [];

  function chargerMesMessages() {
    document.getElementById("rechercheMesMessages").value = "";
    appelServeur("getMesMessages", membreCourant.code).then(function (messages) {
      mesMessagesCache = messages || [];
      afficherMesMessages(mesMessagesCache);
    }).catch(function (err) { afficherErreurZone("listeMesMessages", err); });
  }

  function filtrerMesMessages() {
    const requete = document.getElementById("rechercheMesMessages").value.trim().toLowerCase();
    if (!requete) { afficherMesMessages(mesMessagesCache); return; }
    afficherMesMessages(mesMessagesCache.filter(function (m) {
      return (m.TypeMessage !== "Audio" && (m.Message || "").toLowerCase().indexOf(requete) !== -1) ||
        (m.ReponseType !== "Audio" && (m.Reponse || "").toLowerCase().indexOf(requete) !== -1);
    }));
  }

  function chargerMesAnnonces() {
    appelServeur("getMesAnnonces", membreCourant.code).then(afficherMesAnnonces).catch(function () { /* silencieux si aucune annonce */ });
  }

  function afficherMesAnnonces(annonces) {
    annonces = annonces || [];
    const zone = document.getElementById("listeMesAnnonces");
    if (!annonces.length) { zone.innerHTML = ""; return; }
    zone.innerHTML = annonces.map(function (a) {
      const contenu = a.TypeAnnonce === "Audio"
        ? '' + lecteurAudioDrive_(a.PieceJointeId) + ''
        : a.TypeAnnonce === "Document"
        ? '<a class="secondary small" style="display:inline-block;text-decoration:none;text-align:center;margin-top:6px;" href="https://drive.google.com/uc?export=download&id=' + a.PieceJointeId + '" target="_blank">⬇️ Télécharger le document</a>'
        : "";
      return '<div class="card" style="background:#fff7e8;border-color:#f4c400;">' +
        '<div class="item-desc" style="margin-bottom:4px;">📢 Annonce du ' + escapeHtml(a.Date) + '</div>' +
        (a.Texte ? '<div style="font-size:14px;">' + escapeHtml(a.Texte) + '</div>' : '') +
        contenu + '</div>';
    }).join("");
  }

  function envoyerMonMessage() {
    const zone = document.getElementById("nouveauMessage");
    const err = document.getElementById("erreurNouveauMessage");
    const texte = zone.value.trim();
    err.style.display = "none";
    if (!texte) return;
    appelServeur("envoyerMessage", membreCourant.code, texte).then(function (res) {
      if (res.succes) {
        zone.value = "";
        chargerMesMessages();
      } else {
        err.textContent = "Le message n'a pas pu être envoyé.";
        err.style.display = "block";
      }
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function afficherMesMessages(messages) {
    messages = messages || [];
    const zone = document.getElementById("listeMesMessages");
    if (!messages.length) { zone.innerHTML = '<p class="empty-state">Vous n\u2019avez pas encore écrit à l\u2019administration.</p>'; return; }
    zone.innerHTML = messages.map(function (m) {
      const date = m.Date ? new Date(m.Date).toLocaleDateString("fr-FR") : "";
      const contenu = m.TypeMessage === "Audio"
        ? '' + lecteurAudioDrive_(m.Message) + ''
        : escapeHtml(m.Message);
      let html = '<div class="message-bulle">' + contenu + '<div class="message-date">' + date + "</div></div>";
      if (m.Reponse) {
        const contenuReponse = m.ReponseType === "Audio"
          ? '' + lecteurAudioDrive_(m.Reponse) + ''
          : escapeHtml(m.Reponse);
        html += '<div class="message-reponse"><strong>Réponse :</strong><br>' + contenuReponse + "</div>";
      } else {
        html += '<div class="message-attente">En attente de réponse…</div>';
      }
      return html;
    }).join("");
  }

  // --- Enregistrement vocal (façon WhatsApp) — réutilisé pour le membre ET la réponse admin ---
  let enregistreurAudio = null;
  let morceauxAudio = [];
  let chronoInterval = null;
  let secondesEcoulees = 0;
  let cibleReponseAudioAdmin = null; // null = message du membre, sinon ID du message auquel l'admin répond

  function toggleEnregistrementAudio(idMessageAdmin) {
    cibleReponseAudioAdmin = idMessageAdmin || null;
    const idBouton = idMessageAdmin ? "btnMicroReponse-" + idMessageAdmin : "btnMicroMessage";
    const idChrono = idMessageAdmin ? "chronoReponse-" + idMessageAdmin : "chronoAudio";

    if (enregistreurAudio && enregistreurAudio.state === "recording") {
      enregistreurAudio.stop();
      return;
    }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      alert("L'enregistrement audio n'est pas supporté par ce navigateur.");
      return;
    }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (flux) {
      morceauxAudio = [];
      enregistreurAudio = new MediaRecorder(flux);
      enregistreurAudio.ondataavailable = function (e) { if (e.data.size > 0) morceauxAudio.push(e.data); };
      enregistreurAudio.onstop = function () {
        flux.getTracks().forEach(function (t) { t.stop(); });
        clearInterval(chronoInterval);
        const chronoEl = document.getElementById(idChrono);
        const boutonEl = document.getElementById(idBouton);
        if (chronoEl) chronoEl.style.display = "none";
        if (boutonEl) { boutonEl.classList.remove("enregistrement"); boutonEl.textContent = idMessageAdmin ? "🎙️" : "🎙️ Message vocal"; }
        const blob = new Blob(morceauxAudio, { type: "audio/webm" });
        const lecteur = new FileReader();
        lecteur.onload = function () {
          const base64 = lecteur.result.split(",")[1];
          if (cibleReponseAudioAdmin) {
            appelServeur("repondreMessageAudio", membreCourant.code, cibleReponseAudioAdmin, base64).then(function () {
              appelServeur("getMessagesAdmin", membreCourant.code).then(function (data) { messagesAdminCache = data || []; afficherMessagesAdmin(messagesAdminCache); });
              chargerCompteursEtBadges();
            }).catch(function (err) { alert("Erreur envoi audio : " + err.message); });
          } else {
            appelServeur("envoyerMessageAudio", membreCourant.code, base64).then(function () {
              chargerMesMessages();
            }).catch(function (err) { alert("Erreur envoi audio : " + err.message); });
          }
        };
        lecteur.readAsDataURL(blob);
      };
      enregistreurAudio.start();
      secondesEcoulees = 0;
      const chronoEl = document.getElementById(idChrono);
      const boutonEl = document.getElementById(idBouton);
      if (chronoEl) chronoEl.style.display = "inline";
      if (boutonEl) { boutonEl.classList.add("enregistrement"); boutonEl.textContent = "⏹️"; }
      chronoInterval = setInterval(function () {
        secondesEcoulees++;
        const m = String(Math.floor(secondesEcoulees / 60)).padStart(2, "0");
        const s = String(secondesEcoulees % 60).padStart(2, "0");
        const chronoEl2 = document.getElementById(idChrono);
        if (chronoEl2) chronoEl2.textContent = m + ":" + s;
      }, 1000);
    }).catch(function () {
      alert("Impossible d'accéder au microphone. Vérifiez les autorisations de l'application.");
    });
  }

  // ==================== YOUTUBE ====================
  function ouvrirYoutube() {
    const lien = (configApp && configApp.LienYoutube) || "https://www.youtube.com/@reveilcommunication";
    window.open(lien, "_blank");
  }

  // ==================== DEMANDE DE PRIÈRE (visiteur, sans compte) ====================
  function envoyerDemandePriereClick() {
    const err = document.getElementById("erreurDemandePriere");
    const msg = document.getElementById("messageDemandePriere");
    err.style.display = "none";
    msg.textContent = "";
    const donnees = {
      nom: document.getElementById("dpNom").value.trim(),
      prenom: document.getElementById("dpPrenom").value.trim(),
      situationMatrimoniale: document.getElementById("dpSituation").value,
      profession: document.getElementById("dpProfession").value.trim(),
      age: document.getElementById("dpAge").value,
      numeroWhatsApp: document.getElementById("dpWhatsapp").value.trim(),
      requete: document.getElementById("dpRequete").value.trim()
    };
    if (!donnees.nom || !donnees.requete) {
      err.textContent = "Le nom et la requête sont obligatoires.";
      err.style.display = "block";
      return;
    }
    appelServeur("envoyerDemandePriere", donnees).then(function (res) {
      if (!res.succes) { err.textContent = res.message || "Envoi impossible."; err.style.display = "block"; return; }
      msg.className = "success-text";
      msg.innerHTML = "✓ Votre requête a bien été transmise. Merci de votre confiance.<br>" +
        "<strong>Notez ce code pour suivre votre demande et échanger avec nous : " + escapeHtml(res.id) + "</strong>";
      ["dpNom", "dpPrenom", "dpProfession", "dpAge", "dpWhatsapp", "dpRequete"].forEach(function (id) { document.getElementById(id).value = ""; });
      document.getElementById("dpSituation").value = "";
      document.getElementById("dpSuiviCode").value = res.id;
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  // ==================== SUIVI / CONVERSATION — DEMANDE DE PRIÈRE (sans compte) ====================
  let dpIdCourant = null;
  let dpWhatsappCourant = null;

  function ouvrirSuiviDemandePriere() {
    const code = document.getElementById("dpSuiviCode").value.trim().toUpperCase();
    const numero = document.getElementById("dpSuiviWhatsapp").value.trim();
    const err = document.getElementById("erreurSuiviDemande");
    err.style.display = "none";
    if (!code || !numero) { err.textContent = "Le code et le numéro WhatsApp sont requis."; err.style.display = "block"; return; }

    appelServeur("getMessagesDemandePriere", code, numero).then(function (res) {
      if (!res.succes) { err.textContent = res.message || "Introuvable."; err.style.display = "block"; return; }
      dpIdCourant = code;
      dpWhatsappCourant = numero;
      document.getElementById("dpFormulaireZone").style.display = "none";
      document.getElementById("dpSuiviFormulaireZone").style.display = "none";
      document.getElementById("dpConversationZone").style.display = "block";
      document.getElementById("dpConversationTitre").textContent = "Votre demande : " + res.demande.Requete.substring(0, 60) + (res.demande.Requete.length > 60 ? "…" : "");
      afficherMessagesDemandePriere(res.messages);
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function fermerSuiviDemandePriere() {
    dpIdCourant = null;
    dpWhatsappCourant = null;
    document.getElementById("dpConversationZone").style.display = "none";
    document.getElementById("dpFormulaireZone").style.display = "block";
    document.getElementById("dpSuiviFormulaireZone").style.display = "block";
  }

  function afficherMessagesDemandePriere(messages) {
    messages = messages || [];
    const zone = document.getElementById("dpListeMessages");
    if (!messages.length) { zone.innerHTML = '<p class="empty-state">Aucun échange pour le moment.</p>'; return; }
    zone.innerHTML = messages.map(function (m) {
      const date = m.Date ? new Date(m.Date).toLocaleDateString("fr-FR") : "";
      const estAdmin = !m.NomMembre || m.NomMembre.indexOf("🙏") === -1;
      const contenu = m.TypeMessage === "Audio"
        ? '' + lecteurAudioDrive_(m.Message) + ''
        : escapeHtml(m.Message);
      let html = '<div class="' + (estAdmin ? "message-reponse" : "message-bulle") + '">' + contenu + '<div class="message-date">' + date + "</div></div>";
      if (m.Reponse) {
        const contenuReponse = m.ReponseType === "Audio"
          ? '' + lecteurAudioDrive_(m.Reponse) + ''
          : escapeHtml(m.Reponse);
        html += '<div class="message-reponse"><strong>Réponse de l\u2019administration :</strong><br>' + contenuReponse + "</div>";
      }
      return html;
    }).join("");
  }

  function envoyerMonMessageDemandePriere() {
    const zone = document.getElementById("dpNouveauMessage");
    const err = document.getElementById("erreurDpMessage");
    const texte = zone.value.trim();
    err.style.display = "none";
    if (!texte || !dpIdCourant) return;
    appelServeur("envoyerMessageDemandePriere", dpIdCourant, dpWhatsappCourant, texte).then(function (res) {
      if (!res.succes) { err.textContent = "Le message n'a pas pu être envoyé."; err.style.display = "block"; return; }
      zone.value = "";
      appelServeur("getMessagesDemandePriere", dpIdCourant, dpWhatsappCourant).then(function (r) { afficherMessagesDemandePriere(r.messages); });
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function toggleEnregistrementDemandePriere() {
    if (enregistreurAudio && enregistreurAudio.state === "recording") { enregistreurAudio.stop(); return; }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { alert("L'enregistrement audio n'est pas supporté par ce navigateur."); return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (flux) {
      morceauxAudio = [];
      enregistreurAudio = new MediaRecorder(flux);
      enregistreurAudio.ondataavailable = function (e) { if (e.data.size > 0) morceauxAudio.push(e.data); };
      enregistreurAudio.onstop = function () {
        flux.getTracks().forEach(function (t) { t.stop(); });
        clearInterval(chronoInterval);
        document.getElementById("chronoAudioDp").style.display = "none";
        document.getElementById("btnMicroDemandePriere").classList.remove("enregistrement");
        document.getElementById("btnMicroDemandePriere").textContent = "🎙️ Message vocal";
        const blob = new Blob(morceauxAudio, { type: "audio/webm" });
        const lecteur = new FileReader();
        lecteur.onload = function () {
          const base64 = lecteur.result.split(",")[1];
          appelServeur("envoyerMessageDemandePriereAudio", dpIdCourant, dpWhatsappCourant, base64).then(function () {
            appelServeur("getMessagesDemandePriere", dpIdCourant, dpWhatsappCourant).then(function (r) { afficherMessagesDemandePriere(r.messages); });
          }).catch(function (err) { alert("Erreur envoi audio : " + err.message); });
        };
        lecteur.readAsDataURL(blob);
      };
      enregistreurAudio.start();
      secondesEcoulees = 0;
      document.getElementById("chronoAudioDp").style.display = "inline";
      document.getElementById("btnMicroDemandePriere").classList.add("enregistrement");
      document.getElementById("btnMicroDemandePriere").textContent = "⏹️ Arrêter";
      chronoInterval = setInterval(function () {
        secondesEcoulees++;
        const m = String(Math.floor(secondesEcoulees / 60)).padStart(2, "0");
        const s = String(secondesEcoulees % 60).padStart(2, "0");
        document.getElementById("chronoAudioDp").textContent = m + ":" + s;
      }, 1000);
    }).catch(function () {
      alert("Impossible d'accéder au microphone. Vérifiez les autorisations de l'application.");
    });
  }

  // ==================== VIDÉOS — PLAYLISTS ====================
  let videosPlaylistCourante = [];
  let nomPlaylistCourante = "";

  function chargerPlaylists() {
    // Le lecteur vidéo n'est plus réinitialisé ici : il reste visible et continue de jouer
    // même en changeant de rubrique — voir fermerLecteurVideo_() pour l'arrêt volontaire.
    document.getElementById("listeVideosPlaylist").style.display = "none";
    document.getElementById("rechercheVideos").value = "";
    Promise.all([appelServeur("getPlaylists"), appelServeur("getVideos")]).then(function (resultats) {
      playlistsCache = (resultats[0] || []).filter(function (p) { return p.PlaylistId; });
      videosPlateformeCache = ordonnerALaUne_(resultats[1] || []);
      afficherSousVideos(sousOngletVideosActuel || "accueil");
    }).catch(function (err) { afficherErreurZone("videosAlaUne", err); });
  }

  function afficherSousVideos(nom) {
    sousOngletVideosActuel = nom;
    document.querySelectorAll("#subNavVideos .sub-nav-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.sub === nom); });
    document.querySelectorAll("#section-videos .sub-section").forEach(function (s) { s.classList.toggle("active", s.id === "videosSous-" + nom); });
    if (nom === "accueil") afficherAccueilVideos();
    else if (nom === "emissions") { document.getElementById("listePlaylists").style.display = "block"; afficherPlaylists(playlistsCache); }
    else if (nom === "actualites") chargerActualitesVideos();
  }

  function afficherAccueilVideos() {
    afficherPubsDoubles_("videos", "pubVideosHaut", "pubVideosBas");
    const zone = document.getElementById("videosAlaUne");
    if (!videosPlateformeCache.length) {
      zone.innerHTML = '<p class="empty-state">Aucune vidéo mise en avant pour le moment — consultez les Émissions pour voir toutes les playlists.</p>';
      return;
    }
    const fav = construireFavoris_(videosPlateformeCache, "🎬", function (i) { return "jouerVideoDepuisAccueil_(" + i + ")"; });
    const restants = videosPlateformeCache.slice(fav.nb, fav.nb + 8);
    let html = fav.html;
    if (restants.length) {
      html += '<p class="field-label">Récemment ajoutées</p><div class="grille-alaune">' + restants.map(function (v, i) {
        const cover = v.CoverBase64 ? '<img src="data:image/jpeg;base64,' + v.CoverBase64 + '">' : '<div style="height:90px;background:#eef3f9;display:flex;align-items:center;justify-content:center;">🎬</div>';
        return '<div class="carte-alaune" onclick="jouerVideoDepuisAccueil_(' + (i + fav.nb) + ')">' + cover + '<div class="carte-alaune-body"><div class="carte-alaune-titre">' + escapeHtml(v.Titre) + '</div></div></div>';
      }).join("") + '</div>';
    }
    zone.innerHTML = html;
  }

  // Convertit un enregistrement du catalogue plateforme au format attendu par le lecteur
  // vidéo unifié (celui utilisé pour les Émissions), puis lance la lecture.
  function jouerVideoDepuisAccueil_(index) {
    videosPlaylistCourante = videosPlateformeCache.map(function (v) {
      return { source: "plateforme", id: v.ID, titre: v.Titre, auteur: v.Auteur, description: v.Description, cover: v.CoverBase64, type: v.Type, prix: v.Prix, dateAjout: v.DateAjout, paroles: v.Paroles, parolesFichierLien: v.ParolesFichierLien, parolesFichierNom: v.ParolesFichierNom };
    });
    document.getElementById("videosSous-accueil").scrollIntoView({ behavior: "smooth", block: "start" });
    lireVideoUnifiee(index);
  }

  let actualitesVideosCache = null;

  function chargerActualitesVideos() {
    appelServeur("getActualites", "videos").then(function (liste) {
      actualitesVideosCache = liste || [];
      afficherActualitesVideos(actualitesVideosCache);
    }).catch(function (err) { afficherErreurZone("listeActualitesVideos", err); });
  }

  function afficherActualitesVideos(liste) {
    const zone = document.getElementById("listeActualitesVideos");
    if (!liste.length) { zone.innerHTML = '<p class="empty-state">Aucune actualité pour le moment.</p>'; return; }
    zone.innerHTML = liste.map(function (a) { return construireCarteActualite_(a, "ouvrirActualiteVideos_"); }).join("");
  }

  function ouvrirActualiteVideos_(id) {
    const a = actualitesVideosCache.find(function (x) { return x.ID === id; });
    if (a) afficherDetailActualiteModal_(a);
  }

  function afficherPlaylists(playlists) {
    const zone = document.getElementById("listePlaylists");
    if (!playlists.length) { zone.innerHTML = '<div class="card"><p class="empty-state">Aucune playlist configurée pour le moment.</p></div>'; return; }
    zone.innerHTML = '<div class="grille-playlists">' + playlists.map(function (p) {
      const nomEchappe = jsq_(p.Nom);
      const nbPlateforme = videosPlateformeCache.filter(function (v) { return v.Categorie === p.Nom; }).length;
      const cover = p.CoverBase64
        ? '<img src="data:image/jpeg;base64,' + p.CoverBase64 + '" style="width:100%;height:64px;object-fit:cover;border-radius:10px;margin-bottom:6px;">'
        : '<span class="ic">' + (iconePourNom_(p.Nom) || "▶️") + '</span>';
      return '<div class="playlist-tuile" onclick="ouvrirPlaylist(\'' + p.PlaylistId + '\',\'' + nomEchappe + '\')">' + cover + '<span class="lib">' + escapeHtml(p.Nom) + '</span>' +
        (nbPlateforme ? '<div class="item-desc" style="margin-top:4px;">+ ' + nbPlateforme + ' vidéo(s) plateforme</div>' : '') + '</div>';
    }).join("") + '</div>';
  }

  // Fusionne les vidéos YouTube de la playlist ET les vidéos de la plateforme classées
  // dans la même catégorie (par nom), pour une navigation unique.
  function ouvrirPlaylist(playlistId, nom) {
    const zoneListe = document.getElementById("listeVideosPlaylist");
    document.getElementById("listePlaylists").style.display = "none";
    zoneListe.style.display = "block";
    document.getElementById("rechercheVideos").value = "";
    nomPlaylistCourante = nom;
    zoneListe.innerHTML = '<p class="field-label">' + escapeHtml(nom) + '</p><div class="loading">Chargement…</div>';
    appelServeur("getVideosPlaylist", playlistId).then(function (res) {
      const videosYoutube = (res.succes ? res.videos : []).map(function (v) {
        return { source: "youtube", videoId: v.videoId, titre: v.titre, miniature: v.miniature, datePublication: v.datePublication };
      });
      const videosPlateforme = videosPlateformeCache.filter(function (v) { return v.Categorie === nom; }).map(function (v) {
        return { source: "plateforme", id: v.ID, titre: v.Titre, auteur: v.Auteur, description: v.Description, cover: v.CoverBase64, type: v.Type, prix: v.Prix, dateAjout: v.DateAjout, paroles: v.Paroles, parolesFichierLien: v.ParolesFichierLien, parolesFichierNom: v.ParolesFichierNom };
      });
      videosPlaylistCourante = videosYoutube.concat(videosPlateforme);
      afficherVideosPlaylist(videosPlaylistCourante, nom);
    }).catch(function (err) {
      zoneListe.innerHTML = '<p class="field-label">' + escapeHtml(nom) + '</p><p class="error">Erreur : ' + escapeHtml(err.message) + '</p>';
    });
  }

  function afficherVideosPlaylist(videos, nom) {
    videos = videos || [];
    const zone = document.getElementById("listeVideosPlaylist");
    const entete = '<p class="field-label">' + escapeHtml(nom) + '</p><button class="secondary small full-mt" style="margin-bottom:10px;" onclick="chargerPlaylistsEtRevenir()">← Toutes les catégories</button>';
    if (!videos.length) { zone.innerHTML = entete + '<p class="empty-state">Aucune vidéo trouvée.</p>'; return; }
    const cartes = videos.map(function (v, i) {
      if (v.source === "youtube") {
        return '<div class="mkt-carte" onclick="lireVideoUnifiee(' + i + ')">' +
          '<div class="mkt-img"><img src="' + v.miniature + '" alt="" loading="lazy"><span class="mkt-badge cat">▶ YouTube</span></div>' +
          '<div class="mkt-corps"><div class="mkt-titre">' + escapeHtml(v.titre) + '</div>' +
          '<div class="mkt-prix gratuit">Gratuit</div><div class="mkt-sous">' + escapeHtml(v.datePublication) + '</div></div></div>';
      }
      const payant = v.type === "Payant";
      const cover = v.cover ? '<img src="data:image/jpeg;base64,' + v.cover + '" alt="" loading="lazy">' : '<div class="mkt-ph">🎬</div>';
      const boutonLyrics = (v.paroles && v.paroles.trim()) || v.parolesFichierLien
        ? '<button class="secondary small mkt-mini" onclick="event.stopPropagation();afficherParolesVideoClick_(' + i + ')">📜 Lyrics</button>' : '';
      return '<div class="mkt-carte" onclick="lireVideoUnifiee(' + i + ')">' +
        '<div class="mkt-img">' + cover + (payant ? '<span class="mkt-badge">⭐ Premium</span>' : '') + '</div>' +
        '<div class="mkt-corps"><div class="mkt-titre">' + escapeHtml(v.titre) + '</div>' +
        (v.auteur ? '<div class="mkt-sous">Par ' + lienAuteur_(v.auteur) + '</div>' : '') +
        '<div class="mkt-prix' + (payant ? '' : ' gratuit') + '">' + (payant ? Number(v.prix).toLocaleString("fr-FR") + " F" : "Gratuit") + '</div>' +
        statsCompactes_("video", v.id, v.titre) +
        '<div class="mkt-sous">' + escapeHtml(v.dateAjout) + '</div>' + boutonLyrics + '</div></div>';
    });
    zone.innerHTML = entete + '<div class="mkt-grille">' + cartes.join("") + '</div>';
  }

  function afficherParolesVideoClick_(index) {
    const v = videosPlaylistCourante[index];
    if (v) afficherParolesModal_(v.titre, v.paroles, v.parolesFichierLien, v.parolesFichierNom);
  }

  function chargerPlaylistsEtRevenir() {
    chargerPlaylists();
  }

  function filtrerVideosPlaylist() {
    const requete = document.getElementById("rechercheVideos").value.trim().toLowerCase();
    if (document.getElementById("listeVideosPlaylist").style.display === "none") return; // aucune catégorie ouverte
    if (!requete) { afficherVideosPlaylist(videosPlaylistCourante, nomPlaylistCourante); return; }
    const resultats = videosPlaylistCourante.filter(function (v) {
      return (v.titre || "").toLowerCase().indexOf(requete) !== -1 ||
        (v.auteur || "").toLowerCase().indexOf(requete) !== -1 ||
        (v.description || "").toLowerCase().indexOf(requete) !== -1;
    });
    afficherVideosPlaylist(resultats, nomPlaylistCourante);
  }

  // ==================== NOMS DES RUBRIQUES (modifiables par le Super Admin) ====================
  const RUBRIQUES = [
    { id: "bible", nom: "Bible" }, { id: "prieres", nom: "Séances directes" }, { id: "tv", nom: "TV" },
    { id: "audios", nom: "Audios" }, { id: "documents", nom: "Documents" }, { id: "videos", nom: "Vidéos" },
    { id: "offrandes", nom: "Offrandes" }, { id: "cotisation", nom: "Collectes" },
    { id: "demandePriere", nom: "Demande de prière" }, { id: "groupes", nom: "Groupes" },
    { id: "evenements", nom: "Événements" }, { id: "communaute", nom: "Communauté" }, { id: "badge", nom: "Mon compte" }, { id: "messages", nom: "Messages" }, { id: "soumissions", nom: "Soumissions" }
  ];

  function nomsRubriques_() {
    try { const o = JSON.parse((configApp && configApp.NomsRubriques) || "{}"); return (o && typeof o === "object") ? o : {}; }
    catch (e) { return {}; }
  }
  function nomRubriquePerso_(id) {
    const n = nomsRubriques_()[id];
    return (typeof n === "string" && n.trim()) ? n.trim().slice(0, 40) : "";
  }
  // Étiquette d'un onglet : le nom personnalisé remplace le texte, l'icône d'origine est conservée.
  function etiquetteOnglet_(id, defaut) {
    const perso = nomRubriquePerso_(id);
    if (!perso) return defaut;
    const m = String(defaut).match(/^([^A-Za-zÀ-ÿ0-9]+)/);
    return (m ? m[1].trim() + " " : "") + perso;
  }
  // Applique les noms personnalisés aux tuiles de l'accueil et aux titres des rubriques.
  // Réapplique les noms partout (tuiles de l'accueil, titres, onglets déjà affichés), pour les visiteurs comme pour les membres.
  function rafraichirNomsRubriques_() {
    appliquerNomsRubriques_();
    const tabs = document.getElementById("tabsPrincipaux");
    if (tabs && tabs.children.length) {
      const actif = ongletActuel;
      construireTabs();
      if (actif) document.querySelectorAll("#tabsPrincipaux .tab").forEach(function (t) { t.classList.toggle("active", t.getAttribute("data-tab") === actif); });
    }
  }
  function appliquerNomsRubriques_() {
    RUBRIQUES.forEach(function (r) {
      const perso = nomRubriquePerso_(r.id);
      if (!perso) return;
      const titre = document.querySelector("#section-" + r.id + " .section-title");
      if (titre) { const ic = titre.querySelector(".ic"); titre.innerHTML = (ic ? ic.outerHTML + " " : "") + escapeHtml(perso); }
      document.querySelectorAll('.tuile-visiteur[onclick*="\'' + r.id + '\'"] .lib').forEach(function (el) { el.textContent = perso; });
    });
  }

  function afficherNomsRubriquesAdmin_() {
    const zone = document.getElementById("adminNomsRubriques");
    if (!zone) return;
    const perso = nomsRubriques_();
    zone.innerHTML = RUBRIQUES.map(function (r) {
      return '<label class="field-label" style="margin-top:8px;">' + escapeHtml(r.nom) + '</label>' +
        '<input type="text" maxlength="40" id="nomRubrique-' + r.id + '" placeholder="' + escapeHtml(r.nom) + '" value="' + escapeHtml(typeof perso[r.id] === "string" ? perso[r.id] : "") + '">';
    }).join("");
  }
  function sauvegarderNomsRubriques(reinitialiser) {
    const resultat = {};
    if (!reinitialiser) {
      RUBRIQUES.forEach(function (r) {
        const v = (document.getElementById("nomRubrique-" + r.id).value || "").trim().slice(0, 40);
        if (v && v !== r.nom) resultat[r.id] = v;
      });
    }
    const zone = document.getElementById("erreurNomsRubriques");
    zone.style.display = "none";
    appelServeur("mettreAJourConfig", membreCourant.code, "NomsRubriques", JSON.stringify(resultat)).then(function () {
      configApp.NomsRubriques = JSON.stringify(resultat);
      afficherNomsRubriquesAdmin_();
      construireTabs();
      appliquerNomsRubriques_();
      alert(reinitialiser ? "Noms d'origine rétablis. Rechargez l'application pour revoir les anciens titres partout." : "Noms enregistrés.");
    }).catch(function (e) { zone.textContent = "Erreur : " + e.message; zone.style.display = "block"; });
  }

  // ----- Badge : réglages du Super Admin -----
  function chargerBadgeAdmin_() {
    const c = configApp || {};
    const couleur = document.getElementById("adminBadgeCouleur");
    if (!couleur) return;
    couleur.value = /^#[0-9a-fA-F]{6}$/.test(c.BadgeCouleur || "") ? c.BadgeCouleur : "#0b2f68";
    document.getElementById("adminBadgeNom").value = c.BadgeNom || "";
  }
  // Réduit le logo (128 px) pour qu'il reste léger dans la configuration.
  function reduireLogoBadge_(fichier) {
    return new Promise(function (resolve, reject) {
      const lecteur = new FileReader();
      lecteur.onerror = function () { reject(new Error("Lecture de l'image impossible.")); };
      lecteur.onload = function () {
        const img = new Image();
        img.onerror = function () { reject(new Error("Image non lisible.")); };
        img.onload = function () {
          const cote = 128, canvas = document.createElement("canvas");
          canvas.width = cote; canvas.height = cote;
          const ctx = canvas.getContext("2d");
          const echelle = Math.max(cote / img.width, cote / img.height);
          const w = img.width * echelle, h = img.height * echelle;
          ctx.drawImage(img, (cote - w) / 2, (cote - h) / 2, w, h);
          resolve(canvas.toDataURL(fichier.type === "image/png" ? "image/png" : "image/jpeg", 0.88));
        };
        img.src = lecteur.result;
      };
      lecteur.readAsDataURL(fichier);
    });
  }
  function sauvegarderBadge(reinitialiser) {
    const err = document.getElementById("erreurBadge");
    err.style.display = "none";
    const fichier = document.getElementById("adminBadgeLogo").files[0];
    const preparation = reinitialiser ? Promise.resolve({ couleur: "", nom: "", logo: "" }) :
      (fichier ? reduireLogoBadge_(fichier) : Promise.resolve(null)).then(function (logo) {
        return { couleur: document.getElementById("adminBadgeCouleur").value, nom: document.getElementById("adminBadgeNom").value.trim().slice(0, 40), logo: logo };
      });
    preparation.then(function (v) {
      const envois = [["BadgeCouleur", v.couleur], ["BadgeNom", v.nom]];
      if (v.logo !== null) envois.push(["BadgeLogo", v.logo]);        // sans nouveau fichier, on garde le logo actuel
      return envois.reduce(function (chaine, e) {
        return chaine.then(function () { return appelServeur("mettreAJourConfig", membreCourant.code, e[0], e[1]).then(function () { configApp[e[0]] = e[1]; }); });
      }, Promise.resolve());
    }).then(function () {
      appliquerBadgeConfig_();
      chargerBadgeAdmin_();
      document.getElementById("adminBadgeLogo").value = "";
      alert(reinitialiser ? "Badge rétabli." : "Badge enregistré.");
    }).catch(function (e) { err.textContent = "Erreur : " + e.message; err.style.display = "block"; });
  }

  // ==================== ADMINISTRATION ====================
  function chargerDonneesAdmin() {
    afficherNomsRubriquesAdmin_();
    chargerBadgeAdmin_();
    document.getElementById("adminNomAssoc").value = (configApp && configApp.NomAssociation) || "";
    document.getElementById("adminYoutube").value = (configApp && configApp.LienYoutube) || "";
    document.getElementById("adminYoutubeChannelId").value = (configApp && configApp.YoutubeChannelId) || "";
    document.getElementById("adminMontantPublication").value = (configApp && configApp.MontantPublication) || 2000;
    const estSuper_ = !!(membreCourant && membreCourant.role === "Admin_Super");
    document.getElementById("carteEmailContact").style.display = estSuper_ ? "block" : "none";
    document.getElementById("adminEmailContact").value = (configApp && configApp.EmailContact) || "";
    document.getElementById("adminTelContact").value = (configApp && configApp.TelephoneContact) || "";
    if (configApp && configApp.LogoBase64) {
      document.getElementById("logoPreview").innerHTML = '<img src="data:image/png;base64,' + configApp.LogoBase64 + '">';
    }
    const visibles = construireAdminSubtabs();
    if (visibles.length) afficherSousOnglet(visibles[0].id);
  }

  function gererUploadLogo(evt) {
    const fichier = evt.target.files[0];
    if (!fichier) return;
    const statut = document.getElementById("logoStatut");
    statut.textContent = "Traitement de l'image…";
    traiterImageCarree(fichier, 240, function (base64) {
      document.getElementById("logoPreview").innerHTML = '<img src="data:image/png;base64,' + base64 + '">';
      statut.textContent = "Envoi en cours…";
      appelServeur("televerserLogo", membreCourant.code, base64).then(function () {
        statut.textContent = "✓ Logo mis à jour.";
        configApp.LogoBase64 = base64;
        appliquerBranding(configApp);
      }).catch(function (err) { statut.textContent = "Erreur : " + err.message; });
    });
  }

  function sauvegarderApparence() {
    const nom = document.getElementById("adminNomAssoc").value.trim();
    const youtube = document.getElementById("adminYoutube").value.trim();
    const youtubeChannelId = document.getElementById("adminYoutubeChannelId").value.trim();
    const montantPublication = document.getElementById("adminMontantPublication").value;
    const err = document.getElementById("erreurApparence");
    err.style.display = "none";
    Promise.all([
      nom ? appelServeur("mettreAJourConfig", membreCourant.code, "NomAssociation", nom) : Promise.resolve(),
      youtube ? appelServeur("mettreAJourConfig", membreCourant.code, "LienYoutube", youtube) : Promise.resolve(),
      youtubeChannelId ? appelServeur("mettreAJourConfig", membreCourant.code, "YoutubeChannelId", youtubeChannelId) : Promise.resolve(),
      montantPublication !== "" ? appelServeur("mettreAJourConfig", membreCourant.code, "MontantPublication", Number(montantPublication)) : Promise.resolve()
    ]).then(function () {
      if (nom) { configApp.NomAssociation = nom; appliquerBranding(configApp); }
      if (youtube) configApp.LienYoutube = youtube;
      if (youtubeChannelId) configApp.YoutubeChannelId = youtubeChannelId;
      if (montantPublication !== "") configApp.MontantPublication = Number(montantPublication);
      alert("Informations enregistrées.");
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function enregistrerEmailContact() {
    const email = document.getElementById("adminEmailContact").value.trim();
    const err = document.getElementById("erreurEmailContact");
    err.style.display = "none";
    appelServeur("definirEmailContact", membreCourant.code, email).then(function () {
      configApp.EmailContact = email.toLowerCase();
      alert("E-mail de contact enregistré.");
    }).catch(function (e) { err.textContent = "Erreur : " + e.message; err.style.display = "block"; });
  }

  function enregistrerTelContact() {
    const tel = document.getElementById("adminTelContact").value.trim();
    const err = document.getElementById("erreurTelContact");
    err.style.display = "none";
    appelServeur("definirTelephoneContact", membreCourant.code, tel).then(function () {
      configApp.TelephoneContact = tel;
      alert("Numéro de contact enregistré.");
    }).catch(function (e) { err.textContent = "Erreur : " + e.message; err.style.display = "block"; });
  }

  function enregistrerLienGroupePriere() {
    const lien = document.getElementById("ggpLien").value.trim();
    const err = document.getElementById("erreurGroupePriere");
    err.style.display = "none";
    if (!lien) { err.textContent = "Le lien est requis."; err.style.display = "block"; return; }
    appelServeur("mettreAJourLienGroupePriere", membreCourant.code, lien).then(function () {
      configApp.LienGroupePriere = lien;
      alert("Lien du Groupe de prière enregistré.");
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function afficherGroupesAdmin(groupes) {
    groupes = groupes || [];
    const zone = document.getElementById("adminListeGroupes");
    if (!groupes.length) { zone.innerHTML = '<p class="empty-state">Aucun groupe.</p>'; return; }
    zone.innerHTML = groupes.map(function (g) {
      return '<div class="item-row">' +
        '<div><div class="item-nom">' + escapeHtml(g.NomGroupe) + '</div>' +
        '<div class="item-desc">' + escapeHtml(g.Description || "") + " · Code : <strong>" + escapeHtml(g.CodeAcces) + '</strong></div></div>' +
        '<button class="danger-outline small" onclick="supprimerGroupeAdmin(\'' + g.ID + '\')">Supprimer</button>' +
        '</div>';
    }).join("");
  }

  function creerGroupe() {
    const nom = document.getElementById("ngGroupeNom").value.trim();
    const desc = document.getElementById("ngGroupeDesc").value.trim();
    const lien = document.getElementById("ngGroupeLien").value.trim();
    const code = document.getElementById("ngGroupeCode").value.trim();
    const err = document.getElementById("erreurGroupe");
    err.style.display = "none";
    if (!nom || !lien) { err.textContent = "Nom et lien sont requis."; err.style.display = "block"; return; }
    appelServeur("ajouterGroupe", membreCourant.code, nom, desc, lien, code).then(function (res) {
      document.getElementById("ngGroupeNom").value = "";
      document.getElementById("ngGroupeDesc").value = "";
      document.getElementById("ngGroupeLien").value = "";
      document.getElementById("ngGroupeCode").value = "";
      alert("Groupe ajouté. Code d'accès à communiquer aux membres autorisés : " + res.codeGenere);
      appelServeur("getGroupesAdmin", membreCourant.code).then(afficherGroupesAdmin);
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function supprimerGroupeAdmin(id) {
    confirmerApp_("Supprimer ce groupe ?", function () {
    appelServeur("supprimerGroupe", membreCourant.code, id).then(function () {
      appelServeur("getGroupesAdmin", membreCourant.code).then(afficherGroupesAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  let seancesAdminCache = [];
  let seanceEnEditionId = null;

  function afficherSeancesAdmin(seances) {
    seancesAdminCache = seances || [];
    const zone = document.getElementById("adminListeSeances");
    if (!seancesAdminCache.length) { zone.innerHTML = '<p class="empty-state">Aucune séance.</p>'; return; }
    zone.innerHTML = seancesAdminCache.map(function (s) {
      const date = s.Date ? escapeHtml(String(s.Date)) : "Date à confirmer";
      const libellePrix = s.Type === "Payant" ? Number(s.Prix).toLocaleString("fr-FR") + " FCFA" : "Gratuite";
      const dateObj = s.Date ? new Date(s.Date) : null;
      const estPassee = dateObj && !isNaN(dateObj.getTime()) && dateObj.getTime() < Date.now() - 86400000;
      const pillMasquee = s.Cachee ? ' <span class="role-pill" style="background:#fdeaea;color:#b0121a;">Masquée</span>' : (estPassee ? ' <span class="role-pill" style="background:#f0f0f0;color:#777;">Passée</span>' : '');
      return '<div class="item-row">' +
        '<div><div class="item-nom">' + escapeHtml(s.Titre) + ' <span class="role-pill ' + (s.Type === "Payant" ? "role-admin" : "role-membre") + '">' + libellePrix + '</span>' + pillMasquee + '</div>' +
        '<div class="item-desc">' + date + (s.Heure ? " à " + escapeHtml(formaterHeureSeance_(s.Heure)) : "") + " · " + escapeHtml(s.Visibilite) + '</div></div>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap;">' +
        '<button class="secondary small" onclick="toggleVisibiliteSeanceClick(\'' + s.ID + '\')">' + (s.Cachee ? "👁️ Afficher" : "🚫 Masquer") + '</button>' +
        '<button class="secondary small" onclick="editerSeanceAdmin(\'' + s.ID + '\')">Modifier</button>' +
        '<button class="danger-outline small" onclick="supprimerSeanceAdmin(\'' + s.ID + '\')">Supprimer</button>' +
        '</div></div>';
    }).join("");
  }

  function toggleVisibiliteSeanceClick(id) {
    appelServeur("toggleVisibiliteSeance", membreCourant.code, id).then(function () {
      appelServeur("getSeancesAdmin", membreCourant.code).then(afficherSeancesAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }

  function editerSeanceAdmin(id) {
    const s = seancesAdminCache.find(function (x) { return x.ID === id; });
    if (!s) return;
    seanceEnEditionId = id;
    document.getElementById("etiquetteFormSeance").textContent = "Modifier la séance";
    document.getElementById("nsTitre").value = s.Titre || "";
    document.getElementById("nsDate").value = s.Date || "";
    document.getElementById("nsHeure").value = s.Heure || "";
    document.getElementById("nsLien").value = s.LienMeet || "";
    document.getElementById("nsVisibilite").value = s.Visibilite === "Public" ? "Public" : "Membres";
    document.getElementById("nsType").value = s.Type === "Payant" ? "Payant" : "Gratuit";
    document.getElementById("nsPrix").value = s.Prix || "";
    document.getElementById("nsPrixZone").style.display = s.Type === "Payant" ? "block" : "none";
    document.getElementById("btnValiderSeance").textContent = "Enregistrer les modifications";
    document.getElementById("btnAnnulerEditionSeance").style.display = "inline-flex";
    document.getElementById("nsTitre").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function annulerEditionSeance() {
    seanceEnEditionId = null;
    document.getElementById("etiquetteFormSeance").textContent = "Ajouter une séance directe";
    document.getElementById("nsTitre").value = "";
    document.getElementById("nsDate").value = "";
    document.getElementById("nsHeure").value = "";
    document.getElementById("nsLien").value = "";
    document.getElementById("nsType").value = "Gratuit";
    document.getElementById("nsPrix").value = "";
    document.getElementById("nsPrixZone").style.display = "none";
    document.getElementById("btnValiderSeance").textContent = "Ajouter la séance";
    document.getElementById("btnAnnulerEditionSeance").style.display = "none";
  }

  function creerSeance() {
    const titre = document.getElementById("nsTitre").value.trim();
    const date = document.getElementById("nsDate").value.trim();
    const heure = document.getElementById("nsHeure").value;
    const lien = document.getElementById("nsLien").value.trim();
    const visibilite = document.getElementById("nsVisibilite").value;
    const type = document.getElementById("nsType").value;
    const prix = document.getElementById("nsPrix").value;
    const err = document.getElementById("erreurSeance");
    err.style.display = "none";
    if (!titre || !lien) { err.textContent = "Titre et lien sont requis (la date est facultative)."; err.style.display = "block"; return; }
    if (type === "Payant" && (!prix || Number(prix) <= 0)) { err.textContent = "Indiquez un prix pour une séance payante."; err.style.display = "block"; return; }

    const action = seanceEnEditionId
      ? appelServeur("modifierSeance", membreCourant.code, seanceEnEditionId, titre, date, heure, lien, visibilite, type, prix)
      : appelServeur("ajouterSeance", membreCourant.code, titre, date, heure, lien, visibilite, type, prix);

    action.then(function () {
      annulerEditionSeance();
      appelServeur("getSeancesAdmin", membreCourant.code).then(afficherSeancesAdmin);
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function supprimerSeanceAdmin(id) {
    confirmerApp_("Supprimer cette séance ?", function () {
    appelServeur("supprimerSeance", membreCourant.code, id).then(function () {
      if (seanceEnEditionId === id) annulerEditionSeance();
      appelServeur("getSeancesAdmin", membreCourant.code).then(afficherSeancesAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  const LIBELLES_ROLES = { Membre: "Membre", Admin_TG: "Admin TG", Admin_SG: "Admin ICO", Admin_OG: "Admin OG", Admin_Super: "Super Admin", Admin_Perso: "Admin personnalisé" };

  // ==================== SÉLECTION MULTIPLE (Audios, Vidéos, Documents, Membres) ====================
  // Système réutilisable de cases à cocher + suppression groupée, commun aux 4 panneaux.
  const selectionsAdmin_ = { audios: new Set(), videos: new Set(), documents: new Set(), membres: new Set(), soumissions: new Set() };

  function construireBarreSelection_(cle) {
    return '<div class="barre-selection">' +
      '<label style="display:flex;align-items:center;gap:6px;font-size:12px;cursor:pointer;">' +
      '<input type="checkbox" class="case-select" id="toutSelectionner-' + cle + '" onchange="toggleToutSelectionner_(\'' + cle + '\')"> Tout sélectionner</label>' +
      '<button class="danger-outline small" style="width:auto;display:none;" id="btnSupprimerSelection-' + cle + '" onclick="supprimerSelection_(\'' + cle + '\')">🗑️ Supprimer la sélection (<span id="compteurSelection-' + cle + '">0</span>)</button>' +
      '</div>';
  }

  function toggleCaseSelection_(cle, id) {
    const set = selectionsAdmin_[cle];
    if (set.has(id)) set.delete(id); else set.add(id);
    mettreAJourBarreSelection_(cle);
  }

  function toggleToutSelectionner_(cle) {
    const set = selectionsAdmin_[cle];
    const toutCoche = document.getElementById("toutSelectionner-" + cle).checked;
    set.clear();
    document.querySelectorAll(".case-select-" + cle).forEach(function (c) {
      c.checked = toutCoche;
      if (toutCoche) set.add(c.dataset.id);
    });
    mettreAJourBarreSelection_(cle);
  }

  function mettreAJourBarreSelection_(cle) {
    const set = selectionsAdmin_[cle];
    const bouton = document.getElementById("btnSupprimerSelection-" + cle);
    const compteur = document.getElementById("compteurSelection-" + cle);
    if (compteur) compteur.textContent = set.size;
    if (bouton) bouton.style.display = set.size > 0 ? "inline-flex" : "none";
  }

  const RECHARGEMENTS_SELECTION_ = {
    audios: function () { appelServeur("getEnregistrements").then(afficherEnregistrementsAdmin); },
    videos: function () { appelServeur("getVideos").then(afficherVideosPlateformeAdmin); },
    documents: function () { appelServeur("getDocuments").then(afficherDocumentsAdmin); },
    membres: function () { appelServeur("getMembresAdmin", membreCourant.code).then(afficherMembresAdmin); },
    soumissions: function () { appelServeur("getSoumissionsAdmin", membreCourant.code).then(afficherSoumissionsAdmin); }
  };
  const FONCTIONS_SUPPRESSION_MULTIPLE_ = {
    audios: "supprimerEnregistrementsMultiples", videos: "supprimerVideosMultiples",
    documents: "supprimerDocumentsMultiples", membres: "supprimerMembresMultiples",
    soumissions: "supprimerSoumissionsMultiples"
  };
  const LIBELLES_SELECTION_ = { audios: "audio(s)", videos: "vidéo(s)", documents: "document(s)", membres: "membre(s)", soumissions: "soumission(s)" };

  function supprimerSelection_(cle) {
    const set = selectionsAdmin_[cle];
    if (!set.size) return;
    confirmerApp_("Supprimer les " + set.size + " " + LIBELLES_SELECTION_[cle] + " sélectionné(s) ? Cette action est irréversible.", function () {
    appelServeur(FONCTIONS_SUPPRESSION_MULTIPLE_[cle], membreCourant.code, Array.from(set)).then(function () {
      set.clear();
      RECHARGEMENTS_SELECTION_[cle]();
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  let membresAdminCache_ = [];

  function afficherMembresAdmin(data) {
    data = data || { total: 0, actifs: 0, liste: [] };
    document.getElementById("statTotal").textContent = data.total;
    document.getElementById("statActifs").textContent = data.actifs;
    document.getElementById("rechercheMembres").value = "";
    membresAdminCache_ = data.liste || [];
    afficherListeMembresAdmin_(membresAdminCache_);
  }

  function filtrerMembresAdmin() {
    const requete = document.getElementById("rechercheMembres").value.trim().toLowerCase();
    if (!requete) { afficherListeMembresAdmin_(membresAdminCache_); return; }
    const resultats = membresAdminCache_.filter(function (m) {
      const nomComplet = ((m.prenom || "") + " " + (m.nom || "")).toLowerCase();
      return nomComplet.indexOf(requete) !== -1 ||
        (m.telephone || "").toLowerCase().indexOf(requete) !== -1 ||
        (m.code || "").toLowerCase().indexOf(requete) !== -1;
    });
    afficherListeMembresAdmin_(resultats);
  }

  function afficherListeMembresAdmin_(liste) {
    liste = liste || [];
    selectionsAdmin_.membres.clear();
    const zone = document.getElementById("adminListeMembres");
    if (!liste.length) { zone.innerHTML = '<p class="empty-state">Aucun membre.</p>'; return; }
    const cartes = liste.slice(0, 100).map(function (m) {
      const nomAff = (m.prenom || m.nom) ? (m.prenom + " " + m.nom) : m.telephone;
      const pillClass = m.role === "Membre" ? "role-membre" : "role-admin";
      const codeEchappe = m.code.replace(/'/g, "&#39;");
      const options = Object.keys(LIBELLES_ROLES).filter(function (r) { return r !== "Admin_Perso" || m.role === "Admin_Perso"; }).map(function (r) {
        return '<option value="' + r + '"' + (m.role === r ? " selected" : "") + (r === "Admin_Perso" ? " disabled" : "") + '>' + LIBELLES_ROLES[r] + '</option>';
      }).join("");
      const estSuspendu = m.statut === "Suspendu";
      const statutAffiche = estSuspendu && m.dateFinSuspension ? "Suspendu jusqu'au " + m.dateFinSuspension : m.statut;
      const actionsCompte = estSuspendu
        ? '<button class="secondary small" onclick="reactiverMembreClick(\'' + codeEchappe + '\')">Réactiver</button>'
        : '<input type="number" min="1" value="7" id="joursSuspension-' + m.code + '" style="width:56px;margin:0;padding:6px;font-size:11px;" title="Nombre de jours">' +
          '<button class="secondary small" onclick="suspendreMembreClick(\'' + codeEchappe + '\')">Suspendre</button>';
      const boutonAuteur = m.estAuteur
        ? '<button class="danger-outline small" onclick="toggleAuteurClick(\'' + codeEchappe + '\', false)">Retirer Auteur</button>'
        : '<button class="secondary small" onclick="toggleAuteurClick(\'' + codeEchappe + '\', true)">✍️ Rendre Auteur</button>';
      const boutonExoneration = m.estAuteur
        ? (m.exonerePublication
          ? '<button class="danger-outline small" onclick="toggleExonerationClick(\'' + codeEchappe + '\')">Retirer l\'exonération</button>'
          : '<button class="secondary small" onclick="toggleExonerationClick(\'' + codeEchappe + '\')">🆓 Exonérer des frais</button>')
        : '';
      const boutonTv = m.estTvOwner
        ? '<button class="danger-outline small" onclick="toggleTvOwnerClick(\'' + codeEchappe + '\', false)">Retirer TV owner</button>'
        : '<button class="secondary small" onclick="toggleTvOwnerClick(\'' + codeEchappe + '\', true)">📺 Rendre TV owner</button>';
      return '<div class="item-block">' +
        '<div class="item-row" style="border:none;padding-bottom:8px;">' +
        '<input type="checkbox" class="case-select case-select-membres" data-id="' + codeEchappe + '" onchange="toggleCaseSelection_(\'membres\',\'' + codeEchappe + '\')">' +
        '<div><div class="item-nom">' + escapeHtml(nomAff) + (m.estAuteur ? ' <span class="vis-pill">Auteur</span>' : '') + (m.estTvOwner ? ' <span class="vis-pill">TV</span>' : '') + (m.exonerePublication ? ' <span class="vis-pill" style="background:#e6f7ee;color:#168653;">Exonéré</span>' : '') + '</div>' +
        '<div class="item-desc">' + escapeHtml(m.telephone || "") + " · " + escapeHtml(statutAffiche) + '</div></div>' +
        '<div style="display:flex; align-items:center; gap:8px;">' +
        '<span class="role-pill ' + pillClass + '">' + escapeHtml(LIBELLES_ROLES[m.role] || m.role) + "</span>" +
        '<select style="width:auto;margin:0;padding:6px 8px;font-size:11px;" onchange="changerRole(\'' + codeEchappe + '\', this.value)">' + options + '</select>' +
        '</div></div>' +
        '<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">' +
        actionsCompte + boutonAuteur + boutonExoneration + boutonTv +
        (m.role !== "Admin_Super" ? '<button class="secondary small" onclick="ouvrirDroitsAdmin_(\'' + codeEchappe + '\')">🔐 Droits d\'admin</button>' : '') +
        '<button class="secondary small" onclick="ouvrirEditionBadge_(\'' + codeEchappe + '\',\'' + jsq_(nomAff) + '\')">🪪 Badge</button>' +
        '<button class="danger-outline small" onclick="supprimerMembreClick(\'' + codeEchappe + '\',\'' + jsq_(nomAff) + '\')">Retirer</button>' +
        '</div></div>';
    });
    zone.innerHTML = construireBarreSelection_("membres") + cartes.join("");
  }

  function toggleExonerationClick(code) {
    appelServeur("toggleExonerationPublication", membreCourant.code, code).then(function () {
      appelServeur("getMembresAdmin", membreCourant.code).then(afficherMembresAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }

  // --- Édition du badge d'un membre (Super Admin uniquement) ---
  let badgeEditionCode = null;
  let badgeEditionNouvellePhoto = null;

  function ouvrirEditionBadge_(code, nomAffiche) {
    badgeEditionCode = code;
    badgeEditionNouvellePhoto = null;
    const overlay = document.createElement("div");
    overlay.className = "badge-edition-overlay";
    overlay.style.cssText = "position:fixed;inset:0;background:rgba(10,20,40,.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;";
    overlay.onclick = function (e) { if (e.target === overlay) overlay.remove(); };
    const box = document.createElement("div");
    box.style.cssText = "background:#fff;border-radius:18px;max-width:400px;width:100%;max-height:85vh;overflow-y:auto;padding:20px;";
    box.innerHTML =
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:14px;">' +
      '<div class="item-nom">🪪 Badge de ' + escapeHtml(nomAffiche) + '</div>' +
      '<button class="secondary small" style="width:auto;flex-shrink:0;" onclick="this.closest(\'.badge-edition-overlay\').remove()">✕</button></div>' +
      '<div id="badgeEditionPreviewZone" style="width:100px;height:100px;border-radius:50%;overflow:hidden;background:#eef3f9;margin:0 auto 12px;display:flex;align-items:center;justify-content:center;font-size:32px;">👤</div>' +
      '<label class="file-btn-label" style="display:block;text-align:center;">📷 Changer la photo<input type="file" id="badgeEditionFichier" accept="image/*" style="display:none;" onchange="previsualiserPhotoBadgeEdition_(event)"></label>' +
      '<label class="field-label" style="margin-top:14px;">Nom</label>' +
      '<input id="badgeEditionNom" type="text">' +
      '<label class="field-label">Prénom</label>' +
      '<input id="badgeEditionPrenom" type="text">' +
      '<label class="field-label">Rôle dans l\'église</label>' +
      '<input id="badgeEditionRole" type="text">' +
      '<div id="erreurBadgeEdition" class="error" style="display:none;margin-top:10px;"></div>' +
      '<button class="flame full-mt" onclick="enregistrerEditionBadge_()">Enregistrer</button>';
    overlay.appendChild(box);
    document.body.appendChild(overlay);

    appelServeur("getMembreDetailAdmin", membreCourant.code, code).then(function (res) {
      if (!res.succes) return;
      document.getElementById("badgeEditionNom").value = res.nom || "";
      document.getElementById("badgeEditionPrenom").value = res.prenom || "";
      document.getElementById("badgeEditionRole").value = res.roleEglise || "";
      if (res.photoBase64) {
        document.getElementById("badgeEditionPreviewZone").innerHTML = '<img src="data:image/jpeg;base64,' + res.photoBase64 + '" style="width:100%;height:100%;object-fit:cover;">';
      }
    });
  }

  function previsualiserPhotoBadgeEdition_(event) {
    const fichier = event.target.files[0];
    if (!fichier) return;
    traiterImageCarree(fichier, 400, function (base64) {
      badgeEditionNouvellePhoto = base64;
      document.getElementById("badgeEditionPreviewZone").innerHTML = '<img src="data:image/jpeg;base64,' + base64 + '" style="width:100%;height:100%;object-fit:cover;">';
    });
  }

  function enregistrerEditionBadge_() {
    const nom = document.getElementById("badgeEditionNom").value.trim();
    const prenom = document.getElementById("badgeEditionPrenom").value.trim();
    const role = document.getElementById("badgeEditionRole").value.trim();
    const err = document.getElementById("erreurBadgeEdition");
    err.style.display = "none";
    appelServeur("modifierInfosBadgeMembre", membreCourant.code, badgeEditionCode, badgeEditionNouvellePhoto || "", nom, prenom, role).then(function () {
      document.querySelector(".badge-edition-overlay").remove();
      appelServeur("getMembresAdmin", membreCourant.code).then(afficherMembresAdmin);
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  // ----- Droits d'administration : le Super Admin coche ce qu'un membre peut gérer -----
  function ouvrirDroitsAdmin_(code) {
    const m = (membresAdminCache_ || []).find(function (x) { return x.code === code; });
    if (!m) return;
    const nom = ((m.prenom || "") + " " + (m.nom || "")).trim() || m.telephone || code;
    const droits = [
      { id: "finances", titre: "Finances", aide: "Paiements, collectes et offrandes" },
      { id: "demandesPriere", titre: "Demandes de prière", aide: "Lire et traiter les demandes de prière" },
      { id: "contenus", titre: "Contenus", aide: "Groupes, séances, audios, documents, vidéos, TV, affiches, actualités, soumissions des auteurs" },
      { id: "evenements", titre: "Événements", aide: "Valider les événements, gérer les organisateurs, leurs revenus et leurs versements" },
      { id: "systeme", titre: "Système", aide: "Membres, annonces, messages, codes d'accès, apparence. Donne beaucoup de pouvoir : à réserver aux personnes de confiance." }
    ];
    const actuels = Array.isArray(m.permissions) ? m.permissions : [];
    const fond = document.createElement("div");
    fond.style.cssText = "position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9000;display:flex;align-items:center;justify-content:center;padding:16px;";
    fond.innerHTML = '<div style="background:var(--card,#fff);color:var(--text,#1b2430);border-radius:16px;max-width:420px;width:100%;max-height:90vh;overflow:auto;padding:18px;">' +
      '<p class="field-label" style="margin-top:0;">🔐 Droits d\'administration</p>' +
      '<p class="item-desc">' + escapeHtml(nom) + ' — cochez ce que cette personne peut gérer. Sans aucune case cochée, elle redevient simple membre.</p>' +
      droits.map(function (d) {
        return '<label style="display:flex;gap:10px;align-items:flex-start;padding:8px 0;cursor:pointer;">' +
          '<input type="checkbox" class="case-droit" value="' + d.id + '" style="width:auto;margin:3px 0 0;"' + (actuels.indexOf(d.id) !== -1 ? " checked" : "") + '>' +
          '<span><strong>' + d.titre + '</strong><br><span class="item-desc">' + d.aide + '</span></span></label>';
      }).join("") +
      '<div id="droitsMessage" class="error" style="display:none;margin-top:8px;"></div>' +
      '<div style="display:flex;gap:8px;margin-top:12px;"><button class="secondary" id="droitsAnnuler">Annuler</button><button class="flame" id="droitsEnregistrer">Enregistrer</button></div></div>';
    document.body.appendChild(fond);
    const fermer = function () { fond.remove(); };
    fond.querySelector("#droitsAnnuler").onclick = fermer;
    fond.addEventListener("click", function (e) { if (e.target === fond) fermer(); });
    fond.querySelector("#droitsEnregistrer").onclick = function () {
      const choisis = Array.prototype.map.call(fond.querySelectorAll(".case-droit:checked"), function (c) { return c.value; });
      const bouton = this;
      bouton.disabled = true; bouton.textContent = "Enregistrement…";
      appelServeur("definirDroitsAdmin", membreCourant.code, code, choisis).then(function (res) {
        if (!res.succes) throw new Error(res.message || "Échec de l'enregistrement.");
        fermer();
        appelServeur("getMembresAdmin", membreCourant.code).then(afficherMembresAdmin);
      }).catch(function (e) {
        bouton.disabled = false; bouton.textContent = "Enregistrer";
        const z = fond.querySelector("#droitsMessage"); z.textContent = "Erreur : " + e.message; z.style.display = "block";
      });
    };
  }

  function changerRole(code, nouveauRole) {
    appelServeur("definirRoleMembre", membreCourant.code, code, nouveauRole).then(function () {
      appelServeur("getMembresAdmin", membreCourant.code).then(afficherMembresAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }

  function suspendreMembreClick(code) {
    const inputJours = document.getElementById("joursSuspension-" + code);
    const jours = inputJours ? Number(inputJours.value) || 7 : 7;
    confirmerApp_("Suspendre ce membre pour " + jours + " jour(s) ? Il ne pourra plus se connecter pendant cette période.", function () {
    appelServeur("suspendreMembre", membreCourant.code, code, jours).then(function () {
      appelServeur("getMembresAdmin", membreCourant.code).then(afficherMembresAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  function reactiverMembreClick(code) {
    appelServeur("reactiverMembre", membreCourant.code, code).then(function () {
      appelServeur("getMembresAdmin", membreCourant.code).then(afficherMembresAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }

  function supprimerMembreClick(code, nom) {
    confirmerApp_('Retirer définitivement "' + nom + '" de la plateforme ? Cette action est irréversible (son historique de paiements est conservé pour la comptabilité).', function () {
    appelServeur("supprimerMembre", membreCourant.code, code).then(function () {
      appelServeur("getMembresAdmin", membreCourant.code).then(afficherMembresAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  function toggleAuteurClick(code, estAuteur) {
    appelServeur("definirStatutAuteur", membreCourant.code, code, estAuteur).then(function () {
      appelServeur("getMembresAdmin", membreCourant.code).then(afficherMembresAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }

  // ==================== ANNONCES GROUPÉES (Super Admin) ====================
  function chargerMembresPourAnnonce() {
    document.getElementById("caseToutCocher").checked = false;
    appelServeur("getMembresAdmin", membreCourant.code).then(function (data) {
      const liste = data.liste || [];
      const zone = document.getElementById("listeMembresAnnonce");
      if (!liste.length) { zone.innerHTML = '<p class="empty-state">Aucun membre.</p>'; return; }
      zone.innerHTML = liste.map(function (m) {
        const nomAff = (m.prenom || m.nom) ? (m.prenom + " " + m.nom) : m.telephone;
        const codeEchappe = m.code.replace(/"/g, "&quot;");
        return '<label style="display:flex;align-items:center;gap:8px;padding:5px 0;font-size:12px;">' +
          '<input type="checkbox" value="' + codeEchappe + '" class="case-annonce" style="width:auto;margin:0;">' +
          escapeHtml(nomAff) + '</label>';
      }).join("");
    }).catch(function (err) { afficherErreurZone("listeMembresAnnonce", err); });
  }

  function toggleToutCocherMembres() {
    const coche = document.getElementById("caseToutCocher").checked;
    document.querySelectorAll(".case-annonce").forEach(function (c) { c.checked = coche; });
  }

  function basculerTypeAnnonce() {
    const type = document.getElementById("typeAnnonce").value;
    document.getElementById("zoneAnnonceTexte").style.display = type === "Texte" ? "block" : "none";
    document.getElementById("zoneAnnonceAudio").style.display = type === "Audio" ? "block" : "none";
    document.getElementById("zoneAnnonceDocument").style.display = type === "Document" ? "block" : "none";
  }

  // --- Enregistrement du message vocal d'une annonce (indépendant de la messagerie) ---
  let audioAnnonceBase64 = null;
  let enregistreurAnnonce = null;
  let morceauxAnnonce = [];
  let chronoAnnonceInterval = null;
  let secondesAnnonce = 0;

  function toggleEnregistrementAnnonce() {
    if (enregistreurAnnonce && enregistreurAnnonce.state === "recording") { enregistreurAnnonce.stop(); return; }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { alert("L'enregistrement audio n'est pas supporté par ce navigateur."); return; }
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (flux) {
      morceauxAnnonce = [];
      enregistreurAnnonce = new MediaRecorder(flux);
      enregistreurAnnonce.ondataavailable = function (e) { if (e.data.size > 0) morceauxAnnonce.push(e.data); };
      enregistreurAnnonce.onstop = function () {
        flux.getTracks().forEach(function (t) { t.stop(); });
        clearInterval(chronoAnnonceInterval);
        document.getElementById("chronoAnnonceAudio").style.display = "none";
        document.getElementById("btnMicroAnnonce").classList.remove("enregistrement");
        document.getElementById("btnMicroAnnonce").textContent = "🎙️ Enregistrer le message vocal";
        const blob = new Blob(morceauxAnnonce, { type: "audio/webm" });
        const lecteur = new FileReader();
        lecteur.onload = function () {
          audioAnnonceBase64 = lecteur.result.split(",")[1];
          document.getElementById("messageAudioAnnonceEnregistre").textContent = "✓ Message vocal prêt à être envoyé (" + secondesAnnonce + " s).";
        };
        lecteur.readAsDataURL(blob);
      };
      enregistreurAnnonce.start();
      secondesAnnonce = 0;
      document.getElementById("messageAudioAnnonceEnregistre").textContent = "";
      document.getElementById("chronoAnnonceAudio").style.display = "inline";
      document.getElementById("btnMicroAnnonce").classList.add("enregistrement");
      document.getElementById("btnMicroAnnonce").textContent = "⏹️ Arrêter";
      chronoAnnonceInterval = setInterval(function () {
        secondesAnnonce++;
        const m = String(Math.floor(secondesAnnonce / 60)).padStart(2, "0");
        const s = String(secondesAnnonce % 60).padStart(2, "0");
        document.getElementById("chronoAnnonceAudio").textContent = m + ":" + s;
      }, 1000);
    }).catch(function () { alert("Impossible d'accéder au microphone."); });
  }

  function envoyerAnnonceClick() {
    const err = document.getElementById("erreurAnnonce");
    err.style.display = "none";
    const codes = Array.prototype.slice.call(document.querySelectorAll(".case-annonce:checked")).map(function (c) { return c.value; });
    if (!codes.length) { err.textContent = "Sélectionnez au moins un membre."; err.style.display = "block"; return; }
    const type = document.getElementById("typeAnnonce").value;

    function finaliserEnvoi(texte, base64, nomFichier, mimeType) {
      appelServeur("envoyerAnnonceGroupee", membreCourant.code, codes, texte, type, base64, nomFichier, mimeType).then(function (res) {
        alert("Annonce envoyée à " + res.nombreDestinataires + " membre(s).");
        document.getElementById("texteAnnonce").value = "";
        document.getElementById("texteAnnonceAudio").value = "";
        document.getElementById("texteAnnonceDocument").value = "";
        document.getElementById("fichierAnnonceDocument").value = "";
        document.getElementById("messageAudioAnnonceEnregistre").textContent = "";
        audioAnnonceBase64 = null;
        document.querySelectorAll(".case-annonce:checked").forEach(function (c) { c.checked = false; });
        document.getElementById("caseToutCocher").checked = false;
      }).catch(function (e) {
        err.textContent = "Erreur : " + e.message;
        err.style.display = "block";
      });
    }

    if (type === "Texte") {
      const texte = document.getElementById("texteAnnonce").value.trim();
      if (!texte) { err.textContent = "Le texte est requis."; err.style.display = "block"; return; }
      finaliserEnvoi(texte, null, null, null);
    } else if (type === "Audio") {
      if (!audioAnnonceBase64) { err.textContent = "Enregistrez d'abord un message vocal."; err.style.display = "block"; return; }
      finaliserEnvoi(document.getElementById("texteAnnonceAudio").value.trim(), audioAnnonceBase64, "annonce.webm", "audio/webm");
    } else {
      const fichier = document.getElementById("fichierAnnonceDocument").files[0];
      if (!fichier) { err.textContent = "Choisissez un fichier à joindre."; err.style.display = "block"; return; }
      const lecteur = new FileReader();
      lecteur.onload = function () {
        finaliserEnvoi(document.getElementById("texteAnnonceDocument").value.trim(), lecteur.result.split(",")[1], fichier.name, fichier.type || "application/octet-stream");
      };
      lecteur.readAsDataURL(fichier);
    }
  }

  function afficherPaiementsAdmin(paiements) {
    paiements = paiements || [];
    const zone = document.getElementById("adminListePaiements");
    if (!paiements.length) { zone.innerHTML = '<p class="empty-state">Aucun paiement enregistré.</p>'; return; }
    zone.innerHTML = '<table class="mini-table"><tr><th>Date</th><th>Membre</th><th>Catégorie</th><th>Type</th><th>Montant</th><th>Statut</th><th>Action</th></tr>' +
      paiements.map(function (p) {
        const date = p.Date ? new Date(p.Date).toLocaleDateString("fr-FR") : "";
        const okClass = p.Statut === "Confirmé" ? "success-text" : "error";
        const action = p.Statut === "Confirmé"
          ? "✓"
          : '<button class="small secondary" onclick="validerPaiementAdminClick(\'' + p.TransactionID + '\')">Valider</button>';
        return "<tr><td>" + date + "</td><td>" + escapeHtml(p.Nom || p.CodeAffiche) + "</td>" +
          "<td>" + escapeHtml(p.Categorie || "Cotisation") + "</td>" +
          "<td>" + escapeHtml(p.TypeCotisation || "—") + "</td>" +
          "<td>" + Number(p.Montant).toLocaleString("fr-FR") + "</td>" +
          '<td class="' + okClass + '">' + escapeHtml(p.Statut) + "</td><td>" + action + "</td></tr>";
      }).join("") + "</table>";
  }

  function validerPaiementAdminClick(transactionId) {
    confirmerApp_("Confirmer que ce paiement a bien été reçu ?", function () {
    appelServeur("validerPaiementAdmin", membreCourant.code, transactionId).then(function () {
      appelServeur("getPaiementsAdmin", membreCourant.code).then(afficherPaiementsAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  function enregistrerPaiementManuelAdmin() {
    const identifiant = document.getElementById("pmIdentifiant").value.trim();
    const type = document.getElementById("pmType").value.trim();
    const categorie = document.getElementById("pmCategorie").value;
    const montant = document.getElementById("pmMontant").value;
    const err = document.getElementById("erreurPaiementManuel");
    err.style.display = "none";
    if (!identifiant || !montant) { err.textContent = "Le membre et le montant sont requis."; err.style.display = "block"; return; }
    appelServeur("enregistrerPaiementManuel", membreCourant.code, identifiant, type, montant, categorie).then(function (res) {
      if (!res.succes) { err.textContent = res.message || "Impossible d'enregistrer ce paiement."; err.style.display = "block"; return; }
      document.getElementById("pmIdentifiant").value = "";
      document.getElementById("pmType").value = "";
      document.getElementById("pmMontant").value = "";
      appelServeur("getPaiementsAdmin", membreCourant.code).then(afficherPaiementsAdmin);
      alert("Paiement enregistré et confirmé.");
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  let messagesAdminCache = [];

  function afficherMessagesAdmin(messages) {
    messages = messages || [];
    const zone = document.getElementById("adminListeMessages");
    if (!messages.length) { zone.innerHTML = '<p class="empty-state">Aucun message reçu.</p>'; return; }
    zone.innerHTML = messages.map(function (m) {
      const date = m.Date ? new Date(m.Date).toLocaleDateString("fr-FR") : "";
      const pillClass = m.Statut === "Traité" ? "statut-traite" : "statut-nouveau";
      const contenuMessage = m.TypeMessage === "Audio"
        ? '' + lecteurAudioDrive_(m.Message) + ''
        : '<p style="font-size:14px; margin:8px 0;">' + escapeHtml(m.Message) + "</p>";
      const reponseExistante = (m.Reponse && m.ReponseType !== "Audio") ? escapeHtml(m.Reponse) : "";
      const reponseAudioExistante = (m.Reponse && m.ReponseType === "Audio")
        ? '<div class="item-desc" style="margin-bottom:6px;">Réponse vocale déjà envoyée :</div>' + lecteurAudioDrive_(m.Reponse) + ''
        : "";
      return '<div class="admin-message-card">' +
        '<div class="item-row" style="padding-top:0;">' +
        '<div><div class="item-nom">' + escapeHtml(m.NomMembre) + '</div><div class="item-desc">' + date + "</div></div>" +
        '<span class="statut-pill ' + pillClass + '">' + escapeHtml(m.Statut) + "</span>" +
        "</div>" +
        contenuMessage +
        reponseAudioExistante +
        '<textarea id="reponse-' + m.ID + '" rows="2" placeholder="Votre réponse écrite…">' + reponseExistante + "</textarea>" +
        '<div style="display:flex;gap:8px;align-items:center;">' +
        '<button class="small secondary" onclick="envoyerReponse(\'' + m.ID + '\')">Répondre par écrit</button>' +
        '<button class="small btn-micro" id="btnMicroReponse-' + m.ID + '" style="width:auto;flex-shrink:0;" onclick="toggleEnregistrementAudio(\'' + m.ID + '\')">🎙️</button>' +
        '<span class="chrono-enregistrement" id="chronoReponse-' + m.ID + '" style="display:none;font-size:11px;">00:00</span>' +
        "</div>" +
        "</div>";
    }).join("");
  }

  function filtrerMessagesAdmin() {
    const requete = document.getElementById("rechercheMessagesAdmin").value.trim().toLowerCase();
    if (!requete) { afficherMessagesAdmin(messagesAdminCache); return; }
    afficherMessagesAdmin(messagesAdminCache.filter(function (m) {
      return (m.NomMembre || "").toLowerCase().indexOf(requete) !== -1 ||
        (m.TypeMessage !== "Audio" && (m.Message || "").toLowerCase().indexOf(requete) !== -1) ||
        (m.ReponseType !== "Audio" && (m.Reponse || "").toLowerCase().indexOf(requete) !== -1);
    }));
  }

  function envoyerReponse(idMessage) {
    const texte = document.getElementById("reponse-" + idMessage).value.trim();
    if (!texte) return;
    appelServeur("repondreMessage", membreCourant.code, idMessage, texte).then(function () {
      appelServeur("getMessagesAdmin", membreCourant.code).then(function (data) { messagesAdminCache = data || []; afficherMessagesAdmin(messagesAdminCache); });
      chargerCompteursEtBadges();
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }

  function afficherTypesCotisationAdmin(types) {
    types = types || [];
    const zone = document.getElementById("adminListeTypesCotisation");
    if (!types.length) { zone.innerHTML = '<p class="empty-state">Aucune collecte.</p>'; return; }
    zone.innerHTML = types.map(function (t) {
      const aObjectif = Number(t.MontantObjectif) > 0;
      const barre = aObjectif
        ? '<div class="cotisation-progress-track"><div class="cotisation-progress-fill" style="width:' + t.Pourcentage + '%;"></div></div>' +
          '<div class="cotisation-montants-row"><span>' + Number(t.MontantCollecte).toLocaleString("fr-FR") + ' F collectés (' + t.Pourcentage + '%)</span>' +
          '<span>Objectif : ' + Number(t.MontantObjectif).toLocaleString("fr-FR") + ' F</span></div>'
        : '';
      const dates = (t.DateDebut || t.DateFin)
        ? '<div class="cotisation-dates">' + (t.DateDebut ? "Du " + new Date(t.DateDebut).toLocaleDateString("fr-FR") : "") +
          (t.DateFin ? " au " + new Date(t.DateFin).toLocaleDateString("fr-FR") : "") + '</div>'
        : '';
      return '<div class="item-block">' +
        '<div class="item-row" style="border:none;padding:0;">' +
        '<div><div class="item-nom">' + escapeHtml(t.Nom) + '</div>' +
        '<div class="item-desc">Suggéré : ' + Number(t.Montant).toLocaleString("fr-FR") + " FCFA · " + escapeHtml(t.Periodicite) + '</div>' + dates + '</div>' +
        '<button class="danger-outline small" onclick="supprimerTypeCotisationAdmin(\'' + t.ID + '\')">Supprimer</button>' +
        '</div>' + barre +
        '</div>';
    }).join("");
  }

  function creerTypeCotisation() {
    const nom = document.getElementById("ntcNom").value.trim();
    const montant = document.getElementById("ntcMontant").value;
    const objectif = document.getElementById("ntcObjectif").value;
    const dateDebut = document.getElementById("ntcDateDebut").value;
    const dateFin = document.getElementById("ntcDateFin").value;
    const periodicite = document.getElementById("ntcPeriodicite").value;
    const err = document.getElementById("erreurTypeCotisation");
    err.style.display = "none";
    if (!nom || !montant) { err.textContent = "Le nom et le montant suggéré sont requis."; err.style.display = "block"; return; }
    appelServeur("ajouterTypeCotisation", membreCourant.code, nom, montant, objectif, dateDebut, dateFin, periodicite).then(function () {
      document.getElementById("ntcNom").value = "";
      document.getElementById("ntcMontant").value = "";
      document.getElementById("ntcObjectif").value = "";
      document.getElementById("ntcDateDebut").value = "";
      document.getElementById("ntcDateFin").value = "";
      appelServeur("getTypesCotisation").then(afficherTypesCotisationAdmin);
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function supprimerTypeCotisationAdmin(id) {
    confirmerApp_("Supprimer cette collecte ?", function () {
    appelServeur("supprimerTypeCotisation", membreCourant.code, id).then(function () {
      appelServeur("getTypesCotisation").then(afficherTypesCotisationAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  // ==================== AUDIOS (admin) ====================
  let couverturesEnCours = {};

  function convertirImageEnBase64_(fichier, callback) {
    const image = new Image();
    const url = URL.createObjectURL(fichier);
    image.onload = function () {
      const maxDim = 500;
      let w = image.width, h = image.height;
      if (w > maxDim || h > maxDim) {
        if (w > h) { h = Math.round(h * maxDim / w); w = maxDim; } else { w = Math.round(w * maxDim / h); h = maxDim; }
      }
      const canvas = document.createElement("canvas");
      canvas.width = w; canvas.height = h;
      canvas.getContext("2d").drawImage(image, 0, 0, w, h);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
      URL.revokeObjectURL(url);
      callback(dataUrl.split(",")[1], dataUrl);
    };
    image.src = url;
  }

  function previsualiserCoverGenerique(event, imgId, zoneId, cle) {
    const fichier = event.target.files[0];
    if (!fichier) return;
    convertirImageEnBase64_(fichier, function (base64, dataUrl) {
      couverturesEnCours[cle] = base64;
      document.getElementById(imgId).src = dataUrl;
      document.getElementById(zoneId).style.display = "block";
    });
  }

  function remplirSelecteurCategoriesAudio() {
    const select = document.getElementById("recCategorie");
    select.innerHTML = "";
    const liste = (categoriesAudioCache || CATEGORIES_AUDIO_DEFAUT.map(function (n) { return { Nom: n }; }));
    liste.forEach(function (cat) {
      const nom = typeof cat === "string" ? cat : cat.Nom;
      const option = document.createElement("option");
      option.value = nom; option.textContent = nom;
      select.appendChild(option);
    });
  }

  function chargerCategoriesAudioAdmin() {
    appelServeur("getCategoriesAudioAdmin").then(afficherCategoriesAudioAdmin).catch(function (err) { afficherErreurZone("adminListeCategoriesAudio", err); });
  }

  function afficherCategoriesAudioAdmin(categories) {
    categories = categories || [];
    categoriesAudioCache = categories;
    remplirSelecteurCategoriesAudio();
    const zone = document.getElementById("adminListeCategoriesAudio");
    if (!categories.length) { zone.innerHTML = '<p class="empty-state">Aucune catégorie.</p>'; return; }
    zone.innerHTML = categories.map(function (c) {
      const cover = c.CoverBase64 ? '<img src="data:image/jpeg;base64,' + c.CoverBase64 + '" style="width:40px;height:40px;object-fit:cover;border-radius:8px;">' : '<div style="width:40px;height:40px;border-radius:8px;background:#eef3f9;display:flex;align-items:center;justify-content:center;">🎧</div>';
      return '<div class="item-row" style="padding:8px 0;">' +
        '<div style="display:flex;align-items:center;gap:8px;flex:1;">' + cover +
        '<input type="text" value="' + escapeHtml(c.Nom) + '" id="catAudio-' + c.ID + '" style="margin:0;"></div>' +
        '<div style="display:flex;gap:6px;">' +
        '<label class="file-btn-label" style="padding:6px 9px;font-size:10px;">🖼️<input type="file" accept="image/*" style="display:none;" onchange="changerImageCategorieAudio(event,\'' + c.ID + '\')"></label>' +
        '<button class="secondary small" style="width:auto;" onclick="modifierCategorieAudioClick(\'' + c.ID + '\')">💾</button>' +
        '<button class="danger-outline small" style="width:auto;" onclick="supprimerCategorieAudioClick(\'' + c.ID + '\')">🗑️</button>' +
        '</div></div>';
    }).join("");
  }

  function changerImageCategorieAudio(event, id) {
    const fichier = event.target.files[0];
    if (!fichier) return;
    convertirImageEnBase64_(fichier, function (base64) {
      appelServeur("modifierImageCategorieAudio", membreCourant.code, id, base64).then(function () {
        chargerCategoriesAudioAdmin();
      }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  function creerCategorieAudioClick() {
    const nom = document.getElementById("nouvelleCategorieAudio").value.trim();
    if (!nom) return;
    appelServeur("ajouterCategorieAudio", membreCourant.code, nom).then(function () {
      document.getElementById("nouvelleCategorieAudio").value = "";
      chargerCategoriesAudioAdmin();
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }

  function modifierCategorieAudioClick(id) {
    const nouveauNom = document.getElementById("catAudio-" + id).value.trim();
    if (!nouveauNom) return;
    appelServeur("modifierCategorieAudio", membreCourant.code, id, nouveauNom).then(function () {
      chargerCategoriesAudioAdmin();
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }

  function supprimerCategorieAudioClick(id) {
    confirmerApp_("Supprimer cette catégorie ?", function () {
    appelServeur("supprimerCategorieAudio", membreCourant.code, id).then(function () {
      chargerCategoriesAudioAdmin();
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  function afficherEnregistrementsAdmin(enregistrements) {
    if (!categoriesAudioCache) { chargerCategoriesAudioAdmin(); } else { remplirSelecteurCategoriesAudio(); }
    enregistrements = enregistrements || [];
    selectionsAdmin_.audios.clear();
    const zone = document.getElementById("adminListeEnregistrements");
    if (!enregistrements.length) { zone.innerHTML = '<p class="empty-state">Aucun audio.</p>'; return; }
    const cartes = enregistrements.map(function (a) {
      const libellePrix = a.Type === "Payant" ? Number(a.Prix).toLocaleString("fr-FR") + " FCFA" : "Gratuit";
      return '<div class="item-row">' +
        '<input type="checkbox" class="case-select case-select-audios" data-id="' + a.ID + '" onchange="toggleCaseSelection_(\'audios\',\'' + a.ID + '\')">' +
        '<div><div class="item-nom">🎧 ' + escapeHtml(a.Titre) + ' <span class="role-pill ' + (a.Type === "Payant" ? "role-admin" : "role-membre") + '">' + libellePrix + '</span></div>' +
        '<div class="item-desc">' + (a.Auteur ? "Par " + escapeHtml(a.Auteur) + " · " : "") + escapeHtml(a.Categorie) + " · " + escapeHtml(a.Visibilite) + " · Ajouté le " + escapeHtml(a.DateAjout) + '</div></div>' +
        caseALaUne_("audio", a.ID, a.ALaUne === true) +
        '<button class="danger-outline small" onclick="supprimerEnregistrementAdmin(\'' + a.ID + '\')">Supprimer</button>' +
        '</div>';
    });
    zone.innerHTML = construireBarreSelection_("audios") + cartes.join("");
  }

  function creerEnregistrementAdmin() {
    const titre = document.getElementById("recTitre").value.trim();
    const auteur = document.getElementById("recAuteur").value.trim();
    const emailAuteur = document.getElementById("recEmailAuteur").value.trim();
    const description = document.getElementById("recDescription").value.trim();
    const fichier = document.getElementById("recFichier").files[0];
    const categorie = document.getElementById("recCategorie").value;
    const visibilite = document.getElementById("recVisibilite").value;
    const type = document.getElementById("recType").value;
    const prix = document.getElementById("recPrix").value;
    const err = document.getElementById("erreurEnregistrement");
    err.style.display = "none";
    if (!titre || !fichier) { err.textContent = "Le titre et le fichier audio sont requis."; err.style.display = "block"; return; }
    if (type === "Payant" && (!prix || Number(prix) <= 0)) { err.textContent = "Indiquez un prix pour un audio payant."; err.style.display = "block"; return; }
    envoyerFichierPuisContinuer_(fichier, "audio", err, function (r2) {
    const paroles = document.getElementById("recParoles").value.trim();
    lireFichierGenerique_("recParolesFichier", function (parolesBase64, parolesNom, parolesMime) {
      appelServeur("ajouterEnregistrement", membreCourant.code, titre, description, "", visibilite, categorie, type, prix, auteur, emailAuteur, couverturesEnCours.audio || "", paroles, parolesBase64, parolesNom, parolesMime, r2).then(function () {
        document.getElementById("recTitre").value = "";
        document.getElementById("recAuteur").value = "";
        document.getElementById("recEmailAuteur").value = "";
        document.getElementById("recDescription").value = "";
        document.getElementById("recFichier").value = "";
        document.getElementById("recPrix").value = "";
        document.getElementById("recCoverPreviewZone").style.display = "none";
        document.getElementById("recCoverFichier").value = "";
        document.getElementById("recParoles").value = "";
        document.getElementById("recParolesFichier").value = "";
        document.getElementById("recParolesFichierNom").textContent = "";
        delete couverturesEnCours.audio;
        appelServeur("getEnregistrements").then(afficherEnregistrementsAdmin);
      }).catch(function (e) {
        err.textContent = "Erreur : " + e.message;
        err.style.display = "block";
      });
    });
    });
  }

  function supprimerEnregistrementAdmin(id) {
    confirmerApp_("Supprimer cet audio ?", function () {
    appelServeur("supprimerEnregistrement", membreCourant.code, id).then(function () {
      appelServeur("getEnregistrements").then(afficherEnregistrementsAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  // --- Nos écrits (admin) ---
  function afficherDocumentsAdmin(documents) {
    documents = documents || [];
    selectionsAdmin_.documents.clear();
    const zone = document.getElementById("adminListeDocuments");
    if (!documents.length) { zone.innerHTML = '<p class="empty-state">Aucun document.</p>'; return; }
    const cartes = documents.map(function (d) {
      const pillClass = d.Type === "Payant" ? "role-admin" : "role-membre";
      const libellePrix = d.Type === "Payant" ? Number(d.Prix).toLocaleString("fr-FR") + " FCFA" : "Gratuit";
      return '<div class="item-row">' +
        '<input type="checkbox" class="case-select case-select-documents" data-id="' + d.ID + '" onchange="toggleCaseSelection_(\'documents\',\'' + d.ID + '\')">' +
        '<div><div class="item-nom">📄 ' + escapeHtml(d.Titre) + ' <span class="role-pill ' + pillClass + '">' + libellePrix + '</span></div>' +
        '<div class="item-desc">' + (d.Auteur ? "Par " + escapeHtml(d.Auteur) + " · " : "") + escapeHtml(d.Description || "") + " · Ajouté le " + escapeHtml(d.DateAjout) + '</div></div>' +
        caseALaUne_("document", d.ID, d.ALaUne === true) +
        '<button class="danger-outline small" onclick="supprimerDocumentAdmin(\'' + d.ID + '\')">Supprimer</button>' +
        '</div>';
    });
    zone.innerHTML = construireBarreSelection_("documents") + cartes.join("");
  }

  function creerDocumentAdmin() {
    const titre = document.getElementById("docTitre").value.trim();
    const auteur = document.getElementById("docAuteur").value.trim();
    const emailAuteur = document.getElementById("docEmailAuteur").value.trim();
    const description = document.getElementById("docDescription").value.trim();
    const fichier = document.getElementById("docFichier").files[0];
    const type = document.getElementById("docType").value;
    const prix = document.getElementById("docPrix").value;
    const err = document.getElementById("erreurDocument");
    err.style.display = "none";
    if (!titre || !fichier) { err.textContent = "Le titre et le fichier du document sont requis."; err.style.display = "block"; return; }
    if (type === "Payant" && (!prix || Number(prix) <= 0)) { err.textContent = "Indiquez un prix pour un document payant."; err.style.display = "block"; return; }
    envoyerFichierPuisContinuer_(fichier, "document", err, function (r2) {
    appelServeur("ajouterDocument", membreCourant.code, titre, description, "", type, prix, auteur, emailAuteur, couverturesEnCours.document || "", r2).then(function () {
      document.getElementById("docTitre").value = "";
      document.getElementById("docAuteur").value = "";
      document.getElementById("docEmailAuteur").value = "";
      document.getElementById("docDescription").value = "";
      document.getElementById("docFichier").value = "";
      document.getElementById("docPrix").value = "";
      document.getElementById("docCoverPreviewZone").style.display = "none";
      document.getElementById("docCoverFichier").value = "";
      delete couverturesEnCours.document;
      appelServeur("getDocuments").then(afficherDocumentsAdmin);
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
    });
  }

  function supprimerDocumentAdmin(id) {
    confirmerApp_("Supprimer ce document ?", function () {
    appelServeur("supprimerDocument", membreCourant.code, id).then(function () {
      appelServeur("getDocuments").then(afficherDocumentsAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  // --- Playlists (admin) ---
  function afficherPlaylistsAdmin(playlists) {
    playlists = playlists || [];
    const zone = document.getElementById("adminListePlaylists");
    if (!playlists.length) { zone.innerHTML = '<p class="empty-state">Aucune playlist.</p>'; return; }
    zone.innerHTML = playlists.map(function (p) {
      const idEchappe = p.ID.replace(/'/g, "&#39;");
      const cover = p.CoverBase64 ? '<img src="data:image/jpeg;base64,' + p.CoverBase64 + '" style="width:40px;height:40px;object-fit:cover;border-radius:8px;">' : '<div style="width:40px;height:40px;border-radius:8px;background:#eef3f9;display:flex;align-items:center;justify-content:center;">▶️</div>';
      return '<div class="item-block">' +
        '<div class="item-nom" style="display:flex;align-items:center;gap:8px;">' + cover + escapeHtml(p.Nom) + (p.PlaylistId ? "" : ' <span class="vis-pill" style="background:#fff0f0;color:#b00f18;">lien manquant</span>') + '</div>' +
        '<div style="display:flex;gap:8px;margin-top:8px;">' +
        '<input type="text" id="plLienEdit-' + p.ID + '" placeholder="Lien de la playlist YouTube" value="' + (p.PlaylistId ? "https://www.youtube.com/playlist?list=" + p.PlaylistId : "") + '" style="margin:0;">' +
        '<button class="secondary small" style="width:auto;" onclick="modifierPlaylistAdmin(\'' + idEchappe + '\')">💾</button>' +
        '<button class="danger-outline small" style="width:auto;" onclick="supprimerPlaylistAdmin(\'' + idEchappe + '\')">🗑️</button>' +
        '</div>' +
        '<label class="file-btn-label" style="margin-top:8px;font-size:10px;">🖼️ Changer l\'image<input type="file" accept="image/*" style="display:none;" onchange="changerImagePlaylist(event,\'' + idEchappe + '\')"></label>' +
        '</div>';
    }).join("");
  }

  function changerImagePlaylist(event, id) {
    const fichier = event.target.files[0];
    if (!fichier) return;
    convertirImageEnBase64_(fichier, function (base64) {
      appelServeur("modifierImagePlaylist", membreCourant.code, id, base64).then(function () {
        appelServeur("getPlaylists").then(afficherPlaylistsAdmin);
      }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  function modifierPlaylistAdmin(id) {
    const lien = document.getElementById("plLienEdit-" + id).value.trim();
    if (!lien) { alert("Collez un lien de playlist."); return; }
    appelServeur("modifierPlaylist", membreCourant.code, id, lien).then(function () {
      appelServeur("getPlaylists").then(afficherPlaylistsAdmin);
      alert("Playlist mise à jour.");
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }

  function creerPlaylistAdmin() {
    const nom = document.getElementById("plNom").value.trim();
    const lien = document.getElementById("plLien").value.trim();
    const err = document.getElementById("erreurPlaylist");
    err.style.display = "none";
    if (!nom) { err.textContent = "Le nom est requis."; err.style.display = "block"; return; }
    appelServeur("ajouterPlaylist", membreCourant.code, nom, lien).then(function () {
      document.getElementById("plNom").value = "";
      document.getElementById("plLien").value = "";
      appelServeur("getPlaylists").then(afficherPlaylistsAdmin);
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function supprimerPlaylistAdmin(id) {
    confirmerApp_("Supprimer cette playlist ?", function () {
    appelServeur("supprimerPlaylist", membreCourant.code, id).then(function () {
      appelServeur("getPlaylists").then(afficherPlaylistsAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  // --- Vidéos de la plateforme (admin) ---
  function afficherVideosPlateformeAdmin(videos) {
    videos = videos || [];
    selectionsAdmin_.videos.clear();
    appelServeur("getPlaylists").then(function (playlists) {
      const select = document.getElementById("vidCategorie");
      select.innerHTML = (playlists || []).map(function (p) { return '<option value="' + escapeHtml(p.Nom) + '">' + escapeHtml(p.Nom) + '</option>'; }).join("");
    });
    const zone = document.getElementById("adminListeVideosPlateforme");
    if (!videos.length) { zone.innerHTML = '<p class="empty-state">Aucune vidéo.</p>'; return; }
    const cartes = videos.map(function (v) {
      const libellePrix = v.Type === "Payant" ? Number(v.Prix).toLocaleString("fr-FR") + " FCFA" : "Gratuit";
      return '<div class="item-row">' +
        '<input type="checkbox" class="case-select case-select-videos" data-id="' + v.ID + '" onchange="toggleCaseSelection_(\'videos\',\'' + v.ID + '\')">' +
        '<div><div class="item-nom">🎬 ' + escapeHtml(v.Titre) + ' <span class="role-pill ' + (v.Type === "Payant" ? "role-admin" : "role-membre") + '">' + libellePrix + '</span></div>' +
        '<div class="item-desc">' + (v.Auteur ? "Par " + escapeHtml(v.Auteur) + " · " : "") + (v.Categorie ? escapeHtml(v.Categorie) + " · " : "Sans catégorie · ") + "Ajouté le " + escapeHtml(v.DateAjout) + '</div></div>' +
        caseALaUne_("video", v.ID, v.ALaUne === true) +
        '<button class="danger-outline small" onclick="supprimerVideoPlateformeAdmin(\'' + v.ID + '\')">Supprimer</button>' +
        '</div>';
    });
    zone.innerHTML = construireBarreSelection_("videos") + cartes.join("");
  }

  function creerVideoPlateformeAdmin() {
    const titre = document.getElementById("vidTitre").value.trim();
    const auteur = document.getElementById("vidAuteur").value.trim();
    const emailAuteur = document.getElementById("vidEmailAuteur").value.trim();
    const description = document.getElementById("vidDescription").value.trim();
    const fichier = document.getElementById("vidFichier").files[0];
    const categorie = document.getElementById("vidCategorie").value;
    const type = document.getElementById("vidType").value;
    const prix = document.getElementById("vidPrix").value;
    const err = document.getElementById("erreurVideoPlateforme");
    err.style.display = "none";
    if (!titre || !fichier) { err.textContent = "Le titre et le fichier vidéo sont requis."; err.style.display = "block"; return; }
    if (type === "Payant" && (!prix || Number(prix) <= 0)) { err.textContent = "Indiquez un prix pour une vidéo payante."; err.style.display = "block"; return; }
    envoyerFichierPuisContinuer_(fichier, "video", err, function (r2) {
    const paroles = document.getElementById("vidParoles").value.trim();
    lireFichierGenerique_("vidParolesFichier", function (parolesBase64, parolesNom, parolesMime) {
      appelServeur("ajouterVideo", membreCourant.code, titre, description, "", type, prix, auteur, emailAuteur, couverturesEnCours.video || "", categorie, paroles, parolesBase64, parolesNom, parolesMime, r2).then(function () {
        document.getElementById("vidTitre").value = "";
        document.getElementById("vidAuteur").value = "";
        document.getElementById("vidEmailAuteur").value = "";
        document.getElementById("vidDescription").value = "";
        document.getElementById("vidFichier").value = "";
        document.getElementById("vidPrix").value = "";
        document.getElementById("vidCoverPreviewZone").style.display = "none";
        document.getElementById("vidCoverFichier").value = "";
        document.getElementById("vidParoles").value = "";
        document.getElementById("vidParolesFichier").value = "";
        document.getElementById("vidParolesFichierNom").textContent = "";
        delete couverturesEnCours.video;
        appelServeur("getVideos").then(afficherVideosPlateformeAdmin);
      }).catch(function (e) {
        err.textContent = "Erreur : " + e.message;
        err.style.display = "block";
      });
    });
    });
  }

  function supprimerVideoPlateformeAdmin(id) {
    confirmerApp_("Supprimer cette vidéo ?", function () {
    appelServeur("supprimerVideo", membreCourant.code, id).then(function () {
      appelServeur("getVideos").then(afficherVideosPlateformeAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  // --- Espaces publicitaires internes (admin) ---
  // --- Actualités (admin) ---
  let actualiteEnEditionId = null;

  function afficherActualitesAdmin(liste) {
    liste = liste || [];
    const zone = document.getElementById("adminListeActualites");
    if (!liste.length) { zone.innerHTML = '<p class="empty-state">Aucune actualité pour le moment.</p>'; return; }
    const libellesRubrique = { toutes: "Toutes", audios: "Audios", videos: "Vidéos", documents: "Documents", seances: "Séances" };
    zone.innerHTML = liste.map(function (a) {
      const apercu = a.Image ? '<img src="data:image/jpeg;base64,' + a.Image + '" style="width:60px;height:40px;object-fit:cover;border-radius:6px;">' : '<div style="width:60px;height:40px;background:#eef3f9;border-radius:6px;"></div>';
      return '<div class="item-row">' +
        '<div style="display:flex;align-items:center;gap:10px;">' + apercu +
        '<div><div class="item-nom">' + escapeHtml(a.Titre) + '</div>' +
        '<div class="item-desc">' + (libellesRubrique[a.Rubrique] || a.Rubrique) + (a.Categorie ? " · " + escapeHtml(a.Categorie) : "") + '</div></div></div>' +
        '<div style="display:flex;gap:6px;">' +
        '<button class="secondary small" style="width:auto;" onclick="modifierActualiteClick(\'' + a.ID + '\')">✏️</button>' +
        '<button class="danger-outline small" style="width:auto;" onclick="supprimerActualiteClick(\'' + a.ID + '\')">🗑️</button>' +
        '</div></div>';
    }).join("");
  }

  function reinitialiserFormulaireActualite_() {
    actualiteEnEditionId = null;
    document.getElementById("actualiteTitre").value = "";
    document.getElementById("actualiteCategorie").value = "";
    document.getElementById("actualiteRubrique").value = "toutes";
    document.getElementById("actualiteAuteur").value = "";
    document.getElementById("actualiteContenu").value = "";
    document.getElementById("actualitePreviewZone").style.display = "none";
    document.getElementById("fichierActualite").value = "";
    delete couverturesEnCours.actualite;
    document.getElementById("btnPublierActualite").textContent = "Publier";
  }

  function modifierActualiteClick(id) {
    appelServeur("getActualitesAdmin").then(function (liste) {
      const a = (liste || []).find(function (x) { return x.ID === id; });
      if (!a) return;
      actualiteEnEditionId = id;
      document.getElementById("actualiteTitre").value = a.Titre || "";
      document.getElementById("actualiteCategorie").value = a.Categorie || "";
      document.getElementById("actualiteRubrique").value = a.Rubrique || "toutes";
      document.getElementById("actualiteAuteur").value = a.Auteur || "";
      document.getElementById("actualiteContenu").value = a.Contenu || "";
      if (a.Image) {
        document.getElementById("actualitePreviewImg").src = "data:image/jpeg;base64," + a.Image;
        document.getElementById("actualitePreviewZone").style.display = "block";
      }
      document.getElementById("btnPublierActualite").textContent = "Enregistrer les modifications";
      document.getElementById("admin-actualites").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function publierActualiteClick() {
    const titre = document.getElementById("actualiteTitre").value.trim();
    const categorie = document.getElementById("actualiteCategorie").value.trim();
    const rubrique = document.getElementById("actualiteRubrique").value;
    const auteur = document.getElementById("actualiteAuteur").value.trim();
    const contenu = document.getElementById("actualiteContenu").value.trim();
    const image = couverturesEnCours.actualite || "";
    const err = document.getElementById("erreurActualite");
    err.style.display = "none";
    if (!titre) { err.textContent = "Le titre est obligatoire."; err.style.display = "block"; return; }

    const appel = actualiteEnEditionId
      ? appelServeur("modifierActualite", membreCourant.code, actualiteEnEditionId, titre, categorie, rubrique, image, auteur, contenu)
      : appelServeur("ajouterActualite", membreCourant.code, titre, categorie, rubrique, image, auteur, contenu);

    appel.then(function () {
      reinitialiserFormulaireActualite_();
      appelServeur("getActualitesAdmin").then(afficherActualitesAdmin);
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function supprimerActualiteClick(id) {
    confirmerApp_("Supprimer cette actualité ?", function () {
    appelServeur("supprimerActualite", membreCourant.code, id).then(function () {
      appelServeur("getActualitesAdmin").then(afficherActualitesAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  // --- Espaces pub (admin) ---
  function afficherEspacesPubAdmin(espaces) {
    espaces = espaces || [];
    const zone = document.getElementById("adminListeEspacesPub");
    if (!espaces.length) { zone.innerHTML = '<p class="empty-state">Aucun espace publicitaire.</p>'; return; }
    const libelles = { audios: "Audios", videos: "Vidéos", documents: "Documents", messages: "Messages", seances: "Séances directes" };
    zone.innerHTML = espaces.map(function (e) {
      const apercu = e.Type === "Image" && e.ImageBase64 ? '<img src="data:image/jpeg;base64,' + e.ImageBase64 + '" style="width:70px;height:40px;object-fit:cover;border-radius:6px;">' : "🎬";
      return '<div class="item-row">' +
        '<div style="display:flex;align-items:center;gap:10px;">' + apercu +
        '<div class="item-desc">' + (libelles[e.Emplacement] || e.Emplacement) + " · " + e.Type + '</div></div>' +
        '<button class="danger-outline small" onclick="supprimerEspacePubAdmin(\'' + e.ID + '\')">Supprimer</button>' +
        '</div>';
    }).join("");
  }

  function creerEspacePubAdmin() {
    const emplacement = document.getElementById("pubEmplacement").value;
    const type = document.getElementById("pubType").value;
    const lienDrive = document.getElementById("pubLienDrive").value.trim();
    const lien = document.getElementById("pubLien").value.trim();
    const err = document.getElementById("erreurEspacePub");
    err.style.display = "none";
    appelServeur("ajouterEspacePub", membreCourant.code, emplacement, type, couverturesEnCours.espacePub || "", lienDrive, lien).then(function () {
      document.getElementById("pubLienDrive").value = "";
      document.getElementById("pubLien").value = "";
      document.getElementById("pubImagePreviewZone").style.display = "none";
      document.getElementById("pubImageFichier").value = "";
      delete couverturesEnCours.espacePub;
      appelServeur("getEspacesPubAdmin").then(afficherEspacesPubAdmin);
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function supprimerEspacePubAdmin(id) {
    confirmerApp_("Supprimer cet espace publicitaire ?", function () {
    appelServeur("supprimerEspacePub", membreCourant.code, id).then(function () {
      appelServeur("getEspacesPubAdmin").then(afficherEspacesPubAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  // --- Affiche publicitaire (admin) ---
  let afficheBase64EnCours = null;

  function chargerAfficheAdmin() {
    afficheBase64EnCours = null;
    document.getElementById("erreurAffiche").style.display = "none";
    document.getElementById("afficheLienInput").value = "";
    document.getElementById("affichePreviewZone").style.display = "none";
    document.getElementById("fichierAffiche").value = "";
    appelServeur("getAffiches").then(afficherAffichesAdmin).catch(function (err) { afficherErreurZone("adminListeAffiches", err); });
  }

  let affichesAdminCache_ = [];

  function afficherAffichesAdmin(affiches) {
    affichesAdminCache_ = affiches || [];
    const zone = document.getElementById("adminListeAffiches");
    if (!affichesAdminCache_.length) { zone.innerHTML = '<p class="empty-state">Aucune affiche pour le moment.</p>'; return; }
    zone.innerHTML = affichesAdminCache_.map(function (a, i) {
      return '<div class="item-row">' +
        '<img src="data:image/png;base64,' + a.ImageBase64 + '" style="width:90px;height:30px;object-fit:cover;border-radius:6px;">' +
        '<div style="display:flex;gap:6px;">' +
        '<button class="secondary small" style="width:auto;" ' + (i === 0 ? "disabled" : "") + ' onclick="deplacerAffiche_(' + i + ',-1)" title="Monter">▲</button>' +
        '<button class="secondary small" style="width:auto;" ' + (i === affichesAdminCache_.length - 1 ? "disabled" : "") + ' onclick="deplacerAffiche_(' + i + ',1)" title="Descendre">▼</button>' +
        '<button class="danger-outline small" onclick="supprimerAfficheClick(\'' + a.ID + '\')">Supprimer</button>' +
        '</div></div>';
    }).join("");
  }

  // Échange la position de l'affiche avec sa voisine (haut/bas), puis enregistre le nouvel
  // ordre complet côté serveur.
  function deplacerAffiche_(index, direction) {
    const cible = index + direction;
    if (cible < 0 || cible >= affichesAdminCache_.length) return;
    const temp = affichesAdminCache_[index];
    affichesAdminCache_[index] = affichesAdminCache_[cible];
    affichesAdminCache_[cible] = temp;
    afficherAffichesAdmin(affichesAdminCache_);
    appelServeur("definirOrdreAffiches", membreCourant.code, affichesAdminCache_.map(function (a) { return a.ID; }))
      .catch(function (err) { alert("Erreur : " + err.message); });
  }

  function previsualiserAffiche(event) {
    const fichier = event.target.files[0];
    if (!fichier) return;
    const image = new Image();
    const lecteurUrl = URL.createObjectURL(fichier);
    image.onload = function () {
      // Redimensionne côté navigateur en format paysage (max 1200x400) avant envoi,
      // pour rester léger et cohérent avec le ratio d'affichage.
      const canvas = document.createElement("canvas");
      const largeurCible = 1200, hauteurCible = 400;
      canvas.width = largeurCible; canvas.height = hauteurCible;
      const ctx = canvas.getContext("2d");
      const ratioImage = image.width / image.height, ratioCible = largeurCible / hauteurCible;
      let sx, sy, sw, sh;
      if (ratioImage > ratioCible) { sh = image.height; sw = sh * ratioCible; sx = (image.width - sw) / 2; sy = 0; }
      else { sw = image.width; sh = sw / ratioCible; sx = 0; sy = (image.height - sh) / 2; }
      ctx.drawImage(image, sx, sy, sw, sh, 0, 0, largeurCible, hauteurCible);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.82);
      afficheBase64EnCours = dataUrl.split(",")[1];
      document.getElementById("affichePreviewImg").src = dataUrl;
      document.getElementById("affichePreviewZone").style.display = "block";
      URL.revokeObjectURL(lecteurUrl);
    };
    image.src = lecteurUrl;
  }

  function ajouterAfficheClick() {
    const err = document.getElementById("erreurAffiche");
    err.style.display = "none";
    if (!afficheBase64EnCours) { err.textContent = "Choisissez d'abord une image."; err.style.display = "block"; return; }
    const lien = document.getElementById("afficheLienInput").value.trim();
    appelServeur("ajouterAffiche", membreCourant.code, afficheBase64EnCours, lien).then(function () {
      afficheBase64EnCours = null;
      document.getElementById("affichePreviewZone").style.display = "none";
      document.getElementById("fichierAffiche").value = "";
      document.getElementById("afficheLienInput").value = "";
      appelServeur("getAffiches").then(afficherAffichesAdmin);
    }).catch(function (e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function supprimerAfficheClick(id) {
    confirmerApp_("Supprimer cette affiche du slider ?", function () {
    appelServeur("supprimerAffiche", membreCourant.code, id).then(function () {
      appelServeur("getAffiches").then(afficherAffichesAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  // --- Demandes de prière (admin) ---
  function afficherDemandesPriereAdmin(demandes) {
    demandes = demandes || [];
    const zone = document.getElementById("adminListeDemandesPriere");
    if (!demandes.length) { zone.innerHTML = '<p class="empty-state">Aucune demande de prière.</p>'; return; }
    zone.innerHTML = demandes.map(function (d) {
      const date = d.Date ? new Date(d.Date).toLocaleDateString("fr-FR") : "";
      const pillClass = d.Statut === "Traité" ? "statut-traite" : "statut-nouveau";
      const action = d.Statut === "Traité" ? "" : '<button class="small secondary full-mt" onclick="traiterDemandePriereAdmin(\'' + d.ID + '\')">Marquer traité</button>';
      return '<div class="admin-message-card">' +
        '<div class="item-row" style="padding-top:0;">' +
        '<div><div class="item-nom">' + escapeHtml(d.Nom) + " " + escapeHtml(d.Prenom || "") + '</div><div class="item-desc">' + date + '</div></div>' +
        '<span class="statut-pill ' + pillClass + '">' + escapeHtml(d.Statut) + "</span></div>" +
        '<div class="item-desc" style="margin:6px 0;">' +
        (d.SituationMatrimoniale ? escapeHtml(d.SituationMatrimoniale) + " · " : "") +
        (d.Profession ? escapeHtml(d.Profession) + " · " : "") +
        (d.Age ? "Âge : " + escapeHtml(String(d.Age)) + " · " : "") +
        (d.NumeroWhatsApp ? "WhatsApp : " + escapeHtml(d.NumeroWhatsApp) : "") + '</div>' +
        '<p style="font-size:14px;margin:8px 0;">' + escapeHtml(d.Requete) + "</p>" + action +
        "</div>";
    }).join("");
  }

  function traiterDemandePriereAdmin(id) {
    appelServeur("traiterDemandePriere", membreCourant.code, id).then(function () {
      appelServeur("getDemandesPriereAdmin", membreCourant.code).then(afficherDemandesPriereAdmin);
      chargerCompteursEtBadges();
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }

  // --- Soumissions de contenu (admin) ---
  function afficherSoumissionsAdmin(soumissions) {
    soumissions = soumissions || [];
    selectionsAdmin_.soumissions.clear();
    const zone = document.getElementById("adminListeSoumissions");
    if (!soumissions.length) { zone.innerHTML = '<p class="empty-state">Aucune soumission.</p>'; return; }
    const cartes = soumissions.map(function (s) {
      const pillClass = s.Statut === "Publié" ? "statut-traite" : s.Statut === "Rejeté" ? "role-admin" : "statut-nouveau";
      const actions = s.Statut === "EnAttente"
        ? '<button class="secondary small" onclick="validerSoumissionClick(\'' + s.ID + '\')">✓ Valider</button>' +
          '<button class="danger-outline small" onclick="rejeterSoumissionClick(\'' + s.ID + '\')">✗ Rejeter</button>'
        : "";
      return '<div class="admin-message-card">' +
        '<div class="item-row" style="padding-top:0;">' +
        '<input type="checkbox" class="case-select case-select-soumissions" data-id="' + s.ID + '" onchange="toggleCaseSelection_(\'soumissions\',\'' + s.ID + '\')">' +
        '<div><div class="item-nom">' + (LIBELLES_TYPE_SOUMISSION[s.TypeContenu] || s.TypeContenu) + " " + escapeHtml(s.Titre) + '</div>' +
        '<div class="item-desc">Par ' + escapeHtml(s.NomAuteur) + " (" + escapeHtml(s.EmailAuteur) + ") · " + (s.Date ? new Date(s.Date).toLocaleDateString("fr-FR") : "") + '</div></div>' +
        '<span class="statut-pill ' + pillClass + '">' + (LIBELLES_STATUT_SOUMISSION[s.Statut] || s.Statut) + "</span>" +
        "</div>" +
        (s.Description ? '<p style="font-size:13px;margin:8px 0;">' + escapeHtml(s.Description) + "</p>" : "") +
        '<div class="item-desc" style="margin-bottom:8px;">Prix prévu : ' + (Number(s.Prix) > 0 ? Number(s.Prix).toLocaleString("fr-FR") + " FCFA" : "Gratuit") + '</div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap;">' +
        '<button class="secondary small" onclick="telechargerSoumissionAdmin(\'' + s.ID + '\')">⬇️ Télécharger pour vérification</button>' +
        actions +
        '<button class="danger-outline small" onclick="supprimerSoumissionClick(\'' + s.ID + '\')">🗑️ Supprimer</button>' +
        "</div></div>";
    });
    zone.innerHTML = construireBarreSelection_("soumissions") + cartes.join("");
  }

  function supprimerSoumissionClick(id) {
    confirmerApp_("Supprimer définitivement cette soumission ?", function () {
    appelServeur("supprimerSoumission", membreCourant.code, id).then(function () {
      appelServeur("getSoumissionsAdmin", membreCourant.code).then(afficherSoumissionsAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  function telechargerSoumissionAdmin(id) {
    appelServeur("getLienSoumission", membreCourant.code, id).then(function (res) {
      if (!res.succes) { alert(res.message || "Téléchargement impossible."); return; }
      window.open(res.lien, "_blank");
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }

  function validerSoumissionClick(id) {
    appelServeur("validerSoumission", membreCourant.code, id).then(function () {
      appelServeur("getSoumissionsAdmin", membreCourant.code).then(afficherSoumissionsAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }

  function rejeterSoumissionClick(id) {
    confirmerApp_("Rejeter cette soumission ?", function () {
    appelServeur("rejeterSoumission", membreCourant.code, id).then(function () {
      appelServeur("getSoumissionsAdmin", membreCourant.code).then(afficherSoumissionsAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
    });
  }

  // ==================== CODES D'INSCRIPTION ====================
  function genererCodesAdmin() {
    const quantite = Number(document.getElementById("nbCodesInscription").value || 1);
    const note = document.getElementById("noteCodesInscription").value.trim();
    const err = document.getElementById("erreurCodesInscription");
    const box = document.getElementById("codesGeneresBox");
    const btn = document.getElementById("btnCopierCodes");
    err.style.display = "none";
    box.style.display = "none";
    btn.style.display = "none";
    if (quantite < 1 || quantite > 100) {
      err.textContent = "Le nombre doit être compris entre 1 et 100.";
      err.style.display = "block";
      return;
    }
    appelServeur("genererCodesInscription", membreCourant.code, quantite, note).then(function(res) {
      codesGeneresDerniereFois = res.codes || [];
      box.textContent = codesGeneresDerniereFois.join("\n");
      box.style.display = "block";
      btn.style.display = "inline-block";
      appelServeur("getCodesInscriptionAdmin", membreCourant.code).then(afficherCodesInscriptionAdmin);
    }).catch(function(e) {
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function copierCodesGeneres() {
    if (!codesGeneresDerniereFois.length) return;
    const texte = codesGeneresDerniereFois.join("\n");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texte).then(function() { alert("Codes copiés dans le presse-papiers."); });
    } else {
      const zone = document.createElement("textarea");
      zone.value = texte; document.body.appendChild(zone); zone.select();
      document.execCommand("copy"); zone.remove();
      alert("Codes copiés dans le presse-papiers.");
    }
  }

  function afficherCodesInscriptionAdmin(codes) {
    codes = codes || [];
    const zone = document.getElementById("adminListeCodesInscription");
    if (!codes.length) { zone.innerHTML = '<p class="empty-state">Aucun code généré.</p>'; return; }
    const barreActions = '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;flex-wrap:wrap;">' +
      '<label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:800;color:var(--blue2);">' +
      '<input type="checkbox" id="caseToutCocherCodes" onchange="toggleToutCocherCodes()" style="width:auto;margin:0;"> Tout sélectionner</label>' +
      '<button class="secondary small" style="width:auto;" onclick="copierCodesSelectionnes()">📋 Copier la sélection</button>' +
      '</div>';
    const tableau = '<table class="mini-table"><tr><th></th><th>Code</th><th>Statut</th><th>Créé le</th><th>Utilisé par</th><th>Action</th></tr>' +
      codes.map(function (c) {
        const statut = String(c.statut || "");
        const classe = statut.toLowerCase() === "disponible" ? "success-text" : (statut.toLowerCase() === "utilisé" ? "error" : "");
        const codeEchappe = escapeHtml(c.code).replace(/'/g, "&#39;");
        const action = statut.toLowerCase() === "disponible" ? '<button class="danger-outline small" onclick="desactiverCodeAdmin(\'' + codeEchappe + '\')">Désactiver</button>' : '—';
        return '<tr><td><input type="checkbox" class="case-code-inscription" value="' + codeEchappe + '" style="width:auto;margin:0;"></td>' +
          '<td><strong>' + escapeHtml(c.code) + '</strong> <button class="secondary small" style="width:auto;padding:3px 8px;font-size:10px;" onclick="copierTexte_(\'' + codeEchappe + '\')">📋</button></td>' +
          '<td class="' + classe + '">' + escapeHtml(statut) + '</td><td>' + escapeHtml(c.dateCreation) + '</td><td>' + escapeHtml(c.utilisePar) + '</td><td>' + action + '</td></tr>';
      }).join("") + '</table>';
    zone.innerHTML = barreActions + tableau;
  }

  function toggleToutCocherCodes() {
    const coche = document.getElementById("caseToutCocherCodes").checked;
    document.querySelectorAll(".case-code-inscription").forEach(function (c) { c.checked = coche; });
  }

  function copierCodesSelectionnes() {
    const codes = Array.prototype.slice.call(document.querySelectorAll(".case-code-inscription:checked")).map(function (c) { return c.value; });
    if (!codes.length) { alert("Sélectionnez au moins un code."); return; }
    copierTexte_(codes.join("\n"));
  }

  function copierTexte_(texte) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(texte).then(function () { alert("✓ Copié dans le presse-papiers."); }).catch(function () { copierTexteRepli_(texte); });
    } else {
      copierTexteRepli_(texte);
    }
  }

  function copierTexteRepli_(texte) {
    const zone = document.createElement("textarea");
    zone.value = texte;
    zone.style.position = "fixed";
    zone.style.left = "-9999px";
    document.body.appendChild(zone);
    zone.focus(); zone.select();
    try { document.execCommand("copy"); alert("✓ Copié dans le presse-papiers."); }
    catch (e) { alert("Impossible de copier automatiquement. Sélectionnez le texte manuellement."); }
    document.body.removeChild(zone);
  }

  function desactiverCodeAdmin(code) {
    confirmerApp_("Désactiver le code " + code + " ?", function () {
    appelServeur("desactiverCodeInscription", membreCourant.code, code).then(function(res) {
      if (!res.succes) { alert(res.message || "Impossible de désactiver le code."); return; }
      appelServeur("getCodesInscriptionAdmin", membreCourant.code).then(afficherCodesInscriptionAdmin);
    }).catch(function(e) { alert("Erreur : " + e.message); });
    });
  }

  // Icône par défaut d'une playlist/catégorie selon son nom, tant qu'aucune image
  // personnalisée n'a été ajoutée par un administrateur.
  // Filet de sécurité d'affichage : si une heure de séance a été enregistrée avant la
  // correction du format (et ressemble donc à "1899-12-30T11:50:39.000Z" au lieu de
  // "12:00"), on en extrait proprement l'heure au lieu d'afficher le texte brut.
  function formaterHeureSeance_(valeur) {
    if (!valeur) return "";
    const texte = String(valeur);
    const correspondance = texte.match(/T(\d{2}):(\d{2})/);
    if (correspondance) return correspondance[1] + ":" + correspondance[2];
    return texte;
  }

  function iconePourNom_(nom) {
    const n = (nom || "").toLowerCase();
    if (n.indexOf("louange") !== -1 || n.indexOf("adoration") !== -1) return "🎵";
    if (n.indexOf("témoignage") !== -1) return "🗣️";
    if (n.indexOf("prédication") !== -1 || n.indexOf("enseignement") !== -1 || n.indexOf("formation") !== -1) return "📖";
    if (n.indexOf("prière") !== -1 || n.indexOf("live") !== -1) return "🙏";
    if (n.indexOf("film") !== -1) return "🎬";
    if (n.indexOf("documentaire") !== -1) return "🎥";
    if (n.indexOf("émission") !== -1 || n.indexOf("emission") !== -1) return "📺";
    if (n.indexOf("fait") !== -1 && n.indexOf("divers") !== -1) return "📰";
    if (n.indexOf("programme") !== -1) return "🎪";
    if (n.indexOf("développement") !== -1 || n.indexOf("developpement") !== -1) return "🌱";
    if (n.indexOf("annonce") !== -1) return "📢";
    return null; // pas de correspondance : on utilisera l'icône générique du contexte
  }

  // S'assure qu'un lien externe (Meet, Zoom...) a bien un protocole avant de l'ouvrir —
  // sans ça, le navigateur l'interprète comme un chemin de CE site (d'où un 404).
  function ouvrirLienExterne_(lien) {
    const nettoye = (lien || "").trim();
    // Filtre défensif : rejette aussi les valeurs "vides en apparence" (undefined/null en
    // texte, espaces...) qui ne sont pas de vrais liens, pour ne jamais tenter une navigation
    // vers une adresse invalide (qui afficherait une page 404 du site d'hébergement).
    if (!nettoye || /^(undefined|null)$/i.test(nettoye) || !/^[a-z0-9]/i.test(nettoye)) {
      alert("Aucun lien n'est disponible pour cette séance. Contactez un responsable.");
      return;
    }
    const lienComplet = /^https?:\/\//i.test(nettoye) ? nettoye : "https://" + nettoye;
    window.open(lienComplet, "_blank");
  }

  // Petite fenêtre pour afficher les paroles d'un audio ou d'une vidéo, sans avoir besoin
  // d'une rubrique dédiée — réutilisable partout où un bouton "Lyrics" apparaît.
  // ==================== ACTUALITÉS (façon blog) — partagé entre les 4 sections ====================
  function construireCarteActualite_(a, fonctionOuvrir) {
    const image = a.Image ? '<img src="data:image/jpeg;base64,' + a.Image + '">' : '';
    const tag = a.Categorie ? '<span class="blog-card-tag">' + escapeHtml(a.Categorie) + '</span>' : '';
    const extrait = a.Contenu ? escapeHtml(a.Contenu).substring(0, 160) + (a.Contenu.length > 160 ? '…' : '') : '';
    return '<div class="blog-card" onclick="' + fonctionOuvrir + '(\'' + a.ID + '\')">' +
      '<div class="blog-card-image-wrap">' + image + tag + '</div>' +
      '<div class="blog-card-titre">' + escapeHtml(a.Titre) + '</div>' +
      (a.Auteur ? '<div class="blog-card-auteur">👤 ' + escapeHtml(a.Auteur) + '</div>' : '') +
      '<div class="blog-card-extrait">' + extrait + '</div>' +
      '</div>';
  }

  function afficherDetailActualiteModal_(a) {
    const ancien = document.querySelector(".actualite-overlay");
    if (ancien) ancien.remove();
    const overlay = document.createElement("div");
    overlay.className = "actualite-overlay";
    overlay.style.cssText = "position:fixed;inset:0;background:rgba(10,20,40,.6);z-index:9999;display:flex;align-items:flex-start;justify-content:center;padding:20px;overflow-y:auto;";
    overlay.onclick = function (e) { if (e.target === overlay) overlay.remove(); };
    const box = document.createElement("div");
    box.style.cssText = "background:#fff;border-radius:18px;max-width:560px;width:100%;overflow:hidden;margin:20px 0;";
    const image = a.Image ? '<img src="data:image/jpeg;base64,' + a.Image + '" style="width:100%;height:220px;object-fit:cover;display:block;">' : "";
    box.innerHTML = image +
      '<div style="padding:20px;">' +
      '<button class="secondary small" style="width:auto;float:right;" onclick="this.closest(\'.actualite-overlay\').remove()">✕</button>' +
      (a.Categorie ? '<span class="blog-card-tag" style="position:static;display:inline-block;margin-bottom:10px;">' + escapeHtml(a.Categorie) + '</span>' : '') +
      '<div class="blog-card-titre" style="clear:both;">' + escapeHtml(a.Titre) + '</div>' +
      '<div class="blog-card-auteur">' + (a.Auteur ? '👤 ' + escapeHtml(a.Auteur) + ' · ' : '') + escapeHtml(a.DateAjout) + '</div>' +
      '<div class="blog-detail-corps">' + escapeHtml(a.Contenu) + '</div>' +
      '</div>';
    overlay.appendChild(box);
    document.body.appendChild(overlay);
  }

  function afficherParolesModal_(titre, paroles, fichierLien, fichierNom) {
    const ancien = document.querySelector(".paroles-overlay");
    if (ancien) ancien.remove();
    const overlay = document.createElement("div");
    overlay.className = "paroles-overlay";
    overlay.style.cssText = "position:fixed;inset:0;background:rgba(10,20,40,.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px;";
    overlay.onclick = function (e) { if (e.target === overlay) overlay.remove(); };
    const box = document.createElement("div");
    box.style.cssText = "background:#fff;border-radius:18px;max-width:480px;width:100%;max-height:80vh;overflow-y:auto;padding:20px;";
    const corpsTexte = (paroles && paroles.trim()) ? '<p style="font-size:13px;line-height:1.7;white-space:pre-wrap;">' + escapeHtml(paroles) + '</p>' : '';
    const corpsFichier = fichierLien
      ? '<a class="secondary small" style="display:block;text-align:center;text-decoration:none;margin-top:' + (corpsTexte ? '14px' : '0') + ';" href="' + fichierLien + '" target="_blank">📎 Voir le fichier des paroles' + (fichierNom ? ' (' + escapeHtml(fichierNom) + ')' : '') + '</a>'
      : '';
    box.innerHTML = '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:12px;">' +
      '<div class="item-nom">📜 ' + escapeHtml(titre) + '</div>' +
      '<button class="secondary small" style="width:auto;flex-shrink:0;" onclick="this.closest(\'.paroles-overlay\').remove()">✕</button></div>' +
      (corpsTexte || corpsFichier || '<p class="empty-state">Aucune parole disponible.</p>');
    overlay.appendChild(box);
    document.body.appendChild(overlay);
  }


  // ==================== TV ====================
  let tvChainesCache = [];
  let tvSousOnglet = "chaines";
  let tvChaineActuelle = null;
  let tvTimer_ = null;
  let tvSignature_ = "";
  let tvFinProgramme_ = 0;
  let tvLogoBase64_ = "";
  let tvProgrammesStudio_ = [];

  function tvFavoris_() {
    try { return JSON.parse(localStorage.getItem("arc_tv_favoris") || "[]"); } catch (e) { return []; }
  }

  function tvToggleFavori_(id) {
    const f = tvFavoris_();
    const i = f.indexOf(id);
    if (i === -1) f.push(id); else f.splice(i, 1);
    try { localStorage.setItem("arc_tv_favoris", JSON.stringify(f)); } catch (e) {}
    afficherChainesTv_(tvSousOnglet === "favoris");
  }

  function chargerTv() {
    const estOwner = !!(membreCourant && membreCourant.estTvOwner);
    document.getElementById("btnSubTvStudio").style.display = estOwner ? "inline-block" : "none";
    if (!estOwner && tvSousOnglet === "studio") tvSousOnglet = "chaines";
    appelServeur("getTvChaines").then(function (liste) {
      tvChainesCache = liste || [];
      afficherSousTv(tvSousOnglet);
    }).catch(function (err) { afficherErreurZone("listeChainesTv", err); });
  }

  function afficherSousTv(nom) {
    tvSousOnglet = nom;
    document.querySelectorAll("#subNavTv .sub-nav-btn").forEach(function (b) { b.classList.toggle("active", b.dataset.sub === nom); });
    document.getElementById("tvSous-chaines").classList.toggle("active", nom !== "studio");
    document.getElementById("tvSous-studio").classList.toggle("active", nom === "studio");
    if (nom === "studio") chargerStudioTv_();
    else afficherChainesTv_(nom === "favoris");
  }

  function filtrerChainesTv_() { afficherChainesTv_(tvSousOnglet === "favoris"); }

  function afficherChainesTv_(favorisSeulement) {
    const zone = document.getElementById("listeChainesTv");
    const favoris = tvFavoris_();
    let liste = tvChainesCache;
    if (favorisSeulement) liste = liste.filter(function (c) { return favoris.indexOf(c.ID) !== -1; });
    const champ = document.getElementById("rechercheChainesTv");
    const q = champ ? champ.value.trim().toLowerCase().replace(/^n\s*[°o]?\s*(?=\d)/, "") : "";
    if (q) {
      const numero = /^\d+$/.test(q) ? Number(q) : null;
      liste = liste.filter(function (c) {
        return (numero !== null && c.Numero === numero) ||
          tvLibelle_(c).toLowerCase().indexOf(q) !== -1 ||
          (c.Description || "").toLowerCase().indexOf(q) !== -1;
      });
    }
    if (!liste.length) {
      zone.innerHTML = '<p class="empty-state">' + (q ? "Aucune chaîne ne correspond à votre recherche." : (favorisSeulement ? "Vous ne suivez encore aucune chaîne." : "Aucune chaîne pour le moment.")) + '</p>';
      return;
    }
    zone.innerHTML = liste.map(function (c) {
      const logo = c.LogoBase64 ? '<img class="tv-logo" src="data:image/png;base64,' + c.LogoBase64 + '">' : '<div class="tv-logo">📺</div>';
      const live = c.EnDirect ? '<span class="tv-badge-live">● EN DIRECT</span>' : '';
      const num = c.Numero ? '<span class="tv-num">' + tvNumeroFmt_(c.Numero) + '</span>' : '';
      const suivie = favoris.indexOf(c.ID) !== -1;
      return '<div class="contenu-item" style="display:flex;gap:12px;align-items:center;">' + logo +
        '<div style="flex:1;min-width:0;"><div class="item-nom">' + num + escapeHtml(c.Nom) + live + '</div>' +
        '<div class="item-desc">' + escapeHtml(c.Description) + '</div></div>' +
        '<div style="display:flex;flex-direction:column;gap:6px;">' +
        '<button class="flame small" onclick="regarderChaineTv(\'' + c.ID + '\')">▶ Regarder</button>' +
        '<button class="secondary small" onclick="tvToggleFavori_(\'' + c.ID + '\')">' + (suivie ? "⭐ Suivie" : "☆ Suivre") + '</button>' +
        '</div></div>';
    }).join("");
  }

  // --- Lecteur TV : tous les spectateurs voient la même chose au même moment ---
  // --- Aides d'affichage : numéro sur 3 chiffres ("001 JEC TV") ---
  function tvNumeroFmt_(n) { return String(n).padStart(3, "0"); }
  function tvLibelle_(c) { return (c && c.Numero ? tvNumeroFmt_(c.Numero) + " " : "") + ((c && c.Nom) || ""); }
  function tvIcone_(type) { return type === "live" ? "🔴 " : (type === "playlist" ? "🎞️ " : "🎬 "); }

  function regarderChaineTv(id) {
    const c = tvChainesCache.find(function (x) { return x.ID === id; });
    if (!c) return;
    tvDetruireLecteur_();
    tvQuitterPleinEcran_();
    tvChaineActuelle = c;
    document.getElementById("lecteurTvZone").style.display = "block";
    document.getElementById("tvInfoNom").textContent = tvLibelle_(c);
    document.getElementById("tvBadgeLive").innerHTML = "";
    document.getElementById("tvEcranInterieur").innerHTML = "";
    tvAfficherLogoCoin_(c);
    tvMeilleurRtt_ = Infinity;
    tvSynchroniserHorloge_();
    rafraichirTv_();
  }

  // Logo de la chaîne dans l'angle supérieur droit du lecteur (numéro si pas de logo)
  function tvAfficherLogoCoin_(c) {
    const img = document.getElementById("tvLogoEntete");
    if (!img) return;
    if (c.LogoBase64) { img.src = "data:image/png;base64," + c.LogoBase64; img.style.display = "block"; }
    else { img.removeAttribute("src"); img.style.display = "none"; }
  }

  // --- Synchronisation : tous les spectateurs doivent être au même point de la vidéo ---
  // 1. On mesure l'écart entre l'horloge du serveur et celle de l'appareil (5 essais, on garde le
  //    plus rapide, puis on recommence toutes les 3 minutes).
  // 2. Toutes les secondes, on compare la position réelle de la vidéo à la position attendue :
  //    - petit retard ou petite avance (jusqu'à 4 s) : on accélère ou ralentit très légèrement
  //      la lecture, sans coupure, jusqu'à rattraper ;
  //    - grand écart : on saute à la bonne position, avec une avance qui compense le temps de
  //      chargement (mesuré puis ajusté automatiquement).
  let tvPlayer_ = null, tvPlayerPret_ = false, tvPlayerVideoId_ = "", tvCreation_ = false;
  let tvVideoDemandee_ = "", tvModeDemande_ = "", tvRef_ = null, tvSyncInterval_ = null, tvIntervalHorloge_ = null;
  let tvDecalage_ = 0, tvHorlogeSynchro_ = false, tvMeilleurRtt_ = Infinity;
  let tvDernierSeek_ = 0, tvDebutLecture_ = 0, tvTauxActuel_ = 1, tvAvanceSeek_ = 0.8, tvMesureApres_ = 0;

  function tvSynchroniserHorloge_() {
    let restants = 5;
    function essai() {
      const t0 = Date.now();
      appelServeur("getHeureServeur").then(function (serveur) {
        const rtt = Date.now() - t0;
        if (rtt < tvMeilleurRtt_) { tvMeilleurRtt_ = rtt; tvDecalage_ = serveur - (t0 + rtt / 2); tvHorlogeSynchro_ = true; }
      }).catch(function () {}).then(function () { if (--restants > 0 && tvChaineActuelle) essai(); });
    }
    essai();
  }

  // Position (en secondes) que la vidéo devrait avoir à cet instant
  function tvAttendu_() {
    if (!tvRef_) return 0;
    if (tvRef_.serverNow && tvHorlogeSynchro_) return tvRef_.offset + (Date.now() + tvDecalage_ - tvRef_.serverNow) / 1000;
    return tvRef_.offset + (Date.now() - tvRef_.clientMid) / 1000; // repli si l'horloge serveur est indisponible
  }

  function tvDetruireLecteur_() {
    clearInterval(tvSyncInterval_); tvSyncInterval_ = null;
    clearInterval(tvIntervalHorloge_); tvIntervalHorloge_ = null;
    if (tvPlayer_) { try { tvPlayer_.destroy(); } catch (e) { /* déjà détruit */ } }
    tvPlayer_ = null; tvPlayerPret_ = false; tvPlayerVideoId_ = ""; tvCreation_ = false;
    tvVideoDemandee_ = ""; tvModeDemande_ = ""; tvRef_ = null; tvTauxActuel_ = 1; tvMesureApres_ = 0;
    const tap = document.getElementById("tvTapPlay");
    if (tap) tap.style.display = "none";
  }

  function tvAppliquerDemande_() {
    if (!tvPlayer_ || !tvPlayerPret_ || !tvVideoDemandee_) return;
    const depart = tvModeDemande_ === "programme" ? Math.max(0, Math.floor(tvAttendu_() + tvAvanceSeek_) || 0) : 0;
    const termine = tvPlayer_.getPlayerState && tvPlayer_.getPlayerState() === 0;
    if (tvPlayerVideoId_ !== tvVideoDemandee_ || termine) {
      tvPlayerVideoId_ = tvVideoDemandee_;
      tvPlayer_.loadVideoById({ videoId: tvPlayerVideoId_, startSeconds: depart });
      try { tvPlayer_.setPlaybackRate(1); } catch (e) {}
      tvTauxActuel_ = 1;
      tvDebutLecture_ = Date.now();
      tvDernierSeek_ = Date.now();
      tvMesureApres_ = Date.now() + 3500; // une fois lancée, on mesure le retard de chargement
    }
  }

  // Aucun sous-titre ni traduction écrite dans le lecteur TV
  function tvCouperSousTitres_() {
    try { tvPlayer_.unloadModule("captions"); } catch (e) {}
    try { tvPlayer_.unloadModule("cc"); } catch (e) {}
  }

  function tvForcerTailleLecteur_() {
    try {
      const f = tvPlayer_.getIframe();
      f.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;border:0;pointer-events:none;";
    } catch (e) { /* pas grave : la feuille de style s'applique déjà */ }
  }

  function tvAfficherVideo_(videoId, mode) {
    tvVideoDemandee_ = videoId;
    tvModeDemande_ = mode;
    if (tvPlayer_) { tvAppliquerDemande_(); return; }
    if (tvCreation_) return;
    tvCreation_ = true;
    document.getElementById("tvEcranInterieur").innerHTML = '<div id="tvYtHost"></div>';
    chargerApiYoutube_(function () {
      if (!document.getElementById("tvYtHost") || !tvChaineActuelle) { tvCreation_ = false; return; }
      const depart = tvModeDemande_ === "programme" ? Math.max(0, Math.floor(tvAttendu_() + tvAvanceSeek_) || 0) : 0;
      tvPlayerVideoId_ = tvVideoDemandee_;
      tvDebutLecture_ = Date.now();
      tvMesureApres_ = Date.now() + 3500;
      tvPlayer_ = new YT.Player("tvYtHost", {
        host: "https://www.youtube-nocookie.com",
        width: "100%", height: "100%",
        videoId: tvVideoDemandee_,
        playerVars: { autoplay: 1, controls: 0, disablekb: 1, rel: 0, modestbranding: 1, playsinline: 1, fs: 0, cc_load_policy: 0, iv_load_policy: 3, start: depart },
        events: {
          onReady: function () {
            tvPlayerPret_ = true;
            tvCouperSousTitres_();
            tvForcerTailleLecteur_();
            tvPlayer_.playVideo();
            tvAppliquerDemande_();
          },
          onStateChange: function (e) {
            if (!tvPlayer_) return;
            if (e.data === 0) rafraichirTv_();                     // vidéo terminée : on enchaîne tout de suite
            else if (e.data === 2) tvPlayer_.playVideo();          // pas de pause possible : la lecture reprend aussitôt
            else if (e.data === 1) { tvCouperSousTitres_(); setTimeout(tvBoucleSync_, 600); } // la lecture démarre : on vérifie tout de suite la synchro
          }
        }
      });
      tvForcerTailleLecteur_();
      if (!tvSyncInterval_) tvSyncInterval_ = setInterval(tvBoucleSync_, 1000);
      if (!tvIntervalHorloge_) tvIntervalHorloge_ = setInterval(tvSynchroniserHorloge_, 180000);
    });
  }

  // Choisit parmi les vitesses proposées par YouTube la plus proche de 1 dans le sens voulu
  function tvTauxProche_(sens) {
    let taux = [0.5, 0.75, 1, 1.25, 1.5];
    try { taux = tvPlayer_.getAvailablePlaybackRates() || taux; } catch (e) {}
    let meilleur = 1;
    taux.forEach(function (t) {
      if (sens > 0 && t > 1 && (meilleur === 1 || t < meilleur)) meilleur = t;
      if (sens < 0 && t < 1 && (meilleur === 1 || t > meilleur)) meilleur = t;
    });
    return meilleur;
  }

  function tvDefinirTaux_(taux) {
    if (tvTauxActuel_ === taux) return;
    try { tvPlayer_.setPlaybackRate(taux); tvTauxActuel_ = taux; } catch (e) { /* pas grave */ }
  }

  function tvBoucleSync_() {
    if (!tvPlayer_ || !tvPlayerPret_ || !tvChaineActuelle) return;
    const etat = tvPlayer_.getPlayerState();
    const tap = document.getElementById("tvTapPlay");
    if (etat === 2) tvPlayer_.playVideo(); // filet de sécurité : jamais en pause
    // Lecture bloquée par le navigateur (fréquent sur téléphone) : on propose un toucher
    if (etat === 1 || etat === 3) tap.style.display = "none";
    else if (etat !== 0 && Date.now() - tvDebutLecture_ > 4000) tap.style.display = "flex";
    if (!tvRef_ || etat !== 1) return; // programmes seulement (un live suit le direct), et seulement en lecture

    const attendu = tvAttendu_();
    const duree = tvPlayer_.getDuration();
    if (!isFinite(attendu) || (duree && attendu > duree - 1)) { tvDefinirTaux_(1); return; }
    const ecart = tvPlayer_.getCurrentTime() - attendu; // négatif : la vidéo est en retard

    // Mesure du retard de chargement après un saut : on ajuste l'avance pour le prochain
    if (tvMesureApres_ && Date.now() > tvMesureApres_) {
      tvMesureApres_ = 0;
      tvAvanceSeek_ = Math.max(0, Math.min(6, tvAvanceSeek_ - ecart));
    }

    if (Math.abs(ecart) > 4) {
      if (Date.now() - tvDernierSeek_ < 3000) return;
      tvPlayer_.seekTo(Math.max(0, attendu + tvAvanceSeek_), true);
      tvDernierSeek_ = Date.now();
      tvMesureApres_ = Date.now() + 3500;
      tvDefinirTaux_(1);
      return;
    }
    if (ecart < -0.7) tvDefinirTaux_(tvTauxProche_(1));        // en retard : on accélère un peu
    else if (ecart > 0.7) tvDefinirTaux_(tvTauxProche_(-1));   // en avance : on ralentit un peu
    else if (Math.abs(ecart) < 0.25) tvDefinirTaux_(1);        // synchronisé : vitesse normale
  }

  // Au retour sur l'appli (écran rallumé, autre application quittée) : on relance et on recale aussitôt
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState !== "visible" || !tvPlayer_ || !tvPlayerPret_) return;
    try { tvPlayer_.playVideo(); } catch (e) {}
    setTimeout(tvBoucleSync_, 500);
    rafraichirTv_();
  });

  function tvLancerLecture_() {
    if (!tvPlayer_ || !tvPlayerPret_) return;
    try { tvPlayer_.unMute(); } catch (e) {}
    tvPlayer_.playVideo();
    document.getElementById("tvTapPlay").style.display = "none";
  }

  function rafraichirTv_() {
    clearTimeout(tvTimer_);
    if (!tvChaineActuelle) return;
    const id = tvChaineActuelle.ID;
    const t0 = Date.now();
    appelServeur("getTvEnCours", id).then(function (r) {
      if (!tvChaineActuelle || tvChaineActuelle.ID !== id) return;
      const ecran = document.getElementById("tvEcranInterieur");
      const badge = document.getElementById("tvBadgeLive");

      // Chaîne indisponible, ou rien à diffuser : simple écran avec le nom de la chaîne, sans message
      if (!r.succes || r.mode === "vide") {
        tvDetruireLecteur_();
        badge.innerHTML = "";
        ecran.innerHTML = '<div class="tv-vide">📺 ' + escapeHtml(tvLibelle_(tvChaineActuelle)) + '</div>';
        tvTimer_ = setTimeout(rafraichirTv_, (r.succes && r.restant) ? Math.min(60000, Math.max(2, r.restant) * 1000) : 60000);
        return;
      }

      tvRef_ = r.mode === "programme" ? { offset: r.offset, serverNow: r.serverNow, clientMid: (t0 + Date.now()) / 2 } : null;
      badge.innerHTML = r.mode === "live" ? '<span class="tv-badge-live" style="margin:0;">● EN DIRECT</span>' : "";
      tvAfficherVideo_(r.videoId, r.mode);

      const delai = r.mode === "live" ? 30000 : Math.min(30000, Math.max(2, r.restant) * 1000);
      tvTimer_ = setTimeout(rafraichirTv_, delai);
    }).catch(function () { tvTimer_ = setTimeout(rafraichirTv_, 30000); });
  }

  function arreterTv_() {
    clearTimeout(tvTimer_);
    tvChaineActuelle = null;
    tvDetruireLecteur_();
    tvQuitterPleinEcran_();
    const ecran = document.getElementById("tvEcranInterieur");
    if (ecran) ecran.innerHTML = "";
    const zone = document.getElementById("lecteurTvZone");
    if (zone) zone.style.display = "none";
  }

  // Plein écran : natif quand le navigateur le permet (ordinateur, Android, iPad) ; sur iPhone,
  // où l'API n'existe pas pour une zone de page, repli sur un affichage qui couvre tout l'écran.
  let tvPseudoPleinEcran_ = false;

  function tvEstPleinEcran_() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement) || tvPseudoPleinEcran_;
  }

  function tvMajBoutonPlein_() {
    const btn = document.getElementById("tvBtnPleinEcran");
    if (btn) btn.textContent = tvEstPleinEcran_() ? "✕" : "⛶";
  }

  function tvVerrouillerPaysage_() {
    try { if (screen.orientation && screen.orientation.lock) screen.orientation.lock("landscape").catch(function () {}); } catch (e) {}
  }

  function tvActiverPseudoPleinEcran_() {
    tvPseudoPleinEcran_ = true;
    document.getElementById("lecteurTvZone").classList.add("tv-plein-ecran-css");
    document.body.style.overflow = "hidden";
    tvMajBoutonPlein_();
  }

  function tvQuitterPleinEcran_() {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      try { (document.exitFullscreen || document.webkitExitFullscreen).call(document); } catch (e) {}
    }
    if (tvPseudoPleinEcran_) {
      tvPseudoPleinEcran_ = false;
      const el = document.getElementById("lecteurTvZone");
      if (el) el.classList.remove("tv-plein-ecran-css");
      document.body.style.overflow = "";
    }
    try { if (screen.orientation && screen.orientation.unlock) screen.orientation.unlock(); } catch (e) {}
    tvMajBoutonPlein_();
  }

  function tvPleinEcran_() {
    if (tvEstPleinEcran_()) { tvQuitterPleinEcran_(); return; }
    const el = document.getElementById("tvEcran");
    const demander = el.requestFullscreen || el.webkitRequestFullscreen;
    if (demander) {
      try {
        const p = demander.call(el);
        if (p && p.then) p.then(tvVerrouillerPaysage_).catch(tvActiverPseudoPleinEcran_);
        else tvVerrouillerPaysage_();
        return;
      } catch (e) { /* repli ci-dessous */ }
    }
    tvActiverPseudoPleinEcran_();
  }

  document.addEventListener("fullscreenchange", tvMajBoutonPlein_);
  document.addEventListener("webkitfullscreenchange", tvMajBoutonPlein_);

  // Déplacement du lecteur flottant : APPUI LONG (~0,4 s) sur le lecteur, puis on glisse (doigt ou souris).
  // Un appui bref reste un appui normal ; si le doigt bouge avant la fin de l'appui long, rien ne se passe.
  function rendreTvDeplacable_() {
    const el = document.getElementById("lecteurTvZone");
    if (!el) return;
    const DUREE_APPUI_LONG = 400, TOLERANCE = 10;
    let etat = null; // { x, y, dx, dy, actif, timer }

    function annuler() {
      if (etat && etat.timer) clearTimeout(etat.timer);
      if (etat && etat.actif) el.classList.remove("tv-deplacement");
      etat = null;
    }

    el.addEventListener("pointerdown", function (e) {
      if (e.target.closest("button") || el.classList.contains("tv-plein-ecran-css")) return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      annuler();
      const r = el.getBoundingClientRect();
      etat = { x: e.clientX, y: e.clientY, dx: e.clientX - r.left, dy: e.clientY - r.top, actif: false, timer: null, id: e.pointerId };
      etat.timer = setTimeout(function () {
        if (!etat) return;
        etat.actif = true;
        el.classList.add("tv-deplacement");
        try { el.setPointerCapture(etat.id); } catch (err) {}
        try { if (navigator.vibrate) navigator.vibrate(25); } catch (err) {}
      }, DUREE_APPUI_LONG);
    });

    el.addEventListener("pointermove", function (e) {
      if (!etat) return;
      if (!etat.actif) {
        // Le doigt a bougé avant la fin de l'appui long : ce n'est pas un déplacement voulu
        if (Math.abs(e.clientX - etat.x) + Math.abs(e.clientY - etat.y) > TOLERANCE) annuler();
        return;
      }
      e.preventDefault();
      const left = Math.max(6, Math.min(window.innerWidth - el.offsetWidth - 6, e.clientX - etat.dx));
      const top = Math.max(6, Math.min(window.innerHeight - el.offsetHeight - 6, e.clientY - etat.dy));
      el.style.left = left + "px";
      el.style.top = top + "px";
      el.style.right = "auto";
      el.style.bottom = "auto";
      el.style.transform = "none";
    });

    el.addEventListener("pointerup", annuler);
    el.addEventListener("pointercancel", annuler);
    el.addEventListener("contextmenu", function (e) { e.preventDefault(); }); // pas de menu système pendant l'appui long

    // Si l'écran change de taille (rotation), on garde le lecteur dans la zone visible
    window.addEventListener("resize", function () {
      if (!el.style.left || el.classList.contains("tv-plein-ecran-css")) return;
      const left = Math.max(6, Math.min(window.innerWidth - el.offsetWidth - 6, parseFloat(el.style.left) || 6));
      const top = Math.max(6, Math.min(window.innerHeight - el.offsetHeight - 6, parseFloat(el.style.top) || 6));
      el.style.left = left + "px";
      el.style.top = top + "px";
    });
  }

  // --- Grille publique ---
  function tvHtmlGrille_(liste) {
    if (!liste.length) return '<p class="item-desc">Aucun créneau programmé cette semaine.</p>';
    return '<p class="field-label">📅 Grille des 7 prochains jours</p>' + liste.map(function (g) {
      const quand = new Date(g.Debut).toLocaleString("fr-FR", { weekday: "short", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
      return '<div class="item-row" style="padding:8px 0;"><div><div class="item-nom">' + tvIcone_(g.Type) + escapeHtml(g.Titre) + '</div><div class="item-desc">' + quand + '</div></div></div>';
    }).join("");
  }

  // La grille n'est visible que par les TV owner (sur leur chaîne) et les administrateurs de contenu ;
  // le serveur refuse l'accès à tous les autres.


  // --- Studio du TV owner ---
  function chargerStudioTv_() {
    appelServeur("getMaChaineTv", membreCourant.code).then(afficherStudioTv_)
      .catch(function (err) { alert("Erreur : " + err.message); });
  }

  function afficherStudioTv_(res) {
    const c = res.chaine;
    document.getElementById("tvChNom").value = c ? c.Nom : "";
    document.getElementById("tvChDesc").value = c ? c.Description : "";
    document.getElementById("tvChNumero").textContent = (c && c.Numero) ? "— " + tvNumeroFmt_(c.Numero) : "";
    document.getElementById("tvChLogoPreview").innerHTML = (c && c.LogoBase64) ? '<img src="data:image/png;base64,' + c.LogoBase64 + '">' : "📺";
    tvLogoBase64_ = "";
    document.getElementById("tvStudioSuite").style.display = (c && !c.Suspendue) ? "block" : "none";
    const bandeau = document.getElementById("tvStudioSuspendue");
    bandeau.style.display = (c && c.Suspendue) ? "block" : "none";
    if (c && c.Suspendue) bandeau.textContent = "⛔ Votre chaîne est suspendue" + (c.Motif ? " : " + c.Motif : ".");
    if (!c) return;

    tvProgrammesStudio_ = res.programmes || [];
    tvAfficherProgrammesStudio_();
    afficherCreneauxStudio_(res);

    const live = res.live || {};
    document.getElementById("tvLiveFormZone").style.display = live.prepare ? "none" : "block";
    document.getElementById("tvLiveInfosZone").style.display = live.prepare ? "block" : "none";
    if (live.prepare) {
      document.getElementById("tvLiveStatut").textContent = live.enDirect ? "🔴 Vous êtes en direct" : "⏳ Live prêt — en attente de votre signal vidéo";
      document.getElementById("tvLiveAdresse").textContent = live.adresse;
      document.getElementById("tvLiveCle").textContent = live.cle;
    }
  }

  function tvFmtDuree_(s) {
    s = Number(s) || 0;
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60;
    return h ? h + " h " + String(m).padStart(2, "0") + " min" : m + " min " + String(sec).padStart(2, "0") + " s";
  }

  // Playlists de la bibliothèque, dans l'ordre d'ajout
  function tvGroupesStudio_() {
    const map = {}, ordre = [];
    tvProgrammesStudio_.forEach(function (p) {
      if (!p.GroupeId) return;
      if (!map[p.GroupeId]) { map[p.GroupeId] = { id: p.GroupeId, titre: p.Groupe || "Playlist", items: [] }; ordre.push(p.GroupeId); }
      map[p.GroupeId].items.push(p);
    });
    return ordre.map(function (id) { return map[id]; });
  }

  function tvBoutonBoucle_(actif, action, libelle) {
    return '<button class="small secondary btn-boucle' + (actif ? " actif" : "") + '" onclick="' + action + '" title="Diffuser pendant les temps morts">' + libelle + '</button>';
  }

  function tvLigneProgramme_(p, avecOrdre) {
    return '<div class="item-row"><div style="min-width:0;"><div class="item-nom">' + escapeHtml(p.Titre) + '</div>' +
      '<div class="item-desc">' + tvFmtDuree_(p.Duree) + '</div></div>' +
      '<div style="display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end;">' +
      tvBoutonBoucle_(p.Boucle, "basculerBoucleProgrammeTv_('" + p.ID + "'," + (!p.Boucle) + ")", "🔁") +
      (avecOrdre ? '<button class="secondary small" onclick="deplacerProgrammeTv_(\'' + p.ID + '\',-1)">▲</button><button class="secondary small" onclick="deplacerProgrammeTv_(\'' + p.ID + '\',1)">▼</button>' : "") +
      '<button class="danger-outline small" onclick="supprimerProgrammeTvClick(\'' + p.ID + '\')">🗑️</button></div></div>';
  }

  function tvAfficherProgrammesStudio_() {
    const zone = document.getElementById("tvListeProgrammes");
    const resume = document.getElementById("tvResumeBoucle");
    const enBoucle = tvProgrammesStudio_.filter(function (p) { return p.Boucle; });
    const totalBoucle = enBoucle.reduce(function (a, p) { return a + Number(p.Duree); }, 0);
    resume.textContent = enBoucle.length
      ? "🔁 Temps morts : " + enBoucle.length + " vidéo(s) en boucle · " + tvFmtDuree_(totalBoucle)
      : "🔁 Aucune vidéo en boucle : quand rien n'est programmé, votre chaîne reste en attente. Appuyez sur 🔁 à côté d'une vidéo pour la diffuser pendant les temps morts.";
    if (!tvProgrammesStudio_.length) { zone.innerHTML = '<p class="empty-state">Aucune vidéo. Ajoutez votre première vidéo ou playlist ci-dessus.</p>'; return; }

    let html = tvProgrammesStudio_.filter(function (p) { return !p.GroupeId; }).map(function (p) { return tvLigneProgramme_(p, true); }).join("");
    tvGroupesStudio_().forEach(function (g) {
      const total = g.items.reduce(function (a, p) { return a + Number(p.Duree); }, 0);
      const toutes = g.items.every(function (p) { return p.Boucle; });
      html += '<details class="tv-groupe"><summary><span class="item-nom">🎞️ ' + escapeHtml(g.titre) + '</span> <span class="item-desc">' + g.items.length + ' vidéo(s) · ' + tvFmtDuree_(total) + '</span></summary>' +
        '<div style="display:flex;gap:6px;flex-wrap:wrap;margin:8px 0;">' +
        tvBoutonBoucle_(toutes, "basculerBoucleGroupeTv_('" + g.id + "'," + (!toutes) + ")", "🔁 Toute la playlist en boucle") +
        '<button class="danger-outline small" onclick="supprimerGroupeTvClick(\'' + g.id + '\')">🗑️ Retirer la playlist</button></div>' +
        g.items.map(function (p) { return tvLigneProgramme_(p, false); }).join("") + '</details>';
    });
    zone.innerHTML = html;
  }

  function basculerBoucleProgrammeTv_(id, actif) {
    appelServeur("definirBoucleProgrammeTv", membreCourant.code, id, actif).then(chargerStudioTv_)
      .catch(function (e) { alert("Erreur : " + e.message); });
  }

  function basculerBoucleGroupeTv_(groupeId, actif) {
    appelServeur("definirBoucleGroupeTv", membreCourant.code, groupeId, actif).then(chargerStudioTv_)
      .catch(function (e) { alert("Erreur : " + e.message); });
  }

  function supprimerGroupeTvClick(groupeId) {
    confirmerApp_("Retirer cette playlist et toutes ses vidéos de la bibliothèque ?", function () {
    appelServeur("supprimerGroupeTv", membreCourant.code, groupeId).then(chargerStudioTv_)
      .catch(function (e) { alert("Erreur : " + e.message); });
    });
  }

  function ajouterPlaylistTvClick() {
    const err = document.getElementById("erreurTvProg");
    const statut = document.getElementById("tvPlStatut");
    err.style.display = "none";
    const lien = document.getElementById("tvPlLien").value.trim();
    if (!lien) { err.textContent = "Collez un lien de playlist YouTube."; err.style.display = "block"; return; }
    statut.textContent = "Import de la playlist en cours… (cela peut prendre une vingtaine de secondes)";
    appelServeur("ajouterPlaylistTv", membreCourant.code, lien).then(function (res) {
      statut.textContent = "";
      document.getElementById("tvPlLien").value = "";
      alert("✓ Playlist « " + res.titre + " » ajoutée : " + res.ajoutees + " vidéo(s)." +
        (res.ignorees ? "\n" + res.ignorees + " vidéo(s) ignorée(s) (privées, non intégrables ou au-delà de la limite)." : ""));
      chargerStudioTv_();
    }).catch(function (e) {
      statut.textContent = "";
      err.textContent = "Erreur : " + e.message;
      err.style.display = "block";
    });
  }

  function gererLogoChaineTv_(evt) {
    const f = evt.target.files[0];
    if (!f) return;
    traiterImageCarree(f, 200, function (base64) {
      tvLogoBase64_ = base64;
      document.getElementById("tvChLogoPreview").innerHTML = '<img src="data:image/png;base64,' + base64 + '">';
    });
  }

  function sauvegarderChaineTvClick() {
    const err = document.getElementById("erreurTvChaine");
    err.style.display = "none";
    appelServeur("creerOuModifierChaineTv", membreCourant.code,
      document.getElementById("tvChNom").value.trim(), document.getElementById("tvChDesc").value.trim(), tvLogoBase64_)
      .then(function () { alert("✓ Chaîne enregistrée."); chargerStudioTv_(); })
      .catch(function (e) { err.textContent = "Erreur : " + e.message; err.style.display = "block"; });
  }

  function ajouterProgrammeTvClick() {
    const err = document.getElementById("erreurTvProg");
    err.style.display = "none";
    const lien = document.getElementById("tvProgLien").value.trim();
    if (!lien) { err.textContent = "Collez un lien YouTube."; err.style.display = "block"; return; }
    appelServeur("ajouterProgrammeTv", membreCourant.code, lien)
      .then(function () { document.getElementById("tvProgLien").value = ""; chargerStudioTv_(); })
      .catch(function (e) { err.textContent = "Erreur : " + e.message; err.style.display = "block"; });
  }

  function supprimerProgrammeTvClick(id) {
    confirmerApp_("Retirer cette vidéo de la bibliothèque ?", function () {
    appelServeur("supprimerProgrammeTv", membreCourant.code, id).then(chargerStudioTv_)
      .catch(function (e) { alert("Erreur : " + e.message); });
    });
  }

  function deplacerProgrammeTv_(id, direction) {
    const singles = tvProgrammesStudio_.filter(function (p) { return !p.GroupeId; });
    const groupes = tvProgrammesStudio_.filter(function (p) { return p.GroupeId; });
    const i = singles.findIndex(function (p) { return p.ID === id; });
    const j = i + direction;
    if (i < 0 || j < 0 || j >= singles.length) return;
    const tmp = singles[i]; singles[i] = singles[j]; singles[j] = tmp;
    appelServeur("definirOrdreProgrammesTv", membreCourant.code, singles.concat(groupes).map(function (p) { return p.ID; }))
      .then(chargerStudioTv_).catch(function (e) { alert("Erreur : " + e.message); });
  }

  // --- Studio : créneaux de la grille ---
  function tvCrChangerType_() {
    const type = document.getElementById("tvCrType").value;
    document.getElementById("tvCrVideoZone").style.display = type === "video" ? "block" : "none";
    document.getElementById("tvCrGroupeZone").style.display = type === "playlist" ? "block" : "none";
    document.getElementById("tvCrLiveZone").style.display = type === "live" ? "block" : "none";
  }

  function afficherCreneauxStudio_(res) {
    const select = document.getElementById("tvCrProgramme");
    select.innerHTML = tvProgrammesStudio_.length
      ? tvProgrammesStudio_.map(function (p) { return '<option value="' + p.ID + '">' + escapeHtml((p.Groupe ? p.Groupe + " › " : "") + p.Titre) + '</option>'; }).join("")
      : '<option value="">Ajoutez d\'abord une vidéo ci-dessus</option>';
    const groupes = tvGroupesStudio_();
    document.getElementById("tvCrGroupe").innerHTML = groupes.length
      ? groupes.map(function (g) { return '<option value="' + escapeHtml(g.id) + '">' + escapeHtml(g.titre) + ' (' + g.items.length + ' vidéos)</option>'; }).join("")
      : '<option value="">Ajoutez d\'abord une playlist ci-dessus</option>';
    const zone = document.getElementById("tvListeCreneaux");
    const liste = res.creneaux || [];
    if (!liste.length) { zone.innerHTML = '<p class="empty-state">Aucun créneau programmé.</p>'; return; }
    zone.innerHTML = liste.map(function (g) {
      const quand = new Date(g.DebutTs).toLocaleString("fr-FR", { weekday: "short", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" });
      const rep = g.Repetition === "Quotidienne" ? " · chaque jour" : (g.Repetition === "Hebdomadaire" ? " · chaque semaine" : "");
      return '<div class="item-row"><div style="min-width:0;"><div class="item-nom">' + tvIcone_(g.Type) + escapeHtml(g.Titre) + '</div>' +
        '<div class="item-desc">' + quand + rep + ' · ' + Math.round(g.Duree / 60) + ' min</div></div>' +
        '<button class="danger-outline small" onclick="supprimerCreneauTvClick(\'' + g.ID + '\')">🗑️</button></div>';
    }).join("");
  }

  function ajouterCreneauTvClick() {
    const err = document.getElementById("erreurTvCreneau");
    err.style.display = "none";
    const type = document.getElementById("tvCrType").value;
    const debutVal = document.getElementById("tvCrDebut").value;
    if (!debutVal) { err.textContent = "Choisissez la date et l'heure de début."; err.style.display = "block"; return; }
    const cible = type === "playlist" ? document.getElementById("tvCrGroupe").value : document.getElementById("tvCrProgramme").value;
    appelServeur("ajouterCreneauTv", membreCourant.code, type,
      document.getElementById("tvCrTitreLive").value.trim(),
      cible,
      new Date(debutVal).getTime(),
      document.getElementById("tvCrDuree").value,
      document.getElementById("tvCrRepetition").value)
      .then(function () { document.getElementById("tvCrDebut").value = ""; document.getElementById("tvCrTitreLive").value = ""; chargerStudioTv_(); })
      .catch(function (e) { err.textContent = "Erreur : " + e.message; err.style.display = "block"; });
  }

  function supprimerCreneauTvClick(id) {
    confirmerApp_("Retirer ce créneau de la grille ?", function () {
    appelServeur("supprimerCreneauTv", membreCourant.code, id).then(chargerStudioTv_)
      .catch(function (e) { alert("Erreur : " + e.message); });
    });
  }

  // --- Studio : live ---
  function demarrerLiveTvClick() {
    const err = document.getElementById("erreurTvLive");
    err.style.display = "none";
    appelServeur("demarrerLiveTv", membreCourant.code, document.getElementById("tvLiveTitre").value.trim())
      .then(chargerStudioTv_)
      .catch(function (e) { err.textContent = "Erreur : " + e.message; err.style.display = "block"; });
  }

  function arreterLiveTvClick() {
    confirmerApp_("Terminer le live ? L'enregistrement sera conservé sur YouTube.", function () {
    appelServeur("arreterLiveTv", membreCourant.code).then(chargerStudioTv_)
      .catch(function (e) { alert("Erreur : " + e.message); });
    });
  }

  function toggleTvOwnerClick(code, estTvOwner) {
    appelServeur("definirStatutTvOwner", membreCourant.code, code, estTvOwner).then(function () {
      appelServeur("getMembresAdmin", membreCourant.code).then(afficherMembresAdmin);
    }).catch(function (err) { alert("Erreur : " + err.message); });
  }

  // --- Alertes : chaîne suivie en direct / live imminent (appli ouverte) ---
  let tvEtatPrecedent_ = null;
  const tvRappelsFaits_ = {};

  function verifierAlertesTv_() {
    if (document.visibilityState === "hidden") return;
    const favoris = tvFavoris_();
    if (!favoris.length) { tvEtatPrecedent_ = null; return; }
    appelServeur("getTvChaines", true).then(function (liste) {
      const maintenant = Date.now();
      const etat = {};
      (liste || []).forEach(function (c) {
        etat[c.ID] = c.EnDirect;
        const existante = tvChainesCache.find(function (x) { return x.ID === c.ID; });
        if (existante) { existante.EnDirect = c.EnDirect; existante.ProchainLive = c.ProchainLive; }
        if (favoris.indexOf(c.ID) === -1) return;
        if (tvChaineActuelle && tvChaineActuelle.ID === c.ID) return; // déjà en train de la regarder
        if (tvEtatPrecedent_ && c.EnDirect && !tvEtatPrecedent_[c.ID]) alerterTv_(c, "est maintenant en direct !");
        if (c.ProchainLive && c.ProchainLive > maintenant && c.ProchainLive - maintenant <= 600000) {
          const cle = c.ID + ":" + c.ProchainLive;
          if (!tvRappelsFaits_[cle]) {
            tvRappelsFaits_[cle] = true;
            alerterTv_(c, "démarre un live dans " + Math.max(1, Math.round((c.ProchainLive - maintenant) / 60000)) + " min.");
          }
        }
      });
      tvEtatPrecedent_ = etat;
    }).catch(function () { /* nouvelle tentative au prochain cycle */ });
  }

  function alerterTv_(c, message) {
    jouerSonAlerte_();
    if ("Notification" in window && Notification.permission === "granted") {
      try { new Notification("📺 " + tvLibelle_(c), { body: "La chaîne " + message, icon: "icon-192.png" }); } catch (e) { /* pas grave */ }
    }
    const b = document.createElement("div");
    b.style.cssText = "position:fixed;top:12px;left:50%;transform:translateX(-50%);z-index:9999;background:linear-gradient(135deg,#111111,#3a3a3a);color:#fff;padding:14px 18px;border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.35);max-width:calc(100% - 24px);text-align:center;font-size:13px;font-weight:700;";
    b.innerHTML = "📺 La chaîne « " + escapeHtml(tvLibelle_(c)) + " » " + message +
      '<div style="display:flex;gap:8px;justify-content:center;margin-top:8px;">' +
      '<button style="width:auto;padding:7px 16px;background:#fff;color:#111111;border-radius:8px;font-size:12px;font-weight:800;border:none;" onclick="ouvrirChaineTvDepuisAlerte_(\'' + c.ID + '\');this.closest(\'div\').parentElement.remove()">▶ Regarder</button>' +
      '<button style="width:auto;padding:7px 16px;background:rgba(255,255,255,.25);color:#fff;border-radius:8px;font-size:12px;font-weight:800;border:none;" onclick="this.closest(\'div\').parentElement.remove()">OK</button></div>';
    document.body.appendChild(b);
    setTimeout(function () { if (b.parentElement) b.remove(); }, 20000);
  }

  function ouvrirChaineTvDepuisAlerte_(id) {
    afficherOnglet("tv");
    appelServeur("getTvChaines").then(function (liste) {
      tvChainesCache = liste || [];
      regarderChaineTv(id);
    });
  }

  // --- Admin > TV ---
  function afficherTvAdmin(liste) {
    liste = liste || [];
    const zone = document.getElementById("adminListeTv");
    if (!liste.length) { zone.innerHTML = '<p class="empty-state">Aucune chaîne TV pour le moment.</p>'; return; }
    zone.innerHTML = liste.map(function (c) {
      const logo = c.LogoBase64 ? '<img class="tv-logo" src="data:image/png;base64,' + c.LogoBase64 + '">' : '<div class="tv-logo">📺</div>';
      const suspendue = c.Statut === "Suspendue";
      const pill = suspendue ? '<span class="role-pill role-admin">Suspendue</span>'
        : (c.EnDirect ? '<span class="tv-badge-live" style="margin:0;">● EN DIRECT</span>' : '<span class="role-pill role-membre">Active</span>');
      const motif = suspendue ? '<div class="item-desc">Motif : ' + escapeHtml(c.Motif === "STATUT_RETIRE" ? "statut TV owner retiré" : (c.Motif || "—")) + '</div>' : "";
      const voirLive = (c.EnDirect && c.LiveVideoId)
        ? '<a class="secondary small" style="text-decoration:none;display:inline-block;width:auto;" href="https://www.youtube.com/watch?v=' + c.LiveVideoId + '" target="_blank">👁 Voir le live</a>' : "";
      const couper = c.LivePrepare ? '<button class="danger-outline small" onclick="couperLiveChaineTvClick(\'' + c.ID + '\')">⏹ Couper le live</button>' : "";
      const bascule = suspendue
        ? '<button class="secondary small" onclick="reactiverChaineTvClick(\'' + c.ID + '\')">Réactiver</button>'
        : '<button class="danger-outline small" onclick="suspendreChaineTvClick(\'' + c.ID + '\')">Suspendre</button>';
      return '<div class="item-block"><div class="item-row" style="border:none;padding:0;">' +
        '<div style="display:flex;gap:12px;align-items:center;min-width:0;">' + logo +
        '<div style="min-width:0;"><div class="item-nom"><span class="tv-num">' + (c.Numero ? tvNumeroFmt_(c.Numero) : "?") + '</span>' + escapeHtml(c.Nom) + '</div>' +
        '<div class="item-desc">Par ' + escapeHtml(c.Proprietaire) + (c.ProprietaireTel ? " · " + escapeHtml(c.ProprietaireTel) : "") + '</div>' +
        '<div class="item-desc">' + c.NbProgrammes + ' vidéo(s) · ' + c.NbCreneaux + ' créneau(x)</div>' + motif + '</div></div>' +
        pill + '</div>' +
        '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px;">' + voirLive + couper +
        '<button class="secondary small" onclick="voirGrilleTvAdmin(\'' + c.ID + '\')">📅 Grille</button>' + bascule +
        '<button class="danger-outline small" onclick="supprimerChaineTvClick(\'' + c.ID + '\')">🗑️ Supprimer</button></div>' +
        '<div id="grilleAdmin-' + c.ID + '" style="margin-top:8px;"></div></div>';
    }).join("");
  }

  function voirGrilleTvAdmin(id) {
    const zone = document.getElementById("grilleAdmin-" + id);
    if (zone.innerHTML) { zone.innerHTML = ""; return; }
    zone.innerHTML = '<div class="loading">Chargement…</div>';
    appelServeur("getGrilleTvAdmin", membreCourant.code, id).then(function (res) {
      zone.innerHTML = res.succes ? tvHtmlGrille_(res.grille || []) : '<p class="error">' + escapeHtml(res.message || "Accès refusé.") + '</p>';
    }).catch(function (e) { zone.innerHTML = '<p class="error">Erreur : ' + escapeHtml(e.message) + '</p>'; });
  }

  function rechargerTvAdmin_() {
    appelServeur("getTvChainesAdmin", membreCourant.code).then(afficherTvAdmin).catch(function (err) { afficherErreurZone("adminListeTv", err); });
  }

  function suspendreChaineTvClick(id) {
    demanderTexteApp_("Motif de la suspension (visible par le TV owner) :", function (motif) {
      appelServeur("suspendreChaineTv", membreCourant.code, id, motif).then(rechargerTvAdmin_).catch(function (e) { alert("Erreur : " + e.message); });
    });
  }

  function reactiverChaineTvClick(id) {
    appelServeur("reactiverChaineTv", membreCourant.code, id).then(function (res) {
      if (res && res.succes === false) alert(res.message);
      rechargerTvAdmin_();
    }).catch(function (e) { alert("Erreur : " + e.message); });
  }

  function couperLiveChaineTvClick(id) {
    confirmerApp_("Couper le live de cette chaîne maintenant ?", function () {
    appelServeur("couperLiveChaineTv", membreCourant.code, id).then(rechargerTvAdmin_).catch(function (e) { alert("Erreur : " + e.message); });
    });
  }

  function supprimerChaineTvClick(id) {
    confirmerApp_("Supprimer définitivement cette chaîne, ses vidéos et sa grille ? (Les replays YouTube restent sur votre chaîne.)", function () {
    appelServeur("supprimerChaineTv", membreCourant.code, id).then(rechargerTvAdmin_).catch(function (e) { alert("Erreur : " + e.message); });
    });
  }

  // ==================== FENÊTRES DE DIALOGUE DE L'APPLICATION ====================
  // Les fenêtres natives du navigateur (alert / confirm / prompt) affichent le nom du site
  // ("xxx.github.io indique…"). On les remplace par des fenêtres de l'application, sans nom de site.
  function creerDialogueApp_(message, boutons, avecChamp) {
    const overlay = document.createElement("div");
    overlay.className = "dlg-overlay";
    const boite = document.createElement("div");
    boite.className = "dlg-boite";
    const texte = document.createElement("div");
    texte.className = "dlg-texte";
    texte.textContent = message;
    boite.appendChild(texte);
    let champ = null;
    if (avecChamp) {
      champ = document.createElement("textarea");
      champ.rows = 3;
      champ.className = "dlg-champ";
      boite.appendChild(champ);
    }
    const actions = document.createElement("div");
    actions.className = "dlg-actions";
    boutons.forEach(function (b) {
      const btn = document.createElement("button");
      btn.textContent = b.libelle;
      btn.className = b.classe || "";
      btn.onclick = function () { overlay.remove(); if (b.action) b.action(champ ? champ.value : null); };
      actions.appendChild(btn);
    });
    boite.appendChild(actions);
    overlay.appendChild(boite);
    document.body.appendChild(overlay);
    if (champ) champ.focus();
  }

  window.alert = function (message) {
    creerDialogueApp_(String(message === undefined ? "" : message), [{ libelle: "OK" }], false);
  };

  function confirmerApp_(message, onOui) {
    creerDialogueApp_(message, [
      { libelle: "Annuler", classe: "secondary" },
      { libelle: "Confirmer", classe: "flame", action: function () { onOui(); } }
    ], false);
  }

  function demanderTexteApp_(message, onValider) {
    creerDialogueApp_(message, [
      { libelle: "Annuler", classe: "secondary" },
      { libelle: "Valider", classe: "flame", action: function (valeur) { onValider((valeur || "").trim()); } }
    ], true);
  }

  // Texte sûr à placer entre apostrophes dans un attribut onclick="…" : une apostrophe dans un nom
  // (ex. « Aide d'urgence ») cassait le bouton, car le navigateur décode les entités avant d'exécuter le code.
  function jsq_(str) {
    return String(str == null ? "" : str).replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(/\r?\n/g, " ")
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // Nom d'auteur cliquable (page de l'auteur) avec badge « vérifié » ; simple texte si le module Communauté n'est pas chargé.
  function lienAuteur_(nom) { return window.XTR && XTR.lienAuteur ? XTR.lienAuteur(nom) : escapeHtml(nom); }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str || "";
    return div.innerHTML;
  }
</script>
  <script type="text/javascript">
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'fr',
        includedLanguages: 'am,ar,az,be,bg,bn,bs,ca,cs,da,de,el,en,es,et,fa,fi,fr,hi,hr,hu,hy,id,is,it,iw,ja,ka,kk,km,ko,ky,lo,lt,lv,mg,mk,mn,ms,mt,my,ne,nl,no,ny,pl,pt,ro,ru,rw,si,sk,sl,so,sq,sr,st,sv,sw,tg,th,ti,tk,tl,tr,uk,ur,uz,vi,zh-CN,zh-TW',
        autoDisplay: false
      }, 'google_translate_element');
    }
  </script>
  <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
  <script type="text/javascript" src="https://www.youtube.com/iframe_api"></script>
  <!-- ===== Rubrique Événements ===== -->
  <script>
/* ==========================================================================
   JESUS — rubrique « Événements »
   Billetterie, inscriptions, QR codes, votes en ligne, tableau de bord organisateur,
   administration (modération, organisateurs, revenus).
   À charger APRÈS le script principal de index.html :
       (module intégré directement dans index.html)
   ========================================================================== */
(function () {
  "use strict";
  var E = (window.EVT = {});
  var S = {
    vue: "decouvrir", orgVue: "evenements", categorie: "Tous", filtre: "",
    evenements: [], detail: null, panier: {}, paiement: null,
    concours: [], mesVotes: {}, mesEvts: null, mesConcours: null, form: null, cform: null, scan: null
  };
  var CATEGORIES = ["Concert", "Conférence", "Séminaire", "Festival", "Compétition", "Autre"];
  var TYPES_CONCOURS = ["Concours", "Élection", "Award"];

  // ------------------------------------------------------------------ outils
  function esc(t) { return escapeHtml(t == null ? "" : String(t)); }
  function code() { return membreCourant ? membreCourant.code : null; }
  // Identité pour voter : le code du membre connecté, sinon la clé anonyme de cet appareil (vote sans compte).
  function cleVote() { return membreCourant ? membreCourant.code : cleNote_(); }
  function fcfa(n) { return Number(n || 0).toLocaleString("fr-FR") + " FCFA"; }
  function quand(s) {
    if (!s) return "";
    var d = new Date(s);
    return isNaN(d.getTime()) ? esc(s) : d.toLocaleString("fr-FR", { weekday: "short", day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  }
  function echec(e) { alert("Erreur : " + ((e && e.message) || e)); }
  function zone() { return document.getElementById("evtContenu"); }
  function qrUrl(texte, taille) { return "https://api.qrserver.com/v1/create-qr-code/?size=" + taille + "x" + taille + "&margin=6&data=" + encodeURIComponent(texte); }
  function maintenantIso() {
    var d = new Date(), p = function (n) { return String(n).padStart(2, "0"); };
    return d.getFullYear() + "-" + p(d.getMonth() + 1) + "-" + p(d.getDate()) + "T" + p(d.getHours()) + ":" + p(d.getMinutes());
  }
  function besoinMembre() {
    if (membreCourant) return true;
    confirmerApp_("Connectez-vous (ou créez un compte) pour continuer.", quitterVisiteurEtSeConnecter);
    return false;
  }
  function puce(texte, type) { return '<span class="evt-puce ' + (type || "") + '">' + esc(texte) + "</span>"; }
  function puceStatut(s) {
    var m = { "Publié": ["Publié", "ok"], "EnAttente": ["En vérification", "att"], "Brouillon": ["Brouillon", ""], "Refusé": ["Refusé", "ko"], "Annulé": ["Annulé", "ko"] };
    var x = m[s] || [s, ""];
    return puce(x[0], x[1]);
  }

  // Fenêtre modale (au-dessus de l'application, sous les alertes)
  function modal(html, large, surFermeture) {
    var fond = document.createElement("div");
    fond.className = "dlg-overlay";
    fond.style.cssText = "z-index:9500;align-items:flex-start;overflow-y:auto;";
    var boite = document.createElement("div");
    boite.className = "dlg-boite";
    boite.style.cssText = "max-width:" + (large ? "580px" : "420px") + ";margin:16px 0;";
    boite.innerHTML = html;
    fond.appendChild(boite);
    document.body.appendChild(fond);
    var obj = { el: boite, close: function () { if (fond.parentNode) fond.remove(); if (surFermeture) surFermeture(); } };
    fond.addEventListener("click", function (e) { if (e.target === fond) obj.close(); });
    S.modalCourante = obj;
    return obj;
  }
  E.fermer = function () { if (S.modalCourante) S.modalCourante.close(); };

  // Réduit une image choisie (recadrage centré) et la renvoie en JPEG base64
  function reduireImage(fichier, w, h, q) {
    return new Promise(function (ok, ko) {
      var fr = new FileReader();
      fr.onerror = function () { ko(new Error("Lecture de l'image impossible.")); };
      fr.onload = function () {
        var im = new Image();
        im.onerror = function () { ko(new Error("Image illisible.")); };
        im.onload = function () {
          var c = document.createElement("canvas"); c.width = w; c.height = h;
          var s = Math.max(w / im.width, h / im.height), dw = im.width * s, dh = im.height * s;
          c.getContext("2d").drawImage(im, (w - dw) / 2, (h - dh) / 2, dw, dh);
          ok(c.toDataURL("image/jpeg", q));
        };
        im.src = fr.result;
      };
      fr.readAsDataURL(fichier);
    });
  }

  // Un paiement lancé depuis une autre rubrique annule tout paiement d'événement resté en attente
  var ouvrirOrigine = window.openKkiapayWidget;
  window.openKkiapayWidget = function (o) {
    if (!o || o.contexte !== "evenement") S.paiement = null;
    return ouvrirOrigine.apply(this, arguments);
  };

  // ------------------------------------------------------------------ styles
  var css = document.createElement("style");
  css.textContent =
    ".evt-grille{display:grid;gap:12px}.evt-carte{background:#fff;border:1px solid var(--line);border-radius:16px;padding:14px;box-shadow:var(--shadow)}" +
    ".evt-titre{font-family:Montserrat,Arial,sans-serif;font-weight:800;font-size:16px;color:var(--blue2);margin:6px 0}" +
    ".evt-meta{font-size:12px;color:var(--muted);line-height:1.6}.evt-chip{width:auto;padding:7px 12px;font-size:12px;border-radius:999px}" +
    ".evt-kpi{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin:10px 0}.evt-kpi div{background:#f4f7fb;border-radius:12px;padding:10px;text-align:center}" +
    ".evt-kpi b{display:block;font-size:17px;color:var(--blue2)}.evt-kpi span{font-size:11px;color:var(--muted)}" +
    ".evt-cand{display:flex;gap:10px;align-items:center;padding:10px 0;border-bottom:1px solid var(--line)}.evt-cand:last-child{border-bottom:0}" +
    ".evt-cand img,.evt-cand .evt-av{width:52px;height:52px;border-radius:12px;object-fit:cover;background:#eef3f9;flex-shrink:0;display:flex;align-items:center;justify-content:center}" +
    ".evt-ligne-form{border:1px dashed var(--line);border-radius:12px;padding:10px;margin-bottom:8px}.evt-ligne-form input{margin-bottom:6px}" +
    ".evt-2col{display:grid;grid-template-columns:1fr 1fr;gap:6px}.evt-billet{text-align:center;border:2px solid var(--blue2);border-radius:16px;padding:12px;margin-bottom:12px}" +
    ".evt-billet img{display:block;margin:8px auto}";
  document.head.appendChild(css);

  // ------------------------------------------------------------------ navigation
  function nav() {
    var o = [["decouvrir", "🎫 Découvrir"], ["votes", "🗳️ Votes"]];
    if (membreCourant) { o.splice(1, 0, ["billets", "🎟️ Mes billets"]); o.push(["organisateur", "🧑‍💼 Espace organisateur"]); }
    document.getElementById("evtNav").innerHTML = o.map(function (x) {
      return '<button class="small ' + (S.vue === x[0] ? "" : "secondary") + '" onclick="EVT.vue(\'' + x[0] + '\')">' + x[1] + "</button>";
    }).join("");
  }
  window.chargerEvenements = function () {
    nav();
    var v = S.vue;
    if (v === "decouvrir") vueDecouvrir();
    else if (v === "billets") vueBillets();
    else if (v === "votes") vueVotes();
    else if (v === "organisateur") vueOrganisateur();
  };
  E.vue = function (v) { S.vue = v; window.chargerEvenements(); };

  // ------------------------------------------------------------------ RECHERCHE GÉNÉRIQUE + IMAGE EN GRAND
  function normaliser(t) { return String(t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  // Entoure une liste d'éléments (class "evt-item") d'une barre de recherche qui masque ceux qui ne correspondent pas.
  function avecRecherche(contenu, placeholder) {
    return '<div class="evt-zone-rech"><input type="search" class="evt-rech" placeholder="🔎 ' + esc(placeholder) + '" oninput="EVT.chercher(this)" autocomplete="off">' +
      contenu + '<p class="empty-state evt-aucun" style="display:none;">Aucun résultat.</p></div>';
  }
  E.chercher = function (inp) {
    var racine = inp.closest(".evt-zone-rech"), q = normaliser(inp.value).trim(), visibles = 0;
    racine.querySelectorAll(".evt-item").forEach(function (el) {
      var ok = !q || normaliser(el.textContent).indexOf(q) !== -1;
      el.style.display = ok ? "" : "none";
      if (ok) visibles++;
    });
    racine.querySelector(".evt-aucun").style.display = visibles ? "none" : "block";
  };
  var cssZ = document.createElement("style");
  cssZ.textContent = ".evt-rech{margin-bottom:12px}.evt-item img,img.evt-img,img.evt-zoom{cursor:zoom-in}#evtListe img{cursor:pointer}" +
    "#evtVisionneuse{position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,.93);display:flex;align-items:center;justify-content:center;padding:10px;box-sizing:border-box}" +
    "#evtVisionneuse img{max-width:100%;max-height:100%;object-fit:contain;border-radius:6px;touch-action:pinch-zoom}" +
    "#evtVisionneuse button{position:absolute;top:12px;right:12px;width:44px;height:44px;border-radius:50%;border:0;background:rgba(255,255,255,.2);color:#fff;font-size:22px;cursor:pointer;padding:0}";
  document.head.appendChild(cssZ);
  function fermerVisionneuse() { var v = document.getElementById("evtVisionneuse"); if (v) v.remove(); }
  E.agrandir = function (src, alt) {
    fermerVisionneuse();
    var v = document.createElement("div"); v.id = "evtVisionneuse";
    var im = document.createElement("img"); im.src = src; im.alt = alt || "";
    var b = document.createElement("button"); b.textContent = "✕"; b.setAttribute("aria-label", "Fermer");
    v.appendChild(im); v.appendChild(b);
    v.addEventListener("click", fermerVisionneuse);
    document.body.appendChild(v);
  };
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") fermerVisionneuse(); });
  // Un clic sur une image de la rubrique Événements (affiche, candidat, QR code…) l'ouvre en plein écran.
  document.addEventListener("click", function (e) {
    var im = e.target;
    if (!im || im.tagName !== "IMG" || im.closest("#evtVisionneuse") || im.closest("#evtListe")) return;
    if (!im.closest("#evtContenu, #admin-evenements, .dlg-overlay")) return;
    if (!im.src) return;
    e.stopPropagation();
    E.agrandir(im.src, im.alt);
  }, true);

  // ------------------------------------------------------------------ DÉCOUVRIR
  function vueDecouvrir() {
    zone().innerHTML = '<div class="loading">Chargement…</div>';
    appelServeur("getEvenements").then(function (r) { S.evenements = r.evenements || []; listeDecouvrir(); })
      .catch(function (e) { afficherErreurZone("evtContenu", e); });
  }
  function listeDecouvrir() {
    var h = '<input type="text" id="evtRecherche" placeholder="🔎 Rechercher un événement…" value="' + esc(S.filtre) + '" oninput="EVT.filtrer(this.value)">' +
      '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">' +
      ["Tous"].concat(CATEGORIES).map(function (c) {
        return '<button class="evt-chip ' + (S.categorie === c ? "" : "secondary") + '" onclick="EVT.cat(\'' + c + '\')">' + esc(c) + "</button>";
      }).join("") + '</div><div id="evtListe"></div>';
    zone().innerHTML = h;
    cartes();
  }
  E.filtrer = function (v) { S.filtre = v; cartes(); };
  E.cat = function (c) { S.categorie = c; listeDecouvrir(); };
  function cartes() {
    var q = S.filtre.trim().toLowerCase();
    var liste = S.evenements.filter(function (e) {
      return (S.categorie === "Tous" || e.categorie === S.categorie) &&
        (!q || (e.titre + " " + e.lieu + " " + e.organisateur).toLowerCase().indexOf(q) !== -1);
    });
    var z = document.getElementById("evtListe");
    if (!liste.length) { z.innerHTML = '<p class="empty-state">Aucun événement à venir pour le moment.</p>'; return; }
    z.innerHTML = '<div class="mkt-grille">' + liste.map(function (e) {
      var prixTxt = e.complet ? "Complet" : (e.prixMin > 0 ? "Dès " + fcfa(e.prixMin) : "Gratuit");
      return '<div class="mkt-carte" onclick="EVT.ouvrir(\'' + jsq_(e.id) + '\')">' +
        '<div class="mkt-img">' + (e.image ? '<img src="' + e.image + '" alt="" loading="lazy">' : '<div class="mkt-ph">🎫</div>') +
        '<span class="mkt-badge cat">' + esc(e.categorie) + "</span>" + (e.complet ? '<span class="mkt-badge mem ko">Complet</span>' : "") + "</div>" +
        '<div class="mkt-corps"><div class="mkt-titre">' + esc(e.titre) + "</div>" +
        '<div class="mkt-sous">📅 ' + quand(e.dateDebut) + "</div>" +
        '<div class="mkt-sous">📍 ' + esc(e.lieu) + "</div>" +
        '<div class="mkt-prix' + (!e.complet && !(e.prixMin > 0) ? " gratuit" : "") + '">' + prixTxt + "</div>" +
        statsCompactes_("evenement", e.id, e.titre) +
        (e.organisateur ? '<div class="mkt-sous">Par ' + esc(e.organisateur) + (window.XTR ? XTR.badgeVerifie("m:" + e.organisateurCode) : "") + "</div>" : "") +
        '<button class="flame small mkt-mini" onclick="event.stopPropagation();EVT.ouvrir(\'' + jsq_(e.id) + '\')">Découvrir</button></div></div>';
    }).join("") + "</div>";
  }

  // ------------------------------------------------------------------ DÉTAIL + BILLETTERIE
  E.ouvrir = function (id) {
    zone().innerHTML = '<div class="loading">Chargement…</div>';
    appelServeur("getEvenement", id, code()).then(function (r) {
      if (!r.succes) { zone().innerHTML = '<p class="error">' + esc(r.message) + "</p>"; return; }
      S.detail = r.evenement; S.panier = {}; detail(); compterVue_("evenement", id);
      try { zone().scrollIntoView({ block: "start" }); window.scrollTo(0, 0); } catch (x) {}
    }).catch(function (e) { afficherErreurZone("evtContenu", e); });
  };
  function detail() {
    var e = S.detail;
    var h = '<button class="secondary small" onclick="EVT.vue(\'decouvrir\')">← Retour</button>' +
      '<div class="card" style="margin-top:10px;">' + (e.image ? '<img class="evt-img" src="' + e.image + '" alt="">' : "") +
      puce(e.categorie, "") + " " + puceStatut(e.statut) +
      '<div class="evt-titre" style="font-size:20px;">' + esc(e.titre) + "</div>" +
      '<div class="evt-meta">📅 ' + quand(e.dateDebut) + " → " + quand(e.dateFin) + "<br>📍 " + esc(e.lieu) + (e.adresse ? " — " + esc(e.adresse) : "") +
      "<br>👤 Organisé par " + esc(e.organisateur) + (window.XTR ? XTR.badgeVerifie("m:" + e.organisateurCode) : "") + "</div>" + blocNotes_("evenement", e.id) +
      '<p style="white-space:pre-wrap;font-size:14px;line-height:1.6;">' + esc(e.description) + "</p></div>";
    if (window.XTR) h += XTR.blocDirect(e);
    if (e.statut === "Publié" && window.XTR) h += XTR.blocPartage(e);
    if (e.statut !== "Publié") h += '<div class="form-public-note">Cet événement n\'est pas encore public (aperçu réservé à l\'organisateur).</div>';
    else if (!e.inscriptionOuverte) h += '<div class="form-public-note">Les inscriptions sont closes.</div>';
    else {
      if (S.repPour !== e.id) { S.repPour = e.id; S.rep = {}; }
      if ((e.questions || []).length) h += '<div class="card"><p class="field-label">📝 Formulaire d\'inscription</p>' + e.questions.map(champQuestion).join("") + "</div>";
      h += '<div class="card"><p class="field-label">Billets</p><div id="evtBillets"></div></div>';
    }
    zone().innerHTML = h;
    if (e.statut === "Publié" && e.inscriptionOuverte) billets();
  }
  function champQuestion(q) {
    var v = (S.rep || {})[q.id] || "", id = jsq_(q.id);
    var lib = '<label class="field-label">' + esc(q.libelle) + (q.obligatoire ? " *" : "") + "</label>";
    var ev = ' oninput="EVT.rep(\'' + id + '\',this.value)"';
    if (q.type === "paragraphe") return lib + '<textarea rows="3" maxlength="1000"' + ev + ">" + esc(v) + "</textarea>";
    if (q.type === "nombre") return lib + '<input type="text" inputmode="decimal" maxlength="16" value="' + esc(v) + '"' + ev + ">";
    if (q.type === "choix" || q.type === "oui_non") {
      var opts = q.type === "oui_non" ? ["Oui", "Non"] : q.options;
      return lib + '<select onchange="EVT.rep(\'' + id + '\',this.value)"><option value="">— Choisir —</option>' +
        opts.map(function (o) { return "<option " + (o === v ? "selected" : "") + ">" + esc(o) + "</option>"; }).join("") + "</select>";
    }
    return lib + '<input type="text" maxlength="300" value="' + esc(v) + '"' + ev + ">";
  }
  E.rep = function (id, v) { S.rep = S.rep || {}; S.rep[id] = v; };
  function totalPanier() {
    var t = 0, n = 0;
    S.detail.billets.forEach(function (b) { var q = S.panier[b.id] || 0; t += q * b.prix; n += q; });
    return { total: t, nb: n };
  }
  function billets() {
    var e = S.detail;
    var lignes = e.billets.map(function (b) {
      var q = S.panier[b.id] || 0, plein = b.restants === 0;
      var max = Math.min(10, b.restants == null ? 10 : b.restants);
      return '<div class="evt-ligne"><div><div class="item-nom">' + esc(b.nom) + "</div>" +
        '<div class="item-desc">' + (b.prix > 0 ? fcfa(b.prix) : "Gratuit") + (b.restants != null ? " · " + (plein ? "complet" : b.restants + " place(s)") : "") + "</div>" +
        (b.description ? '<div class="item-desc">' + esc(b.description) + "</div>" : "") + "</div>" +
        (plein ? puce("Complet", "ko") :
          '<div class="evt-qte"><button class="secondary" onclick="EVT.qte(\'' + jsq_(b.id) + "'," + (-1) + "," + max + ')">−</button><span>' + q +
          '</span><button class="secondary" onclick="EVT.qte(\'' + jsq_(b.id) + "'," + 1 + "," + max + ')">+</button></div>') + "</div>";
    }).join("");
    var t = totalPanier();
    document.getElementById("evtBillets").innerHTML = lignes +
      '<input id="evPromo" type="text" maxlength="20" placeholder="🏷️ Code promo (facultatif)" style="margin-top:10px;text-transform:uppercase;" value="' + esc(S.promo || "") + '" oninput="EVT.promo(this.value)">' +
      '<div style="margin-top:12px;font-weight:800;color:var(--blue2);">Total : ' + (t.total > 0 ? fcfa(t.total) : (t.nb ? "Gratuit" : "—")) + "</div>" +
      '<button class="flame full-mt" ' + (t.nb ? "" : "disabled") + ' onclick="EVT.reserver()">' + (t.total > 0 ? "💳 Payer " + fcfa(t.total) : "✅ M'inscrire") + "</button>" +
      (t.total > 0 && !(e.questions || []).length ? '<button class="secondary full-mt" onclick="EVT.auPanier()">🛒 Ajouter au panier</button>' : "") +
      '<p class="item-desc" style="margin-top:8px;">Paiement par Mobile Money ou carte bancaire (FedaPay). Vous recevrez un QR code par billet.</p>';
  }
  E.promo = function (v) { S.promo = v; };
  E.qte = function (id, delta, max) {
    var q = Math.max(0, Math.min(max, (S.panier[id] || 0) + delta));
    var total = 0; S.detail.billets.forEach(function (b) { total += (b.id === id ? q : (S.panier[b.id] || 0)); });
    if (total > 10) return;
    S.panier[id] = q; billets();
  };
  E.auPanier = function () {
    var e = S.detail, ajoutes = 0;
    e.billets.forEach(function (b) {
      var q = S.panier[b.id] || 0;
      if (q > 0 && b.prix > 0) { PANIER.ajouter("billet", b.id, b.nom + " — " + e.titre, b.prix, q); ajoutes++; }
    });
    if (!ajoutes) alert("Choisissez au moins un billet payant.");
    else { S.panier = {}; billets(); }
  };
  E.reserver = function () {
    if (!besoinMembre()) return;
    var lignes = [];
    Object.keys(S.panier).forEach(function (id) { if (S.panier[id] > 0) lignes.push({ typeId: id, quantite: S.panier[id] }); });
    if (!lignes.length) return;
    var manque = (S.detail.questions || []).find(function (q) { return q.obligatoire && !String((S.rep || {})[q.id] || "").trim(); });
    if (manque) { alert("Merci de répondre à : « " + manque.libelle + " »."); return; }
    appelServeur("creerCommande", code(), S.detail.id, lignes, S.rep || {}, String(S.promo || "").trim(), window.XTR ? XTR.sourcePartage(S.detail.id) : "").then(function (r) {
      if (!r.succes) { alert(r.message || "Réservation impossible."); return; }
      if (r.reduction > 0) alert("🏷️ Code promo appliqué : −" + fcfa(r.reduction) + ". Total à payer : " + fcfa(r.montant));
      if (r.gratuit) { montrerBillets(r.billets, "✅ Inscription confirmée"); return; }
      payer({ type: "billets", commandeId: r.commandeId }, r.montant);
    }).catch(echec);
  };
  function payer(infos, montant) {
    if (!configApp || !configApp.paiementPublicKey) { alert(messagePaiementNonConfigure_()); return; }
    S.paiement = infos;
    openKkiapayWidget({ amount: montant, api_key: configApp.paiementPublicKey, sandbox: false, data: infos.cle || code(), contexte: "evenement", metadata: { commande: infos.commandeId } });
  }
  addKkiapayListener("success", function (resp) {
    var p = S.paiement;
    if (!p) return;
    S.paiement = null;
    var tid = resp.transactionId || (resp.detail && resp.detail.transactionId);
    var m = modal('<div class="loading">Vérification du paiement…</div>');
    var appel = p.type === "vote" ? appelServeur("confirmerCommandeVote", p.cle || code(), p.commandeId, tid)
      : p.type === "panier" ? appelServeur("confirmerCommandePanier", code(), p.commandeId, tid)
      : appelServeur("confirmerCommande", code(), p.commandeId, tid);
    appel.then(function (r) {
      m.close();
      if (!r.succes) { alert(r.message || "Le paiement n'a pas pu être vérifié. Contactez un responsable."); return; }
      if (p.type === "panier") { apresPaiementPanier(r); return; }
      if (p.type === "vote") { alert("✅ Vote(s) enregistré(s). Merci !"); S.vue = "votes"; window.chargerEvenements(); }
      else montrerBillets(r.billets, "✅ Paiement confirmé");
    }).catch(function (e) { m.close(); echec(e); });
  });

  function htmlBillet(b) {
    return '<div class="evt-billet evt-item"><div class="item-nom">' + esc(b.titre) + "</div>" +
      '<div class="item-desc">' + quand(b.dateDebut) + " · " + esc(b.lieu) + "</div>" +
      '<div style="margin-top:6px;">' + puce(b.type, "") + " " + (b.statut === "Utilisé" ? puce("Déjà utilisé", "att") : b.statut === "Annulé" ? puce("Annulé", "ko") : puce("Valide", "ok")) + "</div>" +
      '<img src="' + qrUrl(b.qr, 200) + '" width="200" height="200" alt="QR code du billet">' +
      '<div class="item-desc">' + esc(b.porteur) + " · " + esc(b.id) + "</div></div>";
  }
  function montrerBillets(liste, titre) {
    modal('<div class="item-nom" style="font-size:16px;margin-bottom:10px;">' + esc(titre) + "</div>" + (liste || []).map(htmlBillet).join("") +
      '<p class="item-desc">Présentez ce QR code à l\'entrée. Retrouvez-le à tout moment dans « Mes billets ».</p>' +
      '<button class="flame full-mt" onclick="EVT.fermer();EVT.vue(\'billets\')">Voir mes billets</button>', true);
  }

  // ------------------------------------------------------------------ MES BILLETS
  function vueBillets() {
    zone().innerHTML = '<div class="loading">Chargement…</div>';
    appelServeur("getMesBillets", code()).then(function (r) {
      var l = r.billets || [];
      zone().innerHTML = l.length ? avecRecherche(l.map(htmlBillet).join(""), "Rechercher un billet (événement, lieu, type…)") : '<p class="empty-state">Vous n\'avez pas encore de billet.</p>';
    }).catch(function (e) { afficherErreurZone("evtContenu", e); });
  }

  // ------------------------------------------------------------------ VOTES
  function vueVotes() {
    zone().innerHTML = '<div class="loading">Chargement…</div>';
    var p = [appelServeur("getConcours")];
    p.push(appelServeur("getMesVotes", cleVote()));
    Promise.all(p).then(function (r) {
      S.concours = r[0].concours || []; S.mesVotes = (r[1] && r[1].votes) || {};
      zone().innerHTML = S.concours.length ? avecRecherche(S.concours.map(carteConcours).join(""), "Rechercher un vote ou un candidat…") : '<p class="empty-state">Aucun vote en cours pour le moment.</p>';
    }).catch(function (e) { afficherErreurZone("evtContenu", e); });
  }
  function barres(c) {
    var max = Math.max.apply(null, c.candidats.map(function (x) { return x.votes || 0; }).concat([1]));
    return max;
  }
  function carteConcours(c) {
    var utilises = S.mesVotes[c.id] || 0, restants = Math.max(0, c.votesParMembre - utilises);
    var etat = c.ouvert ? puce("Vote ouvert", "ok") : puce("Vote clos", "ko");
    var max = c.scoresVisibles ? barres(c) : 1;
    var h = '<div class="card evt-item">' + puce(c.type, "") + " " + etat + (c.prixVote > 0 ? " " + puce(fcfa(c.prixVote) + " / vote", "att") : "") +
      '<div class="evt-titre">' + esc(c.titre) + "</div>" +
      (c.description ? '<p class="item-desc" style="white-space:pre-wrap;">' + esc(c.description) + "</p>" : "") +
      '<div class="evt-meta">' + (c.dateFin ? "⏰ Fin : " + quand(c.dateFin) + "<br>" : "") +
      (c.prixVote > 0 ? (c.exigerCompte && !membreCourant ? "🔒 Un compte est requis pour voter." : "") : (c.exigerCompte && !membreCourant ? "🔒 Un compte est requis pour voter." : "Il vous reste " + restants + " vote(s). Pas besoin de compte.")) +
      (c.scoresVisibles ? "<br>" + c.totalVotes + " vote(s) au total" : "<br>Résultats visibles à la clôture") + "</div>";
    h += c.candidats.map(function (x) {
      var pct = c.scoresVisibles ? Math.round(((x.votes || 0) / Math.max(1, c.totalVotes)) * 100) : 0;
      var peutVoter = c.ouvert && (c.prixVote > 0 || restants > 0);
      return '<div class="evt-cand">' + (x.image ? '<img src="' + x.image + '" alt="">' : '<div class="evt-av">👤</div>') +
        '<div style="flex:1;min-width:0;"><div class="item-nom">' + esc(x.nom) + "</div>" +
        (x.description ? '<div class="item-desc">' + esc(x.description) + "</div>" : "") +
        (c.scoresVisibles ? '<div class="evt-barre" style="margin-top:6px;"><div style="width:' + Math.round((x.votes || 0) / max * 100) + '%"></div></div><div class="item-desc">' + x.votes + " vote(s) · " + pct + " %</div>" : "") + "</div>" +
        (x.video ? '<button class="secondary small" style="width:auto;margin-right:6px;" onclick="EVT.voirVideo(\'' + jsq_(c.id) + "','" + jsq_(x.id) + '\')">▶️ Vidéo</button>' : "") + (peutVoter ? '<button class="flame small" style="width:auto;" onclick="EVT.voter(\'' + jsq_(c.id) + "','" + jsq_(x.id) + '\')">' + (c.exigerCompte && !membreCourant ? "🔒 Se connecter pour voter" : (c.prixVote > 0 ? "Voter" : "🗳️ Voter")) + "</button>" : "") + "</div>";
    }).join("");
    return h + "</div>";
  }
  function trouverCandidat(cid, xid) {
    var c = S.concours.find(function (y) { return y.id === cid; });
    return { c: c, x: c && c.candidats.find(function (y) { return y.id === xid; }) };
  }
  E.voter = function (cid, xid) {
    var t = trouverCandidat(cid, xid);
    if (!t.c || !t.x) return;
    if (t.c.exigerCompte && !besoinMembre()) return;   // sinon : on peut voter sans compte
    if (t.c.prixVote > 0) {
      var m = modal('<div class="item-nom">Voter pour « ' + esc(t.x.nom) + ' »</div><p class="item-desc">' + fcfa(t.c.prixVote) + ' par vote.</p>' +
        '<label class="field-label">Nombre de votes</label><input id="evtNbVotes" type="number" min="1" max="100" value="1" oninput="EVT.majTotalVote(' + t.c.prixVote + ')">' +
        '<div id="evtTotalVote" class="item-nom" style="margin-bottom:10px;">Total : ' + fcfa(t.c.prixVote) + '</div>' +
        '<button class="flame" onclick="EVT.payerVote(\'' + jsq_(cid) + "','" + jsq_(xid) + '\')">💳 Payer et voter</button>');
      return;
    }
    confirmerApp_("Voter pour « " + t.x.nom + " » ? Ce vote est définitif.", function () {
      appelServeur("voter", cleVote(), cid, xid).then(function (r) {
        if (!r.succes) { alert(r.message || "Vote impossible."); return; }
        alert("✅ Vote enregistré. Il vous reste " + r.restants + " vote(s)."); vueVotes();
      }).catch(echec);
    });
  };
  E.voirVideo = function (cid, xid) {
    var t = trouverCandidat(cid, xid);
    if (!t.x || !t.x.video) return;
    var emb = window.XTR ? XTR.integrer(t.x.video) : "";
    var peutVoter = t.c.ouvert && (t.c.prixVote > 0 || Math.max(0, t.c.votesParMembre - (S.mesVotes[cid] || 0)) > 0);
    modal('<div class="item-nom">🎬 ' + esc(t.x.nom) + "</div>" +
      (emb ? '<div style="position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;background:#000;margin:8px 0;"><iframe src="' + esc(emb) + '" style="position:absolute;inset:0;width:100%;height:100%;border:0;" allow="encrypted-media; picture-in-picture; fullscreen" allowfullscreen loading="lazy"></iframe></div>' : '<p class="item-desc">Cette vidéo s\'ouvre sur son site d\'origine.</p>') +
      '<a href="' + esc(t.x.video) + '" target="_blank" rel="noopener"><button class="small secondary" type="button">↗ Ouvrir dans un nouvel onglet</button></a>' +
      (t.x.description ? '<p class="item-desc">' + esc(t.x.description) + "</p>" : "") +
      '<div class="evt-actions"><button class="secondary" onclick="EVT.fermer()">Fermer</button>' +
      (peutVoter ? '<button class="flame" onclick="EVT.fermer();EVT.voter(\'' + jsq_(cid) + "','" + jsq_(xid) + '\')">🗳️ Voter pour lui</button>' : "") + "</div>");
  };
  E.majTotalVote = function (prix) {
    var n = Math.max(1, Math.min(100, parseInt(document.getElementById("evtNbVotes").value, 10) || 1));
    document.getElementById("evtTotalVote").textContent = "Total : " + fcfa(n * prix);
  };
  E.payerVote = function (cid, xid) {
    var n = Math.max(1, Math.min(100, parseInt(document.getElementById("evtNbVotes").value, 10) || 1));
    appelServeur("creerCommandeVote", cleVote(), cid, xid, n).then(function (r) {
      if (!r.succes) { alert(r.message || "Impossible de lancer le paiement."); return; }
      E.fermer();
      payer({ type: "vote", commandeId: r.commandeId, cle: cleVote() }, r.montant);
    }).catch(echec);
  };

  // ------------------------------------------------------------------ ESPACE ORGANISATEUR
  function vueOrganisateur() {
    zone().innerHTML = '<div class="loading">Chargement…</div>';
    appelServeur("getMesEvenements", code()).then(function (r) {
      S.mesEvts = r;
      if (!r.organisateur && !(r.controles || []).length) {
        zone().innerHTML = '<div class="card"><div class="item-nom">🧑‍💼 Devenir organisateur</div><p class="item-desc">Vous pouvez organiser des concerts, conférences, séminaires et festivals, vendre des billets et lancer des votes. Contactez l\'administration pour obtenir le statut d\'organisateur.</p>' +
          '<button class="secondary" onclick="afficherEcranContact()">📞 Contacter l\'administration</button></div>';
        return;
      }
      orgPanneau();
    }).catch(function (e) { afficherErreurZone("evtContenu", e); });
  }
  function orgPanneau() {
    var r = S.mesEvts;
    var onglets = [["evenements", "Événements"], ["concours", "Votes"], ["revenus", "💰 Revenus"], ["scan", "📷 Contrôle"]];
    if (!r.organisateur) onglets = [["scan", "📷 Contrôle"]], S.orgVue = "scan";
    var h = '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">' + onglets.map(function (o) {
      return '<button class="evt-chip ' + (S.orgVue === o[0] ? "" : "secondary") + '" onclick="EVT.org(\'' + o[0] + '\')">' + o[1] + "</button>";
    }).join("") + '</div><div id="evtOrg"></div>';
    zone().innerHTML = h;
    var v = S.orgVue;
    if (v === "evenements") orgEvenements();
    else if (v === "concours") orgConcours();
    else if (v === "revenus") orgRevenus();
    else orgScan();
  }
  E.org = function (v) { S.orgVue = v; orgPanneau(); };
  function orgZone() { return document.getElementById("evtOrg"); }

  // ----- Mes événements
  function orgEvenements() {
    var l = S.mesEvts.evenements || [];
    var h = '<button class="flame" onclick="EVT.nouveau()">＋ Créer un événement</button><div style="margin-top:12px;"></div>';
    var cartesOrg = "";
    cartesOrg = l.length ? l.map(function (e) {
      var peutSoumettre = e.statut === "Brouillon" || e.statut === "Refusé";
      return '<div class="evt-carte evt-item">' + puceStatut(e.statut) + " " + puce(e.categorie, "") +
        '<div class="evt-titre">' + esc(e.titre) + '</div><div class="evt-meta">📅 ' + quand(e.dateDebut) + "<br>📍 " + esc(e.lieu) + "</div>" +
        (e.statut === "Refusé" && e.motifRefus ? '<div class="error" style="margin:6px 0;">Motif du refus : ' + esc(e.motifRefus) + "</div>" : "") +
        '<div class="evt-kpi"><div><b>' + e.vendus + "</b><span>billets</span></div><div><b>" + e.entrees + "</b><span>entrées</span></div><div><b>" + fcfa(e.brut) + "</b><span>ventes</span></div><div><b>" + fcfa(e.net) + "</b><span>net</span></div></div>" +
        '<div class="evt-actions">' +
        '<button class="secondary" onclick="EVT.modifier(\'' + jsq_(e.id) + '\')">✏️ Modifier</button>' +
        (peutSoumettre ? '<button onclick="EVT.soumettre(\'' + jsq_(e.id) + '\')">📤 Soumettre</button>' : '<button class="secondary" onclick="EVT.voir(\'' + jsq_(e.id) + '\')">👁 Voir</button>') +
        '<button class="secondary" onclick="EVT.stats(\'' + jsq_(e.id) + '\')">📊 Statistiques</button>' +
        '<button class="secondary" onclick="EVT.participants(\'' + jsq_(e.id) + "','" + jsq_(e.titre) + '\')">👥 Participants</button>' +
        '<button class="secondary" onclick="EVT.controleurs(\'' + jsq_(e.id) + '\')">🛂 Contrôleurs</button>' +
        (e.statut !== "Annulé" ? '<button class="danger-outline" onclick="EVT.annuler(\'' + jsq_(e.id) + '\')">Annuler</button>' : "") + "</div></div>";
    }).join("") : "";
    orgZone().innerHTML = h + (l.length ? avecRecherche('<div class="evt-grille">' + cartesOrg + "</div>", "Rechercher parmi mes événements…") : '<p class="empty-state">Vous n\'avez pas encore créé d\'événement.</p>');
  }
  E.voir = function (id) { S.vue = "decouvrir"; nav(); E.ouvrir(id); };
  E.soumettre = function (id) {
    confirmerApp_("Envoyer cet événement à l'administration pour vérification ? Il sera publié après validation.", function () {
      appelServeur("soumettreEvenement", code(), id).then(function () { vueOrganisateur(); }).catch(echec);
    });
  };
  E.annuler = function (id) {
    confirmerApp_("Annuler cet événement ? Il ne sera plus visible. Les billets déjà vendus devront être remboursés par vos soins.", function () {
      appelServeur("annulerEvenement", code(), id).then(function () { vueOrganisateur(); }).catch(echec);
    });
  };

  // ----- Formulaire événement
  E.nouveau = function () {
    S.form = { id: "", image: "", questions: [], billets: [{ nom: "Entrée", description: "", prix: 0, quota: 0 }] };
    formEvenement({ titre: "", categorie: "Concert", description: "", lieu: "", adresse: "", dateDebut: "", dateFin: "", inscriptionOuverte: true });
  };
  E.modifier = function (id) {
    var e = (S.mesEvts.evenements || []).find(function (x) { return x.id === id; });
    if (!e) return;
    S.form = { id: e.id, image: e.image || "", questions: (e.questions || []).map(function (q) { return { id: q.id, libelle: q.libelle, type: q.type, obligatoire: q.obligatoire, optTxt: (q.options || []).join("\n") }; }), billets: e.billets.map(function (b) { return { id: b.id, nom: b.nom, description: b.description, prix: b.prix, quota: b.quota, vendus: b.vendus }; }) };
    formEvenement(e);
  };
  function formEvenement(e) {
    var h = '<div class="item-nom" style="font-size:16px;">' + (S.form.id ? "Modifier l'événement" : "Nouvel événement") + "</div>" +
      '<label class="field-label" style="margin-top:10px;">Titre *</label><input id="efTitre" maxlength="120" value="' + esc(e.titre) + '">' +
      '<label class="field-label">Pays concerné</label><select id="efPays">' + PAYS.options(e.pays || "", "🌍 Tous les pays") + "</select>" +
      '<label class="field-label">Catégorie</label><select id="efCat">' + CATEGORIES.map(function (c) { return '<option ' + (c === e.categorie ? "selected" : "") + ">" + c + "</option>"; }).join("") + "</select>" +
      '<label class="field-label">Description *</label><textarea id="efDesc" rows="5" maxlength="4000">' + esc(e.description) + "</textarea>" +
      '<label class="field-label">Lieu *</label><input id="efLieu" maxlength="150" value="' + esc(e.lieu) + '">' +
      '<label class="field-label">Adresse</label><input id="efAdr" maxlength="200" value="' + esc(e.adresse) + '">' +
      '<label class="field-label">Lien du direct (YouTube ou Facebook, facultatif)</label><input id="efDirect" maxlength="300" placeholder="https://…" value="' + esc(e.lienDirect || "") + '">' +
      '<label class="field-label">Lien de la rediffusion (facultatif)</label><input id="efReplay" maxlength="300" placeholder="https://…" value="' + esc(e.lienReplay || "") + '">' +
      '<div class="evt-2col"><div><label class="field-label">Début *</label><input id="efDebut" type="datetime-local" value="' + esc(e.dateDebut) + '"></div>' +
      '<div><label class="field-label">Fin *</label><input id="efFin" type="datetime-local" value="' + esc(e.dateFin) + '"></div></div>' +
      '<label class="field-label">Affiche (image)</label><div id="efApercu">' + (S.form.image ? '<img class="evt-img" src="' + S.form.image + '">' : "") + "</div>" +
      '<label class="file-btn-label">🖼️ Choisir une image<input type="file" accept="image/*" style="display:none;" onchange="EVT.imageEvt(event)"></label>' +
      '<label style="display:flex;gap:8px;align-items:center;margin:12px 0;font-size:13px;"><input type="checkbox" id="efOuvert" style="width:auto;margin:0;" ' + (e.inscriptionOuverte !== false ? "checked" : "") + "> Inscriptions ouvertes</label>" +
      '<p class="field-label">Billets (laissez le prix à 0 pour une inscription gratuite)</p><div id="efBillets"></div>' +
      '<button class="secondary small" onclick="EVT.ajouterBillet()">＋ Ajouter un type de billet</button>' +
      '<p class="field-label" style="margin-top:16px;">📝 Formulaire d\'inscription (questions personnalisées)</p>' +
      '<p class="item-desc">Nom, téléphone et e-mail viennent déjà du profil du membre. Ajoutez ici vos propres questions (12 maximum).</p>' +
      '<div id="efQuestions"></div><button class="secondary small" onclick="EVT.ajouterQuestion()">＋ Ajouter une question</button>' +
      '<div id="efErreur" class="error" style="display:none;margin-top:10px;"></div>' +
      '<div class="evt-actions"><button class="secondary" onclick="EVT.fermer()">Annuler</button><button class="flame" onclick="EVT.enregistrer()">Enregistrer</button></div>';
    modal(h, true);
    lignesBillets();
    lignesQuestions();
  }
  function lignesBillets() {
    document.getElementById("efBillets").innerHTML = S.form.billets.map(function (b, i) {
      if (b.supprimer) return "";
      return '<div class="evt-ligne-form"><input placeholder="Nom (ex : VIP, Standard)" maxlength="60" value="' + esc(b.nom) + '" oninput="EVT.bm(' + i + ",'nom',this.value)\">" +
        '<input placeholder="Description (facultative)" maxlength="200" value="' + esc(b.description) + '" oninput="EVT.bm(' + i + ",'description',this.value)\">" +
        '<div class="evt-2col"><input type="number" min="0" placeholder="Prix FCFA" value="' + (b.prix || 0) + '" ' + (b.vendus ? "disabled title=\"Des billets sont vendus\"" : "") + ' oninput="EVT.bm(' + i + ",'prix',this.value)\">" +
        '<input type="number" min="0" placeholder="Places (0 = illimité)" value="' + (b.quota || 0) + '" oninput="EVT.bm(' + i + ",'quota',this.value)\"></div>" +
        '<button class="danger-outline small" onclick="EVT.rm(' + i + ')">Retirer</button>' + (b.vendus ? ' <span class="item-desc">' + b.vendus + " vendu(s)</span>" : "") + "</div>";
    }).join("");
  }
  var TYPES_Q = [["texte", "Texte court"], ["paragraphe", "Texte long"], ["nombre", "Nombre"], ["choix", "Liste de choix"], ["oui_non", "Oui / Non"]];
  function lignesQuestions() {
    document.getElementById("efQuestions").innerHTML = S.form.questions.map(function (q, i) {
      return '<div class="evt-ligne-form"><input placeholder="Votre question (ex : Quelle est votre église ?)" maxlength="160" value="' + esc(q.libelle) + '" oninput="EVT.qm(' + i + ",'libelle',this.value)\">" +
        '<div class="evt-2col"><select onchange="EVT.qm(' + i + ",'type',this.value);EVT.qr()\">" +
        TYPES_Q.map(function (t) { return '<option value="' + t[0] + '" ' + (t[0] === q.type ? "selected" : "") + ">" + t[1] + "</option>"; }).join("") + "</select>" +
        '<label style="display:flex;gap:6px;align-items:center;font-size:13px;"><input type="checkbox" style="width:auto;margin:0;" ' + (q.obligatoire ? "checked" : "") + ' onchange="EVT.qm(' + i + ",'obligatoire',this.checked)\"> Obligatoire</label></div>" +
        (q.type === "choix" ? '<textarea rows="3" placeholder="Un choix par ligne" oninput="EVT.qm(' + i + ",'optTxt',this.value)\">" + esc(q.optTxt || "") + "</textarea>" : "") +
        '<button class="danger-outline small" onclick="EVT.qs(' + i + ')">Retirer</button></div>';
    }).join("");
  }
  E.qr = lignesQuestions;
  E.qm = function (i, champ, v) { S.form.questions[i][champ] = v; };
  E.qs = function (i) { S.form.questions.splice(i, 1); lignesQuestions(); };
  E.ajouterQuestion = function () {
    if (S.form.questions.length >= 12) { alert("12 questions maximum."); return; }
    S.form.questions.push({ libelle: "", type: "texte", obligatoire: false, optTxt: "" }); lignesQuestions();
  };
  E.bm = function (i, champ, v) { S.form.billets[i][champ] = (champ === "prix" || champ === "quota") ? Number(v) || 0 : v; };
  E.rm = function (i) { var b = S.form.billets[i]; if (b.id) b.supprimer = true; else S.form.billets.splice(i, 1); lignesBillets(); };
  E.ajouterBillet = function () { S.form.billets.push({ nom: "", description: "", prix: 0, quota: 0 }); lignesBillets(); };
  E.imageEvt = function (ev) {
    var f = ev.target.files[0]; if (!f) return;
    reduireImage(f, 960, 540, 0.72).then(function (d) {
      if (d.length > 390000) { alert("Image trop lourde, choisissez-en une plus simple."); return; }
      S.form.image = d; document.getElementById("efApercu").innerHTML = '<img class="evt-img" src="' + d + '">';
    }).catch(echec);
  };
  E.enregistrer = function () {
    var err = document.getElementById("efErreur"); err.style.display = "none";
    var d = {
      id: S.form.id || undefined, titre: document.getElementById("efTitre").value, pays: document.getElementById("efPays").value, categorie: document.getElementById("efCat").value,
      description: document.getElementById("efDesc").value, lieu: document.getElementById("efLieu").value, adresse: document.getElementById("efAdr").value,
      lienDirect: document.getElementById("efDirect").value, lienReplay: document.getElementById("efReplay").value,
      dateDebut: document.getElementById("efDebut").value, dateFin: document.getElementById("efFin").value, image: S.form.image,
      inscriptionOuverte: document.getElementById("efOuvert").checked, billets: S.form.billets,
      questions: S.form.questions.map(function (q) {
        return { id: q.id, libelle: q.libelle, type: q.type, obligatoire: !!q.obligatoire, options: q.type === "choix" ? String(q.optTxt || "").split("\n").map(function (o) { return o.trim(); }).filter(Boolean) : [] };
      })
    };
    appelServeur("enregistrerEvenement", code(), d).then(function (r) {
      if (r && r.succes === false) throw new Error(r.message);
      E.fermer(); vueOrganisateur();
      if (!S.form.id) alert("✅ Événement enregistré en brouillon. Appuyez sur « Soumettre » pour demander sa publication.");
    }).catch(function (e) { err.textContent = e.message; err.style.display = "block"; });
  };

  // ----- Statistiques / participants / contrôleurs
  E.stats = function (id) {
    var m = modal('<div class="loading">Chargement…</div>', true);
    appelServeur("getStatsEvenement", code(), id).then(function (r) {
      var maxJ = Math.max.apply(null, r.parJour.map(function (j) { return j.montant || j.billets; }).concat([1]));
      m.el.innerHTML = '<div class="item-nom" style="font-size:16px;">📊 ' + esc(r.evenement.titre) + "</div>" +
        '<div class="evt-kpi"><div><b>' + r.totalBillets + "</b><span>billets</span></div><div><b>" + r.entrees + "</b><span>entrées</span></div>" +
        "<div><b>" + fcfa(r.brut) + "</b><span>ventes brutes</span></div><div><b>" + fcfa(r.net) + "</b><span>net organisateur</span></div></div>" +
        '<div class="item-desc">Commission de la plateforme : ' + fcfa(r.commission) + "</div>" +
        '<p class="field-label" style="margin-top:12px;">Par type de billet</p>' + r.parType.map(function (t) {
          var pct = t.quota ? Math.round(t.vendus / t.quota * 100) : null;
          return '<div style="margin-bottom:10px;"><div class="item-nom">' + esc(t.nom) + " · " + (t.prix ? fcfa(t.prix) : "Gratuit") + '</div><div class="evt-barre"><div style="width:' + (pct == null ? 100 : pct) + '%"></div></div>' +
            '<div class="item-desc">' + t.vendus + (t.quota ? " / " + t.quota : "") + " vendu(s) · " + t.entrees + " entrée(s) · " + fcfa(t.revenu) + "</div></div>";
        }).join("") +
        (window.XTR ? XTR.statsPartage(r) : "") +
        '<p class="field-label" style="margin-top:12px;">Ventes par jour (30 derniers jours)</p>' +
        (r.parJour.length ? r.parJour.map(function (j) {
          return '<div class="item-desc">' + esc(j.jour) + " — " + j.billets + " billet(s) · " + fcfa(j.montant) + '</div><div class="evt-barre" style="margin-bottom:6px;"><div style="width:' + Math.round((j.montant || j.billets) / maxJ * 100) + '%"></div></div>';
        }).join("") : '<p class="item-desc">Aucune vente pour le moment.</p>') +
        '<button class="secondary full-mt" onclick="EVT.fermer()">Fermer</button>';
    }).catch(function (e) { m.close(); echec(e); });
  };
  E.participants = function (id, titre) {
    var m = modal('<div class="loading">Chargement…</div>', true);
    appelServeur("getParticipants", code(), id).then(function (r) {
      S.liste = r.participants; S.questions = r.questions || [];
      m.el.innerHTML = '<div class="item-nom" style="font-size:16px;">👥 ' + esc(titre) + " — " + r.participants.length + ' billet(s)</div>' +
        '<button class="secondary small full-mt" onclick="EVT.csv(\'' + jsq_(titre) + '\')">⬇️ Exporter en CSV</button>' +
        '<button class="secondary small full-mt" onclick="XTR.notifierPorteurs(\'' + jsq_(id) + '\')">🔔 Rappeler les participants (notification)</button>' +
        '<table class="mini-table" style="margin-top:10px;"><tr><th>Nom</th><th>Billet</th><th>Téléphone</th><th>Statut</th></tr>' +
        r.participants.map(function (p) {
          var rep = (p.reponses || []).filter(function (x) { return x.reponse; }).map(function (x) { return "<div class=\"item-desc\"><b>" + esc(x.question) + " :</b> " + esc(x.reponse) + "</div>"; }).join("");
          return "<tr><td>" + esc(p.nom) + "</td><td>" + esc(p.type) + "</td><td>" + esc(p.telephone || "") + (window.XTR && XTR.lienWhatsApp(p.telephone) ? ' <a href="' + esc(XTR.lienWhatsApp(p.telephone, "Bonjour " + p.nom + ", rappel : " + titre)) + '" target="_blank" rel="noopener">💬</a>' : "") + "</td><td>" + esc(p.statut) + "</td></tr>" +
            (rep ? '<tr><td colspan="4" style="background:#f6f9fd;">' + rep + "</td></tr>" : "");
        }).join("") +
        '</table><button class="secondary full-mt" onclick="EVT.fermer()">Fermer</button>';
    }).catch(function (e) { m.close(); echec(e); });
  };
  E.csv = function (titre) {
    var cell = function (v) { return '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"'; };
    var lignes = [["Nom", "Code membre", "Type de billet", "Prix", "Statut", "Téléphone", "E-mail", "Achat", "Entrée"].concat((S.questions || []).map(function (q) { return q.libelle; }))].concat((S.liste || []).map(function (p) {
      return [p.nom, p.code, p.type, p.prix, p.statut, p.telephone, p.email, p.achat, p.entree].concat((S.questions || []).map(function (q) {
        var r = (p.reponses || []).find(function (x) { return x.id === q.id; }); return r ? r.reponse : "";
      }));
    }));
    var blob = new Blob(["\ufeff" + lignes.map(function (l) { return l.map(cell).join(";"); }).join("\n")], { type: "text/csv;charset=utf-8" });
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "participants-" + titre.replace(/[^\w]+/g, "_") + ".csv";
    document.body.appendChild(a); a.click(); a.remove();
  };
  E.controleurs = function (id) {
    var m = modal('<div class="loading">Chargement…</div>');
    var rendre = function (liste) {
      m.el.innerHTML = '<div class="item-nom" style="font-size:16px;">🛂 Contrôleurs d\'entrée</div><p class="item-desc">Ces membres peuvent scanner les billets de cet événement.</p>' +
        (liste.length ? liste.map(function (c) { return '<div class="evt-ligne"><div>' + esc(c.nom) + '<div class="item-desc">' + esc(c.code) + '</div></div><button class="danger-outline small" onclick="EVT.ctrl(\'' + jsq_(id) + "','" + jsq_(c.code) + "',false)\">Retirer</button></div>"; }).join("") : '<p class="item-desc">Aucun contrôleur pour le moment.</p>') +
        '<label class="field-label" style="margin-top:12px;">Ajouter un contrôleur (code, téléphone ou nom complet)</label><input id="ctrlCode" placeholder="Code, téléphone ou nom du membre">' +
        '<button class="flame" onclick="EVT.ctrl(\'' + jsq_(id) + "',document.getElementById('ctrlCode').value,true)\">Ajouter</button>" +
        '<button class="secondary full-mt" onclick="EVT.fermer()">Fermer</button>';
    };
    S.rendreCtrl = rendre;
    appelServeur("getControleurs", code(), id).then(function (r) { rendre(r.controleurs); }).catch(function (e) { m.close(); echec(e); });
  };
  E.ctrl = function (id, codeCtrl, ajouter) {
    if (!String(codeCtrl).trim()) return;
    appelServeur("definirControleur", code(), id, codeCtrl, ajouter).then(function () {
      return appelServeur("getControleurs", code(), id);
    }).then(function (r) { S.rendreCtrl(r.controleurs); }).catch(echec);
  };

  // ----- Concours / votes (organisateur)
  function orgConcours() {
    orgZone().innerHTML = '<div class="loading">Chargement…</div>';
    appelServeur("getMesConcours", code()).then(function (r) {
      S.mesConcours = r.concours || [];
      var h = '<button class="flame" onclick="EVT.nouveauConcours()">＋ Créer un vote (concours, élection, award)</button><div style="margin-top:12px;"></div>';
      var cartesC = S.mesConcours.length ? S.mesConcours.map(function (c) {
        var max = barres(c);
        return '<div class="card evt-item">' + puce(c.type, "") + " " + (c.statut === "Ouvert" ? (c.ouvert ? puce("Ouvert", "ok") : puce("Terminé (date)", "ko")) : c.statut === "Clos" ? puce("Clos", "ko") : puce("Brouillon", "")) +
          (c.prixVote > 0 ? " " + puce(fcfa(c.prixVote) + " / vote", "att") : "") +
          '<div class="evt-titre">' + esc(c.titre) + '</div><div class="item-desc">' + c.totalVotes + " vote(s)" + (c.dateFin ? " · fin " + quand(c.dateFin) : "") + "</div>" +
          c.candidats.map(function (x) {
            return '<div class="evt-cand"><div style="flex:1;"><div class="item-nom">' + esc(x.nom) + '</div><div class="evt-barre"><div style="width:' + Math.round(x.votes / max * 100) + '%"></div></div></div><b>' + x.votes + "</b></div>";
          }).join("") +
          '<div class="evt-actions"><button class="secondary" onclick="EVT.modifierConcours(\'' + jsq_(c.id) + '\')">✏️ Modifier</button>' +
          (c.statut !== "Ouvert" ? '<button onclick="EVT.statutConcours(\'' + jsq_(c.id) + '\',\'Ouvert\')">▶ Ouvrir</button>' : '<button class="danger-outline" onclick="EVT.statutConcours(\'' + jsq_(c.id) + '\',\'Clos\')">⏹ Clore</button>') + "</div></div>";
      }).join("") : "";
      orgZone().innerHTML = h + (S.mesConcours.length ? avecRecherche(cartesC, "Rechercher un vote ou un candidat…") : '<p class="empty-state">Aucun vote créé pour le moment.</p>');
    }).catch(function (e) { afficherErreurZone("evtOrg", e); });
  }
  E.statutConcours = function (id, statut) {
    var go = function () { appelServeur("changerStatutConcours", code(), id, statut).then(orgConcours).catch(echec); };
    if (statut === "Clos") confirmerApp_("Clore ce vote ? Plus personne ne pourra voter.", go); else go();
  };
  E.nouveauConcours = function () {
    S.cform = { id: "", candidats: [{ nom: "", description: "", image: "" }, { nom: "", description: "", image: "" }] };
    formConcours({ titre: "", description: "", type: "Concours", dateFin: "", votesParMembre: 1, prixVote: 0, afficherResultats: "Direct", evenementId: "", exigerCompte: false });
  };
  E.modifierConcours = function (id) {
    var c = S.mesConcours.find(function (x) { return x.id === id; });
    if (!c) return;
    S.cform = { id: c.id, candidats: c.candidats.map(function (x) { return { id: x.id, nom: x.nom, description: x.description, image: x.image, video: x.video || "", votes: x.votes }; }), aDesVotes: c.totalVotes > 0 };
    formConcours(c);
  };
  function formConcours(c) {
    var evts = (S.mesEvts && S.mesEvts.evenements) || [];
    var h = '<div class="item-nom" style="font-size:16px;">' + (S.cform.id ? "Modifier le vote" : "Nouveau vote") + "</div>" +
      '<label class="field-label" style="margin-top:10px;">Titre *</label><input id="cfTitre" maxlength="120" value="' + esc(c.titre) + '">' +
      '<label class="field-label">Pays concerné</label><select id="cfPays">' + PAYS.options(c.pays || "", "🌍 Tous les pays") + "</select>" +
      '<label class="field-label">Type</label><select id="cfType">' + TYPES_CONCOURS.map(function (t) { return "<option " + (t === c.type ? "selected" : "") + ">" + t + "</option>"; }).join("") + "</select>" +
      '<label class="field-label">Description</label><textarea id="cfDesc" rows="3" maxlength="2000">' + esc(c.description) + "</textarea>" +
      '<label class="field-label">Événement lié (facultatif)</label><select id="cfEvt"><option value="">Aucun</option>' + evts.map(function (e) { return '<option value="' + esc(e.id) + '" ' + (e.id === c.evenementId ? "selected" : "") + ">" + esc(e.titre) + "</option>"; }).join("") + "</select>" +
      '<label class="field-label">Fin du vote (facultatif)</label><input id="cfFin" type="datetime-local" value="' + esc(c.dateFin) + '">' +
      '<div class="evt-2col"><div><label class="field-label">Votes par personne</label><input id="cfNb" type="number" min="1" max="100" value="' + (c.votesParMembre || 1) + '"></div>' +
      '<div><label class="field-label">Prix du vote (0 = gratuit)</label><input id="cfPrix" type="number" min="0" value="' + (c.prixVote || 0) + '" ' + (S.cform.aDesVotes ? "disabled" : "") + "></div></div>" +
      '<label style="display:flex;gap:8px;align-items:center;margin:4px 0 12px;font-size:13px;"><input type="checkbox" id="cfCompte" style="width:auto;margin:0;" ' + (c.exigerCompte ? "checked" : "") + '> Exiger un compte pour voter (recommandé pour une élection : un seul vote par personne garanti)</label>' +
      '<label class="field-label">Résultats</label><select id="cfRes"><option value="Direct" ' + (c.afficherResultats !== "Apres" ? "selected" : "") + '>Visibles en direct</option><option value="Apres" ' + (c.afficherResultats === "Apres" ? "selected" : "") + ">Visibles après la clôture</option></select>" +
      '<p class="field-label" style="margin-top:12px;">Candidats (2 minimum)</p><div id="cfCands"></div>' +
      '<button class="secondary small" onclick="EVT.ajouterCandidat()">＋ Ajouter un candidat</button>' +
      '<div id="cfErreur" class="error" style="display:none;margin-top:10px;"></div>' +
      '<div class="evt-actions"><button class="secondary" onclick="EVT.fermer()">Annuler</button><button class="flame" onclick="EVT.enregistrerConcours()">Enregistrer</button></div>';
    modal(h, true);
    lignesCandidats();
  }
  function lignesCandidats() {
    document.getElementById("cfCands").innerHTML = S.cform.candidats.map(function (x, i) {
      if (x.supprimer) return "";
      return '<div class="evt-ligne-form"><div style="display:flex;gap:8px;align-items:center;">' +
        (x.image ? '<img src="' + x.image + '" style="width:44px;height:44px;border-radius:10px;object-fit:cover;">' : '<div class="evt-av" style="width:44px;height:44px;border-radius:10px;background:#eef3f9;display:flex;align-items:center;justify-content:center;">👤</div>') +
        '<label class="file-btn-label" style="margin:0;">Photo<input type="file" accept="image/*" style="display:none;" onchange="EVT.imageCand(event,' + i + ')"></label></div>' +
        '<input placeholder="Nom du candidat *" maxlength="80" value="' + esc(x.nom) + '" oninput="EVT.cm(' + i + ",'nom',this.value)\" style=\"margin-top:6px;\">" +
        '<input placeholder="Description (facultative)" maxlength="300" value="' + esc(x.description) + '" oninput="EVT.cm(' + i + ",'description',this.value)\">" +
        '<input type="url" placeholder="🎬 Lien vidéo YouTube / Facebook (facultatif, 5 min max conseillé)" maxlength="300" value="' + esc(x.video || "") + '" oninput="EVT.cm(' + i + ",'video',this.value)\">" +
        '<button class="danger-outline small" onclick="EVT.rc(' + i + ')">Retirer</button>' + (x.votes ? ' <span class="item-desc">' + x.votes + " vote(s)</span>" : "") + "</div>";
    }).join("");
  }
  E.cm = function (i, champ, v) { S.cform.candidats[i][champ] = v; };
  E.rc = function (i) { var x = S.cform.candidats[i]; if (x.id) x.supprimer = true; else S.cform.candidats.splice(i, 1); lignesCandidats(); };
  E.ajouterCandidat = function () { S.cform.candidats.push({ nom: "", description: "", image: "", video: "" }); lignesCandidats(); };
  E.imageCand = function (ev, i) {
    var f = ev.target.files[0]; if (!f) return;
    reduireImage(f, 320, 320, 0.7).then(function (d) { S.cform.candidats[i].image = d; lignesCandidats(); }).catch(echec);
  };
  E.enregistrerConcours = function () {
    var err = document.getElementById("cfErreur"); err.style.display = "none";
    var d = {
      id: S.cform.id || undefined, titre: document.getElementById("cfTitre").value, pays: document.getElementById("cfPays").value, type: document.getElementById("cfType").value,
      description: document.getElementById("cfDesc").value, evenementId: document.getElementById("cfEvt").value, dateFin: document.getElementById("cfFin").value,
      votesParMembre: document.getElementById("cfNb").value, prixVote: document.getElementById("cfPrix").value, afficherResultats: document.getElementById("cfRes").value, exigerCompte: document.getElementById("cfCompte").checked,
      candidats: S.cform.candidats
    };
    appelServeur("enregistrerConcours", code(), d).then(function () { E.fermer(); orgConcours(); })
      .catch(function (e) { err.textContent = e.message; err.style.display = "block"; });
  };

  // ----- Revenus (organisateur)
  function htmlRevenus(r, titre) {
    return (titre ? '<div class="item-nom">' + esc(titre) + "</div>" : "") +
      '<div class="evt-kpi"><div><b>' + fcfa(r.brut) + "</b><span>ventes brutes</span></div><div><b>" + fcfa(r.commission) + "</b><span>commission plateforme</span></div>" +
      "<div><b>" + fcfa(r.net) + "</b><span>net</span></div><div><b>" + fcfa(r.solde) + "</b><span>solde à recevoir</span></div></div>" +
      '<p class="field-label">Reversements reçus (' + fcfa(r.verse) + ")</p>" +
      (r.reversements.length ? r.reversements.map(function (x) { return '<div class="evt-ligne"><div>' + fcfa(x.montant) + '<div class="item-desc">' + quand(x.date) + (x.note ? " · " + esc(x.note) : "") + "</div></div></div>"; }).join("") : '<p class="item-desc">Aucun reversement pour le moment.</p>');
  }
  function orgRevenus() {
    orgZone().innerHTML = '<div class="loading">Chargement…</div>';
    appelServeur("getRevenus", code()).then(function (r) {
      orgZone().innerHTML = '<div class="card">' + htmlRevenus(r) + '<p class="item-desc">Le solde vous est reversé par l\'administration (Mobile Money ou virement).</p></div>';
    }).catch(function (e) { afficherErreurZone("evtOrg", e); });
  }

  // ----- Contrôle d'entrée (scan des QR codes)
  function orgScan() {
    var r = S.mesEvts, liste = (r.evenements || []).filter(function (e) { return e.statut === "Publié"; }).concat(r.controles || []);
    orgZone().innerHTML = liste.length ? '<p class="item-desc">Choisissez l\'événement dont vous contrôlez l\'entrée :</p>' + liste.map(function (e) {
      return '<div class="evt-carte" style="margin-bottom:10px;"><div class="item-nom">' + esc(e.titre) + '</div><div class="evt-meta">' + quand(e.dateDebut) + '</div><button class="flame full-mt" onclick="EVT.scanner(\'' + jsq_(e.id) + "','" + jsq_(e.titre) + '\')">📷 Scanner les billets</button></div>';
    }).join("") : '<p class="empty-state">Aucun événement publié à contrôler.</p>';
  }
  E.scanner = function (id, titre) {
    S.scan = { id: id, occupe: false, dernier: "", t: 0, timer: null, flux: null };
    var m = modal('<div class="item-nom">📷 Contrôle — ' + esc(titre) + '</div>' +
      '<video id="evtVideo" playsinline muted style="width:100%;border-radius:12px;background:#000;margin-top:10px;max-height:300px;"></video>' +
      '<div id="evtScanRes"></div><label class="field-label" style="margin-top:10px;">Ou saisir le code du billet</label><input id="evtManuel" placeholder="BIL-…">' +
      '<button class="secondary" onclick="EVT.manuel()">Valider ce code</button><button class="flame full-mt" onclick="EVT.fermer()">Terminer</button>', true, arreterScan);
    var video = document.getElementById("evtVideo");
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { document.getElementById("evtScanRes").innerHTML = '<p class="item-desc">Caméra indisponible : utilisez la saisie manuelle.</p>'; return; }
    navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } }).then(function (flux) {
      if (!S.scan) { flux.getTracks().forEach(function (t) { t.stop(); }); return; }
      S.scan.flux = flux; video.srcObject = flux; video.play();
      var detecteur = window.BarcodeDetector ? new BarcodeDetector({ formats: ["qr_code"] }) : null;
      if (!detecteur && !window.jsQR) { var s = document.createElement("script"); s.src = "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.js"; document.head.appendChild(s); }
      var canvas = document.createElement("canvas");
      var boucle = function () {
        if (!S.scan) return;
        if (video.readyState >= 2 && !S.scan.occupe) {
          if (detecteur) detecteur.detect(video).then(function (res) { if (res.length) traiterScan(res[0].rawValue); }).catch(function () {});
          else if (window.jsQR) {
            canvas.width = video.videoWidth; canvas.height = video.videoHeight;
            var ctx = canvas.getContext("2d"); ctx.drawImage(video, 0, 0);
            var img = ctx.getImageData(0, 0, canvas.width, canvas.height), res = jsQR(img.data, img.width, img.height);
            if (res && res.data) traiterScan(res.data);
          }
        }
        if (S.scan) S.scan.timer = setTimeout(boucle, 300);
      };
      boucle();
    }).catch(function () { document.getElementById("evtScanRes").innerHTML = '<p class="item-desc">Accès à la caméra refusé : utilisez la saisie manuelle.</p>'; });
  };
  function arreterScan() {
    if (!S.scan) return;
    clearTimeout(S.scan.timer);
    if (S.scan.flux) S.scan.flux.getTracks().forEach(function (t) { t.stop(); });
    S.scan = null;
  }
  function traiterScan(texte) {
    var s = S.scan; if (!s || s.occupe) return;
    if (texte === s.dernier && Date.now() - s.t < 4000) return;
    s.occupe = true; s.dernier = texte; s.t = Date.now();
    appelServeur("scannerBillet", code(), s.id, texte).then(function (r) {
      var cls = r.resultat === "VALIDE" ? "ok" : (r.resultat === "DEJA_UTILISE" ? "dej" : "ko");
      var z = document.getElementById("evtScanRes");
      if (z) z.innerHTML = '<div class="scan-res ' + cls + '">' + (r.resultat === "VALIDE" ? "✅ " : "⚠️ ") + esc(r.message) + (r.porteur ? "<br>" + esc(r.porteur) + " · " + esc(r.type) : "") + "</div>";
      try { if (navigator.vibrate) navigator.vibrate(r.resultat === "VALIDE" ? 80 : [120, 60, 120]); } catch (e) {}
    }).catch(function (e) {
      var z = document.getElementById("evtScanRes"); if (z) z.innerHTML = '<div class="scan-res ko">' + esc(e.message) + "</div>";
    }).then(function () { if (S.scan) S.scan.occupe = false; });
  }
  E.manuel = function () {
    var v = (document.getElementById("evtManuel").value || "").trim().toUpperCase();
    if (!v) return;
    traiterScan(v.indexOf("JB1.") === 0 ? v : "JB1." + v);
  };

  // ------------------------------------------------------------------ ADMINISTRATION
  function peutAdminEvt() {
    var p = membreCourant ? permissionsDe_(membreCourant) : [];
    return p.indexOf("evenements") !== -1 || p.indexOf("systeme") !== -1;
  }
  function injecterAdmin() {
    var section = document.getElementById("section-admin");
    if (!section || document.getElementById("admin-evenements")) return;
    var d = document.createElement("div");
    d.className = "admin-section"; d.id = "admin-evenements";
    d.innerHTML = '<div id="evtAdminCommission"></div><div class="card"><p class="field-label">Événements à valider</p><div id="evtAdminModeration"><div class="loading">Chargement…</div></div></div>' +
      '<div class="card"><p class="field-label">Ajouter un organisateur</p><input id="evtOrgCode" placeholder="Code, téléphone ou nom complet du membre"><button onclick="EVT.addOrga()">Donner le statut d\'organisateur</button></div>' +
      '<div class="card"><p class="field-label">Organisateurs, revenus et reversements</p><div id="evtAdminOrgas"><div class="loading">Chargement…</div></div></div>';
    section.appendChild(d);
  }
  var construireOrigine = window.construireAdminSubtabs;
  window.construireAdminSubtabs = function () {
    var visibles = construireOrigine.apply(this, arguments);
    if (!peutAdminEvt()) return visibles;
    injecterAdmin();
    var barre = document.getElementById("adminSubtabs");
    var seul = !visibles.length;
    var t = document.createElement("div");
    t.className = "admin-subtab" + (seul ? " active" : ""); t.dataset.sub = "evenements"; t.textContent = "🎫 Événements";
    t.onclick = function () { afficherSousOnglet("evenements"); };
    barre.appendChild(t);
    if (seul) { document.getElementById("admin-evenements").classList.add("active"); return [{ id: "evenements" }]; }
    return visibles;
  };
  var sousOngletOrigine = window.afficherSousOnglet;
  window.afficherSousOnglet = function (nom) {
    sousOngletOrigine.apply(this, arguments);
    if (nom === "evenements") adminCharger();
  };
  function adminCharger() {
    injecterAdmin();
    // Commission : seul le droit « système » peut la modifier (mettreAJourConfig)
    var sys = permissionsDe_(membreCourant).indexOf("systeme") !== -1;
    appelServeur("getOrganisateurs", code()).then(function (r) {
      document.getElementById("evtAdminCommission").innerHTML = sys ?
        '<div class="card"><p class="field-label">Commission de la plateforme (%)</p><div class="cotisation-pay-row"><input id="evtCommission" type="number" min="0" max="100" value="' + r.commission + '"><button class="small" onclick="EVT.commission()">Enregistrer</button></div><p class="item-desc">Prélevée sur chaque vente de billets et de votes payants, pour les nouvelles commandes uniquement.</p></div>' :
        '<div class="card"><p class="item-desc">Commission actuelle : ' + r.commission + " %</p></div>";
      document.getElementById("evtAdminOrgas").innerHTML = r.organisateurs.length ? avecRecherche(r.organisateurs.map(function (o) {
        return '<div class="item-block evt-item"><div class="item-nom">' + esc(o.nom) + '</div><div class="item-desc">' + esc(o.code) + " · " + esc(o.telephone) + " · " + o.evenements + " événement(s)</div>" +
          '<div class="evt-kpi"><div><b>' + fcfa(o.brut) + "</b><span>ventes</span></div><div><b>" + fcfa(o.net) + "</b><span>net</span></div><div><b>" + fcfa(o.verse) + "</b><span>déjà versé</span></div><div><b>" + fcfa(o.solde) + "</b><span>à verser</span></div></div>" +
          '<div class="evt-actions"><button onclick="EVT.versement(\'' + jsq_(o.code) + "','" + jsq_(o.nom) + "'," + o.solde + ')">💸 Enregistrer un versement</button>' +
          '<button class="secondary" onclick="EVT.revenusOrga(\'' + jsq_(o.code) + "','" + jsq_(o.nom) + '\')">Historique</button>' +
          '<button class="danger-outline" onclick="EVT.retirerOrga(\'' + jsq_(o.code) + "','" + jsq_(o.nom) + '\')">Retirer le statut</button></div></div>';
      }).join(""), "Rechercher un organisateur (nom, code, téléphone)…") : '<p class="empty-state">Aucun organisateur.</p>';
    }).catch(function (e) { afficherErreurZone("evtAdminOrgas", e); });
    appelServeur("getEvenementsAModerer", code()).then(function (r) {
      document.getElementById("evtAdminModeration").innerHTML = r.evenements.length ? avecRecherche(r.evenements.map(function (e) {
        return '<div class="item-block evt-item"><div class="item-nom">' + esc(e.titre) + " " + puce(e.categorie, "") + '</div><div class="item-desc">Par ' + esc(e.organisateur) + " · " + quand(e.dateDebut) + " · " + esc(e.lieu) + "</div>" +
          '<p class="item-desc" style="white-space:pre-wrap;">' + esc(e.description.slice(0, 400)) + "</p>" +
          '<div class="item-desc">' + e.billets.map(function (b) { return esc(b.nom) + " (" + (b.prix ? fcfa(b.prix) : "gratuit") + ")"; }).join(" · ") + "</div>" +
          '<div class="evt-actions"><button onclick="EVT.moderer(\'' + jsq_(e.id) + '\',\'Publié\')">✅ Publier</button><button class="danger-outline" onclick="EVT.refuser(\'' + jsq_(e.id) + '\')">✖ Refuser</button></div></div>';
      }).join(""), "Rechercher un événement à valider…") : '<p class="empty-state">Aucun événement en attente.</p>';
    }).catch(function (e) { afficherErreurZone("evtAdminModeration", e); });
  }
  E.commission = function () {
    var v = Number(document.getElementById("evtCommission").value);
    if (!(v >= 0 && v <= 100)) { alert("Indiquez un pourcentage entre 0 et 100."); return; }
    appelServeur("mettreAJourConfig", code(), "CommissionEvenements", v).then(function () { alert("Commission enregistrée : " + v + " %."); }).catch(echec);
  };
  E.moderer = function (id, decision) { appelServeur("moderEvenement", code(), id, decision, "").then(adminCharger).catch(echec); };
  E.refuser = function (id) {
    demanderTexteApp_("Motif du refus (visible par l'organisateur) :", function (motif) {
      appelServeur("moderEvenement", code(), id, "Refusé", motif).then(adminCharger).catch(echec);
    });
  };
  E.addOrga = function () {
    var c = document.getElementById("evtOrgCode").value.trim();
    if (!c) return;
    appelServeur("definirOrganisateur", code(), c, true).then(function (r) { document.getElementById("evtOrgCode").value = ""; alert("✅ " + r.nom + " est maintenant organisateur."); adminCharger(); }).catch(echec);
  };
  E.retirerOrga = function (c, nom) {
    confirmerApp_("Retirer le statut d'organisateur à " + nom + " ? Ses événements restent en place.", function () {
      appelServeur("definirOrganisateur", code(), c, false).then(adminCharger).catch(echec);
    });
  };
  E.revenusOrga = function (c, nom) {
    var m = modal('<div class="loading">Chargement…</div>', true);
    appelServeur("getRevenus", code(), c).then(function (r) {
      m.el.innerHTML = htmlRevenus(r, "💰 " + nom) + '<button class="secondary full-mt" onclick="EVT.fermer()">Fermer</button>';
    }).catch(function (e) { m.close(); echec(e); });
  };
  E.versement = function (c, nom, solde) {
    var m = modal('<div class="item-nom">💸 Versement à ' + esc(nom) + '</div><p class="item-desc">Solde à verser : ' + fcfa(solde) + '. Enregistrez ici le versement après l\'avoir effectué (Mobile Money, virement…).</p>' +
      '<label class="field-label">Montant (FCFA)</label><input id="vsMontant" type="number" min="1" max="' + solde + '" value="' + solde + '">' +
      '<label class="field-label">Note (référence, moyen de paiement)</label><input id="vsNote" maxlength="200">' +
      '<div class="evt-actions"><button class="secondary" onclick="EVT.fermer()">Annuler</button><button class="flame" onclick="EVT.validerVersement(\'' + jsq_(c) + '\')">Enregistrer</button></div>');
  };
  E.validerVersement = function (c) {
    appelServeur("enregistrerReversement", code(), c, Number(document.getElementById("vsMontant").value), document.getElementById("vsNote").value)
      .then(function () { E.fermer(); adminCharger(); }).catch(echec);
  };

  // ================================================================== PANIER (documents, audios, vidéos, billets)
  var CLE_PANIER = "jesus_panier_v1";
  var P = (window.PANIER = {});
  function lirePanier() {
    try { var j = JSON.parse(localStorage.getItem(CLE_PANIER) || "[]"); return Array.isArray(j) ? j : []; }
    catch (e) { return S.panierMem || []; }
  }
  function ecrirePanier(l) {
    S.panierMem = l;
    try { localStorage.setItem(CLE_PANIER, JSON.stringify(l)); } catch (e) { /* stockage indisponible : on garde en mémoire */ }
    majPanierBouton();
  }
  function nbArticles(l) { return l.reduce(function (s, a) { return s + (a.k === "billet" ? a.qte : 1); }, 0); }
  function totalPanierGlobal(l) { return l.reduce(function (s, a) { return s + a.prix * (a.k === "billet" ? a.qte : 1); }, 0); }
  var cssP = document.createElement("style");
  cssP.textContent = "#panierFlottant{position:fixed;right:14px;bottom:86px;z-index:900;width:54px;height:54px;border-radius:50%;border:0;background:var(--blue2,#1a4a8a);color:#fff;font-size:24px;box-shadow:0 4px 14px rgba(0,0,0,.28);cursor:pointer;display:none;padding:0}" +
    "#panierFlottant b{position:absolute;top:-4px;right:-4px;min-width:20px;height:20px;border-radius:10px;background:#e0431f;color:#fff;font-size:12px;line-height:20px;padding:0 5px;box-sizing:border-box}" +
    "#panierToast{position:fixed;left:50%;bottom:150px;transform:translateX(-50%);z-index:9800;background:#222;color:#fff;padding:10px 16px;border-radius:20px;font-size:13px;max-width:90%;text-align:center;display:none}";
  document.head.appendChild(cssP);
  var btnP = document.createElement("button");
  btnP.id = "panierFlottant"; btnP.title = "Mon panier"; btnP.setAttribute("onclick", "PANIER.ouvrir()");
  document.body.appendChild(btnP);
  var toastP = document.createElement("div"); toastP.id = "panierToast"; document.body.appendChild(toastP);
  function toast(msg) {
    toastP.textContent = msg; toastP.style.display = "block";
    clearTimeout(toast.t); toast.t = setTimeout(function () { toastP.style.display = "none"; }, 2200);
  }
  function majPanierBouton() {
    var l = lirePanier(), n = nbArticles(l);
    var surAuth = !!document.querySelector(".auth-screen.active");
    btnP.style.display = surAuth ? "none" : "block";   // visible aussi pour les visiteurs
    btnP.innerHTML = "🛒" + (n ? "<b>" + n + "</b>" : "");
  }
  setInterval(majPanierBouton, 1500);
  majPanierBouton();

  // k : "document" | "audio" | "video" | "billet"
  P.ajouter = function (k, id, titre, prix, qte, extra) {
    prix = Number(prix) || 0;
    if (!(prix > 0)) { alert("Seuls les articles payants se mettent dans le panier."); return; }
    var l = lirePanier(), ex = l.find(function (a) { return a.k === k && a.id === id; });
    if (ex) {
      if (k === "billet") { ex.qte = Math.min(10, ex.qte + (qte || 1)); toast("Quantité mise à jour dans le panier"); }
      else { toast("Déjà dans votre panier"); return; }
    } else { l.push({ k: k, id: id, titre: titre, prix: prix, qte: k === "billet" ? Math.min(10, qte || 1) : 1, sous: (extra && extra.sous) || "" }); toast("🛒 Ajouté au panier"); }
    ecrirePanier(l);
  };
  P.retirer = function (k, id) { ecrirePanier(lirePanier().filter(function (a) { return !(a.k === k && a.id === id); })); P.ouvrir(true); };
  P.qte = function (id, delta) {
    var l = lirePanier(), a = l.find(function (x) { return x.k === "billet" && x.id === id; });
    if (!a) return;
    a.qte = Math.max(1, Math.min(10, a.qte + delta)); ecrirePanier(l); P.ouvrir(true);
  };
  P.vider = function () { confirmerApp_("Vider tout le panier ?", function () { ecrirePanier([]); E.fermer(); }); };
  var ICONES_P = { document: "📄", audio: "🎧", video: "🎬", billet: "🎫" };
  P.ouvrir = function (remplacer) {
    if (remplacer === true) E.fermer();
    var l = lirePanier(), tot = totalPanierGlobal(l);
    var h = '<div class="item-nom" style="font-size:17px;margin-bottom:8px;">🛒 Mon panier</div>';
    if (!l.length) h += '<p class="empty-state">Votre panier est vide.<br><span class="item-desc">Ajoutez des documents, audios, vidéos ou billets payants avec « 🛒 Ajouter au panier ».</span></p>';
    else {
      h += l.map(function (a) {
        return '<div class="evt-ligne"><div><div class="item-nom">' + ICONES_P[a.k] + " " + esc(a.titre) + "</div>" +
          '<div class="item-desc">' + (a.k === "billet" ? a.qte + " × " + fcfa(a.prix) + " = " + fcfa(a.qte * a.prix) : fcfa(a.prix)) + "</div></div>" +
          '<div style="display:flex;gap:6px;align-items:center;">' +
          (a.k === "billet" ? '<button class="secondary small" onclick="PANIER.qte(\'' + jsq_(a.id) + '\',-1)">−</button><span>' + a.qte + '</span><button class="secondary small" onclick="PANIER.qte(\'' + jsq_(a.id) + '\',1)">+</button>' : "") +
          '<button class="danger-outline small" onclick="PANIER.retirer(\'' + a.k + "','" + jsq_(a.id) + '\')">✕</button></div></div>';
      }).join("") +
        '<div style="margin-top:12px;font-weight:800;font-size:16px;color:var(--blue2);">Total : ' + fcfa(tot) + "</div>" +
        '<input id="pnPromo" type="text" maxlength="20" placeholder="🏷️ Code promo (facultatif)" style="margin-top:10px;text-transform:uppercase;">' +
        '<button class="flame full-mt" onclick="PANIER.payer()">💳 Payer ' + fcfa(tot) + "</button>" +
        '<button class="secondary small full-mt" onclick="PANIER.vider()">Vider le panier</button>' +
        '<p class="item-desc" style="margin-top:8px;">Un seul paiement (Mobile Money ou carte bancaire) pour tout le panier. Les prix sont revérifiés par le serveur.</p>';
    }
    modal(h + '<button class="secondary full-mt" onclick="EVT.fermer()">Fermer</button>', true);
  };
  P.payer = function () {
    if (!besoinMembre()) return;
    var l = lirePanier();
    if (!l.length) return;
    var envoye = l.map(function (a) { return { k: a.k, id: a.id, qte: a.qte }; });
    var promo = (document.getElementById("pnPromo") || {}).value || "";
    appelServeur("creerCommandePanier", code(), envoye, promo.trim()).then(function (r) {
      if (r.dejaAchetes && r.dejaAchetes.length) {
        ecrirePanier(lirePanier().filter(function (a) { return r.dejaAchetes.indexOf(a.k + ":" + a.id) === -1; }));
      }
      if (!r.succes) { alert(r.message || "Commande impossible."); P.ouvrir(true); return; }
      S.panierEnvoye = envoye;
      E.fermer();
      if (r.reduction > 0) alert("🏷️ Code promo appliqué : −" + fcfa(r.reduction) + ". Total à payer : " + fcfa(r.montant));
      if (r.dejaAchetes && r.dejaAchetes.length) alert("Certains articles étaient déjà à vous : ils ont été retirés du panier. Nouveau total : " + fcfa(r.montant));
      payer({ type: "panier", commandeId: r.commandeId }, r.montant);
    }).catch(echec);
  };
  function apresPaiementPanier(r) {
    var env = S.panierEnvoye || [];
    S.panierEnvoye = null;
    ecrirePanier(lirePanier().filter(function (a) { return !env.some(function (x) { return x.k === a.k && x.id === a.id; }); }));
    var h = '<div class="item-nom" style="font-size:17px;margin-bottom:8px;">✅ Paiement confirmé</div>';
    if ((r.achats || []).length) {
      h += '<p class="field-label">Débloqués pour vous</p>' + r.achats.map(function (a) { return '<div class="item-desc">' + ICONES_P[a.k] + " " + esc(a.nom) + "</div>"; }).join("") +
        '<p class="item-desc" style="margin-top:6px;">Retrouvez-les dans les rubriques Documents, Audios et Vidéos : ils s\'ouvrent maintenant sans repayer.</p>';
    }
    if ((r.billets || []).length) h += '<p class="field-label" style="margin-top:12px;">Vos billets</p>' + r.billets.map(htmlBillet).join("");
    (r.echecs || []).forEach(function (m) { h += '<div class="error" style="display:block;margin-top:8px;">' + esc(m) + "</div>"; });
    modal(h + '<button class="flame full-mt" onclick="EVT.fermer()">Fermer</button>', true);
  }
})();

  </script>
<!-- ===== Rubrique Communauté ===== -->
<script>
/* ==========================================================================
   JESUS — rubrique « Communauté »
   Verset du jour, plans de lecture, séries et badges, mur de prière
   (+ les lots suivants s'enregistrent avec XTR.enregistrer)
   ========================================================================== */
(function () {
  "use strict";
  var X = (window.XTR = {});
  var S = { vue: "aujourdhui", verset: null, espace: null, plan: null, mur: "Demande", pries: {} };
  var VUES = [];
  X.enregistrer = function (v) { VUES.push(v); };

  function esc(t) { return escapeHtml(t == null ? "" : String(t)); }
  function zone() { return document.getElementById("xtrContenu"); }
  function p2(n) { return String(n).padStart(2, "0"); }
  function jourLocal() { var d = new Date(); return d.getFullYear() + "-" + p2(d.getMonth() + 1) + "-" + p2(d.getDate()); }
  function code() { return membreCourant ? membreCourant.code : null; }
  function echec(e) { alert("Erreur : " + ((e && e.message) || e)); }
  function estAdminContenus() { var p = membreCourant ? permissionsDe_(membreCourant) : []; return p.indexOf("contenus") !== -1 || p.indexOf("systeme") !== -1; }
  function estModerateur() { var p = membreCourant ? permissionsDe_(membreCourant) : []; return p.indexOf("systeme") !== -1 || p.indexOf("demandesPriere") !== -1; }
  function besoinMembre() {
    if (membreCourant) return true;
    confirmerApp_("Connectez-vous (ou créez un compte) pour continuer.", quitterVisiteurEtSeConnecter);
    return false;
  }
  function lsGet(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* pas grave */ } }
  function ilya(iso) {
    var t = Date.parse(iso); if (isNaN(t)) return "";
    var m = Math.max(0, Math.round((Date.now() - t) / 60000));
    if (m < 1) return "à l'instant"; if (m < 60) return "il y a " + m + " min";
    var h = Math.round(m / 60); if (h < 24) return "il y a " + h + " h";
    var j = Math.round(h / 24); return "il y a " + j + " j";
  }

  var css = document.createElement("style");
  css.textContent =
    ".xtr-verset{background:linear-gradient(135deg,#0b2f68,#0757a8 60%,#d71920);color:#fff;border-radius:20px;padding:22px 18px;text-align:center;box-shadow:var(--shadow)}" +
    ".xtr-verset .t{font-family:Georgia,serif;font-size:19px;line-height:1.55;margin:6px 0 12px}.xtr-verset .r{font-weight:800;font-size:14px;opacity:.95}" +
    ".xtr-verset .e{font-size:11px;letter-spacing:.12em;text-transform:uppercase;opacity:.8}" +
    ".xtr-actions{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-top:14px}.xtr-actions button{width:auto;flex:1 1 140px}" +
    ".xtr-serie{display:flex;align-items:center;gap:14px}.xtr-serie .n{font-size:38px;font-weight:900;color:var(--red)}" +
    ".xtr-badges{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}.xtr-badge{background:#f4f7fb;border:1px solid var(--line);border-radius:999px;padding:5px 10px;font-size:12px;font-weight:700}" +
    ".xtr-barre{height:8px;background:#e4e9f2;border-radius:99px;overflow:hidden;margin:8px 0}.xtr-barre i{display:block;height:100%;background:linear-gradient(90deg,var(--blue),var(--green))}" +
    ".xtr-jour{display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--line)}.xtr-jour:last-child{border-bottom:0}" +
    ".xtr-jour .c{width:30px;height:30px;border-radius:50%;background:#eef3f9;display:flex;align-items:center;justify-content:center;font-weight:800;flex-shrink:0}.xtr-jour.ok .c{background:var(--green);color:#fff}" +
    ".xtr-post{padding:14px 0;border-bottom:1px solid var(--line)}.xtr-post:last-child{border-bottom:0}.xtr-post .tx{white-space:pre-wrap;line-height:1.55;margin:6px 0}" +
    ".xtr-post .ligne{display:flex;gap:8px;flex-wrap:wrap;align-items:center}.xtr-post button{width:auto}";
  document.head.appendChild(css);

  // ------------------------------------------------------------------ navigation
  function nav() {
    var o = VUES.filter(function (v) { return !v.cachee && (!v.visible || v.visible()); });
    var cur = VUES.filter(function (v) { return v.id === S.vue; })[0];
    if (!cur || (!cur.cachee && cur.visible && !cur.visible())) S.vue = o[0].id;
    document.getElementById("xtrNav").innerHTML = o.map(function (v) {
      return '<button class="small ' + (S.vue === v.id ? "" : "secondary") + '" style="width:auto;flex:none;white-space:nowrap;" onclick="XTR.vue(\'' + v.id + '\')">' + v.label + "</button>";
    }).join("");
  }
  window.chargerCommunaute = function () {
    nav();
    var v = VUES.filter(function (x) { return x.id === S.vue; })[0];
    if (v) v.rendre(zone());
  };
  X.vue = function (id) { S.vue = id; window.chargerCommunaute(); };
  X.S = S; X.esc = esc; X.zone = zone; X.echec = echec; X.besoinMembre = besoinMembre; X.ilya = ilya; X.lsGet = lsGet; X.lsSet = lsSet; X.code = code;
  X.estAdminContenus = estAdminContenus; X.estModerateur = estModerateur;

  // ------------------------------------------------------------------ VERSET DU JOUR
  // Versets intégrés (Louis Segond 1910) ; l'équipe peut programmer un verset précis pour une date donnée.
  var VERSETS = [
    ["Jean 3:16", "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle."],
    ["Psaumes 23:1", "L'Éternel est mon berger: je ne manquerai de rien."],
    ["Philippiens 4:13", "Je puis tout par celui qui me fortifie."],
    ["Jérémie 29:11", "Car je connais les projets que j'ai formés sur vous, dit l'Éternel, projets de paix et non de malheur, afin de vous donner un avenir et de l'espérance."],
    ["Proverbes 3:5-6", "Confie-toi en l'Éternel de tout ton cœur, et ne t'appuie pas sur ta sagesse; reconnais-le dans toutes tes voies, et il aplanira tes sentiers."],
    ["Ésaïe 41:10", "Ne crains rien, car je suis avec toi; ne promène pas des regards inquiets, car je suis ton Dieu; je te fortifie, je viens à ton secours, je te soutiens de ma droite triomphante."],
    ["Romains 8:28", "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu, de ceux qui sont appelés selon son dessein."],
    ["Matthieu 11:28", "Venez à moi, vous tous qui êtes fatigués et chargés, et je vous donnerai du repos."],
    ["Josué 1:9", "Ne t'ai-je pas donné cet ordre: Fortifie-toi et prends courage? Ne t'effraie point et ne t'épouvante point, car l'Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras."],
    ["Psaumes 46:2", "Dieu est pour nous un refuge et un appui, un secours qui ne manque jamais dans la détresse."],
    ["Philippiens 4:6-7", "Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par des prières et des supplications, avec des actions de grâces. Et la paix de Dieu, qui surpasse toute intelligence, gardera vos cœurs et vos pensées en Jésus-Christ."],
    ["Matthieu 6:33", "Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par-dessus."],
    ["Psaumes 121:1-2", "Je lève mes yeux vers les montagnes: d'où me viendra le secours? Le secours me vient de l'Éternel, qui a fait les cieux et la terre."],
    ["Romains 12:2", "Ne vous conformez pas au siècle présent, mais soyez transformés par le renouvellement de l'intelligence, afin que vous discerniez quelle est la volonté de Dieu, ce qui est bon, agréable et parfait."],
    ["1 Corinthiens 13:13", "Maintenant donc ces trois choses demeurent: la foi, l'espérance, la charité; mais la plus grande de ces choses, c'est la charité."],
    ["Hébreux 11:1", "Or la foi est une ferme assurance des choses qu'on espère, une démonstration de celles qu'on ne voit pas."],
    ["Jean 14:6", "Jésus lui dit: Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi."],
    ["Psaumes 91:1-2", "Celui qui demeure sous l'abri du Très-Haut repose à l'ombre du Tout-Puissant. Je dis à l'Éternel: Mon refuge et ma forteresse, mon Dieu en qui je me confie!"],
    ["Lamentations 3:22-23", "Les bontés de l'Éternel ne sont pas épuisées, ses compassions ne sont pas à leur terme; elles se renouvellent chaque matin. Oh! que ta fidélité est grande!"],
    ["2 Timothée 1:7", "Car ce n'est pas un esprit de timidité que Dieu nous a donné, mais un esprit de force, d'amour et de sagesse."],
    ["Matthieu 28:20", "Et voici, je suis avec vous tous les jours, jusqu'à la fin du monde."],
    ["Psaumes 37:4-5", "Fais de l'Éternel tes délices, et il te donnera ce que ton cœur désire. Remets ton sort à l'Éternel, mets en lui ta confiance, et il agira."],
    ["Ésaïe 40:31", "Mais ceux qui se confient en l'Éternel renouvellent leur force. Ils prennent le vol comme les aigles; ils courent, et ne se lassent point, ils marchent, et ne se fatiguent point."],
    ["Jean 8:12", "Jésus leur parla de nouveau, et dit: Je suis la lumière du monde; celui qui me suit ne marchera pas dans les ténèbres, mais il aura la lumière de la vie."],
    ["Romains 5:8", "Mais Dieu prouve son amour envers nous, en ce que, lorsque nous étions encore des pécheurs, Christ est mort pour nous."],
    ["Psaumes 119:105", "Ta parole est une lampe à mes pieds, et une lumière sur mon sentier."],
    ["Éphésiens 2:8", "Car c'est par la grâce que vous êtes sauvés, par le moyen de la foi. Et cela ne vient pas de vous, c'est le don de Dieu."],
    ["Matthieu 7:7", "Demandez, et l'on vous donnera; cherchez, et vous trouverez; frappez, et l'on vous ouvrira."],
    ["1 Jean 1:9", "Si nous confessons nos péchés, il est fidèle et juste pour nous les pardonner, et pour nous purifier de toute iniquité."],
    ["Psaumes 27:1", "L'Éternel est ma lumière et mon salut: de qui aurais-je crainte? L'Éternel est le soutien de ma vie: de qui aurais-je peur?"],
    ["Jacques 1:5", "Si quelqu'un d'entre vous manque de sagesse, qu'il la demande à Dieu, qui donne à tous simplement et sans reproche, et elle lui sera donnée."],
    ["1 Pierre 5:7", "Et déchargez-vous sur lui de tous vos soucis, car lui-même prend soin de vous."],
    ["Deutéronome 31:6", "Fortifiez-vous et ayez du courage! Ne craignez point et ne soyez point effrayés devant eux; car l'Éternel, ton Dieu, marchera lui-même avec toi, il ne te délaissera point, il ne t'abandonnera point."],
    ["Marc 11:24", "C'est pourquoi je vous dis: Tout ce que vous demanderez en priant, croyez que vous l'avez reçu, et vous le verrez s'accomplir."],
    ["Psaumes 34:19", "L'Éternel est près de ceux qui ont le cœur brisé, et il sauve ceux qui ont l'esprit dans l'abattement."],
    ["Colossiens 3:23", "Tout ce que vous faites, faites-le de bon cœur, comme pour le Seigneur et non pour des hommes."],
    ["Ésaïe 53:5", "Mais il était blessé pour nos péchés, brisé pour nos iniquités; le châtiment qui nous donne la paix est tombé sur lui, et c'est par ses meurtrissures que nous sommes guéris."],
    ["Apocalypse 3:20", "Voici, je me tiens à la porte, et je frappe. Si quelqu'un entend ma voix et ouvre la porte, j'entrerai chez lui, je souperai avec lui, et lui avec moi."],
    ["Michée 6:8", "On t'a fait connaître, ô homme, ce qui est bien; et ce que l'Éternel demande de toi, c'est que tu pratiques la justice, que tu aimes la miséricorde, et que tu marches humblement avec ton Dieu."]
  ];
  function versetIntegre(j) {
    var n = Math.floor(Date.parse(j + "T00:00:00Z") / 86400000), v = VERSETS[((n % VERSETS.length) + VERSETS.length) % VERSETS.length];
    return { date: j, reference: v[0], texte: v[1] };
  }
  X.versetDuJour = function () {
    var j = jourLocal();
    if (S.verset && S.verset.date === j) return Promise.resolve(S.verset);
    return appelServeur("lireVersetDuJour").then(function (r) { return r && r.verset ? r.verset : versetIntegre(j); }, function () { return versetIntegre(j); })
      .then(function (v) { S.verset = v; return v; });
  };

  function coupeLignes(g, texte, largeur) {
    var mots = texte.split(/\s+/), lignes = [], l = "";
    mots.forEach(function (m) { var t = l ? l + " " + m : m; if (g.measureText(t).width > largeur && l) { lignes.push(l); l = m; } else l = t; });
    if (l) lignes.push(l);
    return lignes;
  }
  function imageVerset(v) {
    return new Promise(function (ok) {
      var c = document.createElement("canvas"); c.width = c.height = 1080;
      var g = c.getContext("2d"), gr = g.createLinearGradient(0, 0, 1080, 1080);
      gr.addColorStop(0, "#0b2f68"); gr.addColorStop(0.62, "#0757a8"); gr.addColorStop(1, "#d71920");
      g.fillStyle = gr; g.fillRect(0, 0, 1080, 1080);
      g.fillStyle = "rgba(255,255,255,.08)"; g.beginPath(); g.arc(940, 140, 260, 0, 7); g.fill(); g.beginPath(); g.arc(120, 980, 200, 0, 7); g.fill();
      g.textAlign = "center"; g.fillStyle = "#fff";
      g.font = "700 30px Arial"; g.fillText("VERSET DU JOUR", 540, 130);
      var taille = 64, lignes;
      do { g.font = "italic " + taille + "px Georgia, serif"; lignes = coupeLignes(g, "« " + v.texte + " »", 860); taille -= 3; } while (lignes.length * (taille + 20) > 640 && taille > 26);
      var h = lignes.length * (taille + 22), y = 540 - h / 2 + taille / 2;
      lignes.forEach(function (l, i) { g.fillText(l, 540, y + i * (taille + 22)); });
      g.font = "800 44px Arial"; g.fillStyle = "#f4c400"; g.fillText(v.reference, 540, 900);
      g.font = "600 28px Arial"; g.fillStyle = "rgba(255,255,255,.9)"; g.fillText("JESUS — Réveil Chrétien", 540, 1000);
      c.toBlob(ok, "image/png");
    });
  }
  X.partagerVerset = function () {
    X.versetDuJour().then(imageVerset).then(function (blob) {
      var f = new File([blob], "verset-du-jour.png", { type: "image/png" });
      if (navigator.canShare && navigator.canShare({ files: [f] })) return navigator.share({ files: [f], text: "JESUS — Réveil Chrétien" }).catch(function () {});
      var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "verset-du-jour.png"; document.body.appendChild(a); a.click(); a.remove();
    });
  };
  X.whatsappVerset = function () {
    X.versetDuJour().then(function (v) {
      window.open("https://wa.me/?text=" + encodeURIComponent("« " + v.texte + " »\n— " + v.reference + "\n\nJESUS — Réveil Chrétien"), "_blank");
    });
  };
  X.mediter = function () {
    if (!besoinMembre()) return;
    appelServeur("cocherActiviteDuJour", code()).then(function () { chargerEspace(function () { window.chargerCommunaute(); }); }, echec);
  };

  function chargerEspace(cb) {
    if (!membreCourant) { S.espace = null; return cb(); }
    appelServeur("monEspaceSpirituel", code()).then(function (r) { S.espace = r; cb(); }, function () { S.espace = null; cb(); });
  }
  function carteSerie() {
    var e = S.espace;
    if (!membreCourant) return '<div class="card"><p class="item-desc">🔥 Connectez-vous pour suivre votre <b>série de jours</b>, gagner des badges et suivre des plans de lecture.</p></div>';
    if (!e) return "";
    var badges = (e.badges || []).map(function (b) { return '<span class="xtr-badge">' + esc(b.ic) + " " + esc(b.nom) + "</span>"; }).join("");
    return '<div class="card"><div class="xtr-serie"><div class="n">' + (e.serie || 0) + '</div><div><b>jour(s) de suite</b><div class="item-desc">Meilleure série : ' + (e.meilleure || 0) + " jour(s) · " + (e.total || 0) + " jour(s) actifs</div></div></div>" +
      (e.faitAujourdhui ? '<p class="item-desc" style="margin-top:8px;">✅ Bravo, votre journée est validée !</p>' : '<button style="margin-top:10px;" onclick="XTR.mediter()">✅ J\'ai médité aujourd\'hui</button>') +
      (badges ? '<div class="xtr-badges">' + badges + "</div>" : "") + "</div>";
  }
  function formVerset() {
    if (!estAdminContenus()) return "";
    return '<div class="card"><div class="evt-titre">⚙ Programmer un verset (équipe)</div>' +
      '<input id="xvDate" type="date" value="' + jourLocal() + '"><input id="xvRef" type="text" maxlength="80" placeholder="Référence (ex. Jean 3:16)"><textarea id="xvTexte" rows="3" maxlength="600" placeholder="Texte du verset"></textarea>' +
      '<button class="small" onclick="XTR.programmerVerset()">Enregistrer</button><div id="xvListe" class="item-desc" style="margin-top:10px;">Chargement…</div></div>';
  }
  X.programmerVerset = function () {
    appelServeur("definirVerset", code(), document.getElementById("xvDate").value, document.getElementById("xvRef").value, document.getElementById("xvTexte").value)
      .then(function () { S.verset = null; document.getElementById("xvRef").value = ""; document.getElementById("xvTexte").value = ""; listeVersets(); }, echec);
  };
  X.supprimerVerset = function (d) { appelServeur("supprimerVerset", code(), d).then(function () { S.verset = null; listeVersets(); }, echec); };
  function listeVersets() {
    var z = document.getElementById("xvListe"); if (!z) return;
    appelServeur("listerVersets", code()).then(function (r) {
      z.innerHTML = (r.versets || []).length ? r.versets.map(function (v) {
        return "<div>" + esc(v.date) + " — <b>" + esc(v.reference) + '</b> <a href="#" onclick="XTR.supprimerVerset(\'' + esc(v.date) + '\');return false;">supprimer</a></div>';
      }).join("") : "Aucun verset programmé.";
    }, function () { z.textContent = ""; });
  }

  X.enregistrer({ id: "aujourdhui", label: "✨ Aujourd'hui", rendre: function (z) {
    z.innerHTML = '<div class="card"><div class="loading">Chargement…</div></div>';
    Promise.all([X.versetDuJour(), new Promise(function (ok) { chargerEspace(ok); })]).then(function (res) {
      var v = res[0];
      z.innerHTML = '<div class="xtr-verset"><div class="e">Verset du jour</div><div class="t">« ' + esc(v.texte) + ' »</div><div class="r">' + esc(v.reference) + "</div>" +
        '<div class="xtr-actions"><button class="secondary" onclick="XTR.partagerVerset()">📤 Partager l\'image</button><button class="secondary" onclick="XTR.whatsappVerset()">💬 WhatsApp</button></div></div>' +
        carteSerie() + formVerset();
      listeVersets();
    });
  } });

  // ------------------------------------------------------------------ PLANS DE LECTURE
  var PLANS = [
    { id: "evangile7", titre: "L'Évangile de Jean en 7 jours", desc: "Les grands chapitres pour rencontrer Jésus.", jours: ["Jean 1", "Jean 3", "Jean 6", "Jean 10", "Jean 14", "Jean 15", "Jean 20"].map(function (r) { return [r, ""]; }) },
    { id: "psaumes21", titre: "21 jours dans les Psaumes", desc: "Louange, confiance et consolation.", jours: [1, 8, 19, 23, 27, 32, 34, 37, 42, 46, 51, 63, 84, 91, 100, 103, 121, 139, 145, 146, 150].map(function (n) { return ["Psaumes " + n, ""]; }) },
    { id: "proverbes31", titre: "Proverbes : 1 chapitre par jour", desc: "31 jours de sagesse pour la vie quotidienne.", jours: Array.apply(null, Array(31)).map(function (_, i) { return ["Proverbes " + (i + 1), ""]; }) },
    { id: "priere40", titre: "40 jours de prière", desc: "Un thème de prière et un passage par jour.", jours: [
      ["Psaumes 95", "Adoration"], ["Psaumes 100", "Reconnaissance"], ["Psaumes 51", "Repentance"], ["Matthieu 6:9-15", "Pardon"], ["Hébreux 11", "Foi"],
      ["Romains 8", "Espérance"], ["1 Corinthiens 13", "Amour"], ["Philippiens 4", "Paix"], ["Psaumes 126", "Joie"], ["Jacques 1", "Sagesse"],
      ["Psaumes 127", "Famille"], ["Éphésiens 5", "Mariage"], ["Deutéronome 6", "Enfants"], ["1 Timothée 4", "Jeunesse"], ["Actes 2", "Église"],
      ["Hébreux 13", "Pasteurs et responsables"], ["1 Timothée 2", "Nation"], ["Romains 13", "Dirigeants"], ["Psaumes 122", "Paix entre les peuples"], ["Matthieu 28", "Évangélisation"],
      ["Actes 1", "Missions"], ["Ésaïe 53", "Guérison"], ["Psaumes 91", "Délivrance"], ["Psaumes 121", "Protection"], ["Psaumes 23", "Provision"],
      ["Colossiens 3", "Travail"], ["Proverbes 2", "Études"], ["Malachie 3", "Finances"], ["2 Corinthiens 9", "Générosité"], ["Philippiens 2", "Humilité"],
      ["Jacques 5", "Patience"], ["Hébreux 12", "Persévérance"], ["Éphésiens 6", "Combat spirituel"], ["1 Pierre 1", "Sainteté"], ["Psaumes 119", "La Parole de Dieu"],
      ["Jean 14", "Le Saint-Esprit"], ["1 Corinthiens 12", "Dons spirituels"], ["Jean 17", "Unité"], ["1 Thessaloniciens 4", "Le retour du Seigneur"], ["Romains 12", "Consécration"]] }
  ];
  function planParId(id) { return PLANS.filter(function (p) { return p.id === id; })[0]; }
  X.ouvrirPlan = function (id) { S.plan = id; window.chargerCommunaute(); };
  X.fermerPlan = function () { S.plan = null; window.chargerCommunaute(); };
  X.validerJour = function (id, n) {
    if (!besoinMembre()) return;
    appelServeur("validerJourPlan", code(), id, n).then(function () { chargerEspace(function () { window.chargerCommunaute(); }); }, echec);
  };
  X.recommencerPlan = function (id) {
    confirmerApp_("Recommencer ce plan à zéro ?", function () { appelServeur("reinitialiserPlan", code(), id).then(function () { chargerEspace(function () { window.chargerCommunaute(); }); }, echec); });
  };
  function progression(id) { var e = S.espace && S.espace.plans && S.espace.plans[id]; return e ? e.jours.length : 0; }
  X.enregistrer({ id: "plans", label: "📖 Plans de lecture", rendre: function (z) {
    var go = function () {
      var plan = S.plan && planParId(S.plan);
      if (!plan) {
        z.innerHTML = (membreCourant ? "" : '<div class="card"><p class="item-desc">Connectez-vous pour enregistrer votre progression et alimenter votre série.</p></div>') +
          PLANS.map(function (p) {
            var n = progression(p.id), pc = Math.round(100 * n / p.jours.length);
            return '<div class="evt-carte" style="margin-bottom:10px;"><div class="evt-titre">' + esc(p.titre) + '</div><div class="item-desc">' + esc(p.desc) + "</div>" +
              '<div class="xtr-barre"><i style="width:' + pc + '%"></i></div><div class="evt-meta">' + n + " / " + p.jours.length + " jours" + (n >= p.jours.length ? " · 🎉 Terminé" : "") + "</div>" +
              '<button class="small" style="margin-top:8px;" onclick="XTR.ouvrirPlan(\'' + p.id + '\')">' + (n ? "Continuer" : "Commencer") + "</button></div>";
          }).join("");
        return;
      }
      var faits = (S.espace && S.espace.plans && S.espace.plans[plan.id] && S.espace.plans[plan.id].jours) || [];
      var prochain = 1; while (faits.indexOf(prochain) !== -1) prochain++;
      z.innerHTML = '<button class="small secondary" onclick="XTR.fermerPlan()">← Tous les plans</button><div class="card" style="margin-top:10px;"><div class="evt-titre">' + esc(plan.titre) + "</div>" +
        '<div class="xtr-barre"><i style="width:' + Math.round(100 * faits.length / plan.jours.length) + '%"></i></div>' +
        plan.jours.map(function (j, i) {
          var n = i + 1, ok = faits.indexOf(n) !== -1;
          return '<div class="xtr-jour ' + (ok ? "ok" : "") + '"><div class="c">' + (ok ? "✓" : n) + '</div><div style="flex:1;"><b>' + esc(j[0]) + "</b>" + (j[1] ? '<div class="item-desc">' + esc(j[1]) + "</div>" : "") + "</div>" +
            (!ok && n === prochain ? '<button class="small" style="width:auto;" onclick="XTR.validerJour(\'' + plan.id + "'," + n + ')">Lu ✓</button>' : "") + "</div>";
        }).join("") +
        (faits.length ? '<button class="small secondary" style="margin-top:10px;" onclick="XTR.recommencerPlan(\'' + plan.id + '\')">Recommencer</button>' : "") + "</div>" +
        '<p class="item-desc">Lisez le passage dans l\'onglet <a href="#" onclick="afficherOnglet(\'bible\');return false;">📖 Bible</a>, puis validez la journée.</p>';
    };
    if (membreCourant && !S.espace) chargerEspace(go); else go();
  } });

  // ------------------------------------------------------------------ MUR DE PRIÈRE
  var CATS = ["Guérison", "Famille", "Travail", "Études", "Finances", "Délivrance", "Reconnaissance", "Autre"];
  X.sousMur = function (t) { S.mur = t; window.chargerCommunaute(); };
  function carteMur(p, mien) {
    var pries = S.pries[p.id] || lsGet("jesus_mur_pries", {})[p.id];
    var texte = p.temoignage ? esc(p.texte) + '<div style="margin-top:8px;background:#e8f6ee;border-radius:10px;padding:8px 10px;"><b>🙌 Témoignage :</b> ' + esc(p.temoignage) + "</div>" : esc(p.texte);
    return '<div class="xtr-post" id="mur-' + esc(p.id) + '"><div class="evt-meta"><b>' + esc(p.nom) + "</b> · " + esc(p.categorie) + " · " + esc(ilya(p.date)) + '</div><div class="tx">' + texte + "</div>" +
      '<div class="ligne"><button class="small ' + (pries ? "secondary" : "") + '" id="mp-' + esc(p.id) + '" onclick="XTR.prier(\'' + esc(p.id) + '\')">🙏 ' + (pries ? "J'ai prié" : "Je prie") + " · <span>" + (p.prieres || 0) + "</span></button>" +
      (mien && p.type === "Demande" ? '<button class="small secondary" onclick="XTR.exaucee(\'' + esc(p.id) + '\')">🙌 Exaucée</button>' : "") +
      (mien || estModerateur() ? '<button class="small secondary" onclick="XTR.supprimerPost(\'' + esc(p.id) + '\')">🗑️</button>' : '<button class="small secondary" onclick="XTR.signaler(\'' + esc(p.id) + '\')">⚑ Signaler</button>') + "</div></div>";
  }
  X.prier = function (id) {
    appelServeur("prierMur", code(), membreCourant ? null : cleNote_(), id).then(function (r) {
      var m = lsGet("jesus_mur_pries", {}); m[id] = 1; lsSet("jesus_mur_pries", m); S.pries[id] = 1;
      var b = document.getElementById("mp-" + id);
      if (b) { b.classList.add("secondary"); b.innerHTML = "🙏 J'ai prié · <span>" + r.prieres + "</span>"; }
    }, echec);
  };
  X.signaler = function (id) {
    confirmerApp_("Signaler ce message comme inapproprié ?", function () {
      appelServeur("signalerMur", code(), membreCourant ? null : cleNote_(), id).then(function () { alert("Merci, votre signalement a été pris en compte."); }, echec);
    });
  };
  X.supprimerPost = function (id) {
    confirmerApp_("Supprimer ce message ?", function () { appelServeur("supprimerMur", code(), id).then(function () { window.chargerCommunaute(); }, echec); });
  };
  X.exaucee = function (id) {
    var t = prompt("Racontez en quelques mots comment Dieu a répondu :");
    if (!t) return;
    appelServeur("temoignerMur", code(), id, t).then(function () { S.mur = "Témoignage"; window.chargerCommunaute(); }, echec);
  };
  X.publier = function () {
    if (!besoinMembre()) return;
    var t = document.getElementById("murTexte");
    appelServeur("publierMur", code(), S.mur === "Témoignage" ? "Témoignage" : "Demande", t.value, document.getElementById("murCat").value, document.getElementById("murAnon").checked)
      .then(function () { window.chargerCommunaute(); }, echec);
  };
  X.retablir = function (id) { appelServeur("retablirMur", code(), id).then(function () { window.chargerCommunaute(); }, echec); };
  X.enregistrer({ id: "mur", label: "🙏 Mur de prière", rendre: function (z) {
    var sous = [["Demande", "Demandes"], ["Témoignage", "Témoignages"]];
    if (membreCourant) sous.push(["Mes", "Mes messages"]);
    if (estModerateur()) sous.push(["Moderation", "🛡️ Modération"]);
    var h = '<div style="display:flex;gap:6px;margin-bottom:10px;flex-wrap:wrap;">' + sous.map(function (s) {
      return '<button class="small ' + (S.mur === s[0] ? "" : "secondary") + '" style="width:auto;" onclick="XTR.sousMur(\'' + s[0] + '\')">' + s[1] + "</button>";
    }).join("") + "</div>";
    var formulaire = "";
    if (S.mur === "Demande" || S.mur === "Témoignage") {
      formulaire = membreCourant ? '<div class="card"><textarea id="murTexte" rows="3" maxlength="600" placeholder="' + (S.mur === "Demande" ? "Votre sujet de prière…" : "Votre témoignage…") + '"></textarea>' +
        '<select id="murCat">' + CATS.map(function (c) { return "<option>" + c + "</option>"; }).join("") + '</select>' +
        '<label style="display:flex;gap:8px;align-items:center;font-size:13px;margin:6px 0;"><input type="checkbox" id="murAnon" style="width:auto;"> Publier anonymement</label>' +
        '<button onclick="XTR.publier()">Publier</button></div>' : '<div class="card"><p class="item-desc">Vous pouvez prier pour les autres sans compte. Connectez-vous pour publier votre propre message.</p></div>';
    }
    z.innerHTML = h + formulaire + '<div class="card" id="murListe"><div class="loading">Chargement…</div></div>';
    var cible = document.getElementById("murListe");
    var rendu = function (posts, mien) { cible.innerHTML = posts.length ? posts.map(function (p) { return carteMur(p, mien || (membreCourant && p.auteur === code())); }).join("") : '<p class="empty-state">Rien pour le moment.</p>'; };
    if (S.mur === "Mes") appelServeur("mesPostsMur", code()).then(function (r) { rendu(r.posts, true); }, function (e) { cible.textContent = e.message; });
    else if (S.mur === "Moderation") appelServeur("murAModerer", code()).then(function (r) {
      cible.innerHTML = r.posts.length ? r.posts.map(function (p) { return carteMur(p, false).replace("</div></div>", '<button class="small" onclick="XTR.retablir(\'' + esc(p.id) + '\')">Rétablir</button></div></div>'); }).join("") : '<p class="empty-state">Aucun message masqué.</p>';
    }, function (e) { cible.textContent = e.message; });
    else appelServeur("listerMur", S.mur).then(function (r) { rendu(r.posts); }, function (e) { cible.textContent = e.message; });
  } });

  // ======================================================================= LOT 2
  // Favoris, playlists, hors-ligne, reprise de lecture, recherche globale, notifications
  var CACHE_HL = "jesus-hors-ligne";
  var FAV = null;   // { favoris:[{k,id,t}], playlists:[{id,n,items:[{id,t}]}] }
  function favLocal() {
    if (!FAV) { FAV = lsGet("jesus_fav", null) || { favoris: [], playlists: [] }; FAV.favoris = FAV.favoris || []; FAV.playlists = FAV.playlists || []; }
    return FAV;
  }
  var minuteurFav = null;
  function sauverFav() {
    lsSet("jesus_fav", favLocal());
    if (!membreCourant) return;
    clearTimeout(minuteurFav);
    minuteurFav = setTimeout(function () { appelServeur("enregistrerFavoris", code(), favLocal()).catch(function () {}); }, 1200);
  }
  // À la connexion : on fusionne les favoris de l'appareil avec ceux du compte.
  var favSynchro = null;
  function synchroFav() {
    if (!membreCourant) return Promise.resolve();
    if (favSynchro === code()) return Promise.resolve();
    return appelServeur("lireFavoris", code()).then(function (r) {
      var d = (r && r.donnees) || {}, f = favLocal();
      (d.favoris || []).forEach(function (x) { if (!f.favoris.some(function (y) { return y.k === x.k && y.id === x.id; })) f.favoris.push(x); });
      (d.playlists || []).forEach(function (p) { if (!f.playlists.some(function (y) { return y.id === p.id; })) f.playlists.push(p); });
      favSynchro = code(); sauverFav();
    }, function () {});
  }
  function estFavori(k, id) { return favLocal().favoris.some(function (f) { return f.k === k && f.id === id; }); }
  X.coeurHtml = function (k, id, t) {
    return '<button type="button" class="xtr-coeur' + (estFavori(k, id) ? " on" : "") + '" data-k="' + k + '" data-i="' + esc(id) + '" title="Ajouter aux favoris" aria-label="Favori" onclick="event.stopPropagation();XTR.favori(\'' + k + "','" + esc(id) + "','" + jsq_(t || "") + '\')">' + (estFavori(k, id) ? "♥" : "♡") + "</button>";
  };
  X.favori = function (k, id, t) {
    var f = favLocal(), i = -1;
    f.favoris.forEach(function (x, n) { if (x.k === k && x.id === id) i = n; });
    if (i >= 0) f.favoris.splice(i, 1); else { if (f.favoris.length >= 300) { alert("Limite de 300 favoris atteinte."); return; } f.favoris.unshift({ k: k, id: id, t: String(t || "").slice(0, 120) }); }
    sauverFav();
    document.querySelectorAll('.xtr-coeur[data-k="' + k + '"]').forEach(function (b) {
      if (b.getAttribute("data-i") === id) { var on = estFavori(k, id); b.classList.toggle("on", on); b.textContent = on ? "♥" : "♡"; }
    });
    if (S.vue === "favoris") window.chargerCommunaute();
  };
  var css2 = document.createElement("style");
  css2.textContent =
    ".xtr-coeur{width:auto;min-width:0;padding:0 6px;margin:0;background:transparent;border:0;box-shadow:none;color:#9aa6b8;font-size:20px;line-height:1;cursor:pointer;flex:none}.xtr-coeur.on{color:var(--red)}" +
    ".xtr-ligne{display:flex;gap:8px;align-items:center;padding:9px 0;border-bottom:1px solid var(--line)}.xtr-ligne:last-child{border-bottom:0}.xtr-ligne .tt{flex:1;min-width:0}.xtr-ligne .tt b{display:block;overflow:hidden;text-overflow:ellipsis}" +
    ".xtr-ligne button{width:auto;flex:none}.xtr-barre-audio{display:flex;gap:6px;flex-wrap:wrap;padding:8px 14px 0}.xtr-barre-audio button{flex:1 1 90px;width:auto}";
  document.head.appendChild(css2);

  function modalX(html) {
    var fond = document.createElement("div");
    fond.className = "dlg-overlay"; fond.style.cssText = "z-index:9500;align-items:flex-start;overflow-y:auto;";
    var boite = document.createElement("div"); boite.className = "dlg-boite"; boite.style.cssText = "max-width:420px;margin:16px 0;"; boite.innerHTML = html;
    fond.appendChild(boite); document.body.appendChild(fond);
    fond.addEventListener("click", function (e) { if (e.target === fond) fond.remove(); });
    return { el: boite, close: function () { fond.remove(); } };
  }
  function attendre(cond, cb) { var i = 0, h = setInterval(function () { if (cond() || ++i > 50) { clearInterval(h); cb(); } }, 150); }

  // ---- Ouverture d'un contenu depuis les favoris / la recherche
  function audioParId(id) { return (typeof audiosCache !== "undefined" ? audiosCache : []).filter(function (a) { return a.ID === id; })[0]; }
  X.ouvrir = function (k, id, t, groupe) {
    if (k === "audio") {
      afficherOnglet("audios");
      attendre(function () { return !!audioParId(id); }, function () {
        var liste = (groupe || [id]).map(audioParId).filter(Boolean), i = Math.max(0, liste.map(function (a) { return a.ID; }).indexOf(id));
        if (!liste.length) { alert("Cet audio n'est plus disponible."); return; }
        listeAudioActuelle = liste; jouerAudio(i);
      });
    } else if (k === "video") {
      afficherOnglet("videos");
      attendre(function () { return videosPlateformeCache.some(function (v) { return v.ID === id; }); }, function () {
        var i = videosPlateformeCache.map(function (v) { return v.ID; }).indexOf(id);
        if (i < 0) { alert("Cette vidéo n'est plus disponible."); return; }
        jouerVideoDepuisAccueil_(i);
      });
    } else if (k === "document") {
      afficherOnglet("documents");
      attendre(function () { return documentsCache.some(function (d) { return d.ID === id; }); }, function () {
        afficherSousDocuments("tous"); document.getElementById("rechercheDocuments").value = t || ""; filtrerDocuments();
      });
    } else if (k === "evenement") { afficherOnglet("evenements"); setTimeout(function () { EVT.ouvrir(id); }, 400); }
  };

  // ---- Barre d'actions dans le lecteur audio
  X.barreAudio = function (a) {
    if (!a) return "";
    var hl = lsGet("jesus_hl", []).some(function (x) { return x.id === a.ID; });
    return '<div class="xtr-barre-audio"><button class="secondary small" id="btnFavAudio" onclick="XTR.favoriAudio()">' + (estFavori("audio", a.ID) ? "♥ Favori" : "♡ Favori") + "</button>" +
      '<button class="secondary small" onclick="XTR.versPlaylist()">➕ Playlist</button>' +
      '<button class="secondary small" id="btnHorsLigne" onclick="XTR.sauverHorsLigne()">' + (hl ? "✓ Hors-ligne" : "📥 Hors-ligne") + "</button></div>";
  };
  X.favoriAudio = function () {
    var a = listeAudioActuelle[indexAudioActuel]; if (!a) return;
    X.favori("audio", a.ID, a.Titre);
    var b = document.getElementById("btnFavAudio"); if (b) b.textContent = estFavori("audio", a.ID) ? "♥ Favori" : "♡ Favori";
  };

  // ---- Reprise de lecture (position mémorisée par audio)
  X.surLecteurAudio = function (el, a) {
    if (!el || !a) return;
    var id = a.ID, dernier = 0;
    var pos = lsGet("jesus_pos", {})[id];
    el.addEventListener("loadedmetadata", function () { if (pos > 8 && el.duration && pos < el.duration - 8) { try { el.currentTime = pos; } catch (e) { /* ignoré */ } } }, { once: true });
    el.addEventListener("timeupdate", function () {
      if (Date.now() - dernier < 5000) return; dernier = Date.now();
      var m = lsGet("jesus_pos", {}); m[id] = Math.floor(el.currentTime);
      var cles = Object.keys(m); if (cles.length > 150) delete m[cles[0]];
      lsSet("jesus_pos", m);
    });
    el.addEventListener("ended", function () { var m = lsGet("jesus_pos", {}); delete m[id]; lsSet("jesus_pos", m); });
  };

  // ---- Playlists personnelles (audios)
  X.versPlaylist = function () {
    var a = listeAudioActuelle[indexAudioActuel]; if (!a) return;
    var f = favLocal(), m;
    var html = '<div class="evt-titre">➕ Ajouter à une playlist</div>' + f.playlists.map(function (p) {
      var dedans = p.items.some(function (x) { return x.id === a.ID; });
      return '<div class="xtr-ligne"><div class="tt"><b>' + esc(p.n) + '</b><span class="item-desc">' + p.items.length + ' audio(s)</span></div><button class="small ' + (dedans ? "secondary" : "") + '" data-p="' + esc(p.id) + '">' + (dedans ? "✓ Ajouté" : "Ajouter") + "</button></div>";
    }).join("") + '<input id="xtrNomPl" type="text" maxlength="60" placeholder="Nouvelle playlist…" style="margin-top:10px;"><button class="small" id="xtrCreerPl">Créer et ajouter</button> <button class="small secondary" id="xtrFermerPl">Fermer</button>';
    m = modalX(html);
    m.el.querySelectorAll("[data-p]").forEach(function (b) {
      b.onclick = function () {
        var p = f.playlists.filter(function (x) { return x.id === b.getAttribute("data-p"); })[0];
        if (!p.items.some(function (x) { return x.id === a.ID; })) { if (p.items.length >= 200) { alert("Playlist pleine (200 audios)."); return; } p.items.push({ id: a.ID, t: a.Titre }); sauverFav(); }
        m.close();
      };
    });
    m.el.querySelector("#xtrFermerPl").onclick = m.close;
    m.el.querySelector("#xtrCreerPl").onclick = function () {
      var n = m.el.querySelector("#xtrNomPl").value.trim(); if (!n) return;
      if (f.playlists.length >= 30) { alert("Limite de 30 playlists atteinte."); return; }
      f.playlists.push({ id: "P" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), n: n, items: [{ id: a.ID, t: a.Titre }] }); sauverFav(); m.close();
    };
  };
  X.jouerPlaylist = function (pid, depuis) {
    var p = favLocal().playlists.filter(function (x) { return x.id === pid; })[0]; if (!p || !p.items.length) return;
    var ids = p.items.map(function (x) { return x.id; });
    X.ouvrir("audio", ids[depuis || 0], "", ids);
  };
  X.lireFavorisAudio = function () {
    var ids = favLocal().favoris.filter(function (f) { return f.k === "audio"; }).map(function (f) { return f.id; });
    if (ids.length) X.ouvrir("audio", ids[0], "", ids);
  };
  X.retirerDePlaylist = function (pid, aid) {
    var p = favLocal().playlists.filter(function (x) { return x.id === pid; })[0]; if (!p) return;
    p.items = p.items.filter(function (x) { return x.id !== aid; }); sauverFav(); window.chargerCommunaute();
  };
  X.supprimerPlaylist = function (pid) {
    confirmerApp_("Supprimer cette playlist ?", function () { var f = favLocal(); f.playlists = f.playlists.filter(function (x) { return x.id !== pid; }); sauverFav(); window.chargerCommunaute(); });
  };
  X.nouvellePlaylist = function () {
    var n = (document.getElementById("xtrNouvPl").value || "").trim(); if (!n) return;
    var f = favLocal(); if (f.playlists.length >= 30) { alert("Limite de 30 playlists atteinte."); return; }
    f.playlists.push({ id: "P" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), n: n, items: [] }); sauverFav(); window.chargerCommunaute();
  };
  var NOMS_K = { audio: "🎧 Audios", video: "▶️ Vidéos", document: "📄 Documents", evenement: "🎫 Événements" };
  X.enregistrer({ id: "favoris", label: "♥ Favoris & playlists", rendre: function (z) {
    z.innerHTML = '<div class="card"><div class="loading">Chargement…</div></div>';
    synchroFav().then(function () {
      var f = favLocal(), h = "";
      ["audio", "video", "document", "evenement"].forEach(function (k) {
        var l = f.favoris.filter(function (x) { return x.k === k; });
        if (!l.length) return;
        h += '<div class="card"><div class="evt-titre">' + NOMS_K[k] + (k === "audio" ? ' <button class="small" style="width:auto;float:right;" onclick="XTR.lireFavorisAudio()">▶ Tout lire</button>' : "") + "</div>" +
          l.map(function (x) {
            return '<div class="xtr-ligne"><div class="tt"><b>' + esc(x.t || x.id) + '</b></div><button class="small" onclick="XTR.ouvrir(\'' + k + "','" + esc(x.id) + "','" + jsq_(x.t) + '\')">Ouvrir</button>' + X.coeurHtml(k, x.id, x.t) + "</div>";
          }).join("") + "</div>";
      });
      if (!h) h = '<div class="card"><p class="empty-state">Aucun favori. Touchez le ♡ d\'un audio, d\'une vidéo ou d\'un document pour le retrouver ici.</p></div>';
      h += '<div class="card"><div class="evt-titre">🎶 Mes playlists (audios)</div>' +
        f.playlists.map(function (p) {
          return '<div style="border-bottom:1px solid var(--line);padding:8px 0;"><div class="xtr-ligne" style="border:0;"><div class="tt"><b>' + esc(p.n) + '</b><span class="item-desc">' + p.items.length + ' audio(s)</span></div>' +
            (p.items.length ? '<button class="small" onclick="XTR.jouerPlaylist(\'' + esc(p.id) + '\')">▶ Lire</button>' : "") + '<button class="small secondary" onclick="XTR.supprimerPlaylist(\'' + esc(p.id) + '\')">🗑️</button></div>' +
            p.items.map(function (it, i) { return '<div class="xtr-ligne" style="padding:4px 0 4px 12px;border:0;"><div class="tt item-desc">' + (i + 1) + ". " + esc(it.t || it.id) + '</div><button class="small secondary" onclick="XTR.jouerPlaylist(\'' + esc(p.id) + "'," + i + ')">▶</button><button class="small secondary" onclick="XTR.retirerDePlaylist(\'' + esc(p.id) + "','" + esc(it.id) + '\')">✕</button></div>'; }).join("") + "</div>";
        }).join("") +
        '<input id="xtrNouvPl" type="text" maxlength="60" placeholder="Nom de la nouvelle playlist" style="margin-top:10px;"><button class="small" onclick="XTR.nouvellePlaylist()">Créer</button>' +
        '<p class="item-desc">Pour ajouter un audio, ouvrez-le puis touchez « ➕ Playlist » sous le lecteur.</p></div>';
      if (!membreCourant) h = '<div class="card"><p class="item-desc">Sans compte, vos favoris restent sur cet appareil. Connectez-vous pour les retrouver partout.</p></div>' + h;
      z.innerHTML = h;
    });
  } });

  // ---- Mode hors-ligne (audios hébergés par l'application)
  function tailleTxt(o) { return o > 1048576 ? (o / 1048576).toFixed(1).replace(".", ",") + " Mo" : Math.round(o / 1024) + " Ko"; }
  X.sauverHorsLigne = function () {
    var s = audioATelecharger_, a = listeAudioActuelle[indexAudioActuel], b = document.getElementById("btnHorsLigne");
    if (!s || !a || !b || !window.caches) { alert("Le mode hors-ligne n'est pas disponible sur ce navigateur."); return; }
    if (lsGet("jesus_hl", []).some(function (x) { return x.id === a.ID; })) { X.vue("horsligne"); afficherOnglet("communaute"); return; }
    if (!s.base64 && (!s.lien || s.lien.indexOf("/media/") === -1)) { alert("Cet audio est hébergé ailleurs : le mode hors-ligne n'est pas disponible pour lui. Utilisez « Télécharger »."); return; }
    var avant = b.textContent; b.disabled = true; b.textContent = "0 %";
    var fin = function (t) { b.disabled = false; b.textContent = t; };
    var obtenir = s.base64 ? Promise.resolve(function () { var bin = atob(s.base64), o = new Uint8Array(bin.length); for (var i = 0; i < bin.length; i++) o[i] = bin.charCodeAt(i); return new Blob([o], { type: s.mime || "audio/mpeg" }); }()) :
      fetch(s.lien).then(function (r) {
        if (!r.ok) throw new Error("Lien expiré : relancez la lecture puis réessayez.");
        var total = Number(r.headers.get("Content-Length")) || 0, type = r.headers.get("Content-Type") || "audio/mpeg";
        if (!r.body || !r.body.getReader) return r.blob();
        var lec = r.body.getReader(), parts = [], recu = 0;
        var boucle = function () { return lec.read().then(function (x) { if (x.done) return new Blob(parts, { type: type }); parts.push(x.value); recu += x.value.length; if (total) b.textContent = Math.floor(recu * 100 / total) + " %"; return boucle(); }); };
        return boucle();
      });
    obtenir.then(function (blob) {
      return caches.open(CACHE_HL).then(function (c) { return c.put("hors-ligne/audio/" + a.ID, new Response(blob, { headers: { "Content-Type": blob.type || "audio/mpeg" } })); }).then(function () {
        var l = lsGet("jesus_hl", []).filter(function (x) { return x.id !== a.ID; });
        l.unshift({ id: a.ID, t: a.Titre, a: a.Auteur || "", taille: blob.size, date: Date.now() }); lsSet("jesus_hl", l);
        if (navigator.storage && navigator.storage.persist) navigator.storage.persist().catch(function () {});
        fin("✓ Hors-ligne");
      });
    }).catch(function (e) { fin(avant); alert("Enregistrement impossible : " + ((e && e.message) || e)); });
  };
  X.jouerHL = function (id) {
    var zone = document.getElementById("hl-" + id); if (!zone) return;
    caches.open(CACHE_HL).then(function (c) { return c.match("hors-ligne/audio/" + id); }).then(function (r) {
      if (!r) throw new Error("Fichier introuvable : supprimez puis ré-enregistrez cet audio.");
      return r.blob();
    }).then(function (b) { zone.innerHTML = '<audio controls autoplay style="width:100%;margin-top:6px;" src="' + URL.createObjectURL(b) + '"></audio>'; }, echec);
  };
  X.supprimerHL = function (id) {
    caches.open(CACHE_HL).then(function (c) { return c.delete("hors-ligne/audio/" + id); }).then(function () {
      lsSet("jesus_hl", lsGet("jesus_hl", []).filter(function (x) { return x.id !== id; })); window.chargerCommunaute();
    });
  };
  X.enregistrer({ id: "horsligne", label: "📥 Hors-ligne", rendre: function (z) {
    var l = lsGet("jesus_hl", []), total = l.reduce(function (s, x) { return s + (x.taille || 0); }, 0);
    z.innerHTML = '<div class="card"><div class="evt-titre">📥 Écouter sans connexion</div><p class="item-desc">Ouvrez un audio puis touchez « 📥 Hors-ligne » sous le lecteur : il reste sur cet appareil et se lit sans internet' +
      (l.length ? " (" + l.length + " audio(s), " + tailleTxt(total) + ")" : "") + ".</p></div>" +
      (l.length ? '<div class="card">' + l.map(function (x) {
        return '<div class="xtr-ligne" style="flex-wrap:wrap;"><div class="tt"><b>' + esc(x.t) + '</b><span class="item-desc">' + esc(x.a) + " · " + tailleTxt(x.taille || 0) + '</span></div><button class="small" onclick="XTR.jouerHL(\'' + esc(x.id) + '\')">▶ Lire</button><button class="small secondary" onclick="XTR.supprimerHL(\'' + esc(x.id) + '\')">🗑️</button><div id="hl-' + esc(x.id) + '" style="width:100%;"></div></div>';
      }).join("") + "</div>" : '<div class="card"><p class="empty-state">Aucun audio enregistré.</p></div>');
  } });

  // ---- Recherche globale
  var BASE = { t: 0, d: null };
  function chargerBase() {
    if (BASE.d && Date.now() - BASE.t < 120000) return Promise.resolve(BASE.d);
    var sûr = function (p) { return p.catch(function () { return []; }); };
    return Promise.all([
      sûr(appelServeur(modeVisiteur ? "getEnregistrementsPublic" : "getEnregistrements")), sûr(appelServeur("getDocuments")), sûr(appelServeur("getVideos")),
      appelServeur("getEvenements").then(function (r) { return (r && r.evenements) || []; }, function () { return []; })
    ]).then(function (r) {
      var d = [];
      (r[0] || []).forEach(function (a) { d.push({ k: "audio", id: a.ID, t: a.Titre, s: a.Auteur, x: a.Description }); });
      (r[1] || []).forEach(function (a) { d.push({ k: "document", id: a.ID, t: a.Titre, s: a.Auteur, x: a.Description }); });
      (r[2] || []).forEach(function (a) { d.push({ k: "video", id: a.ID, t: a.Titre, s: a.Auteur, x: a.Description }); });
      (r[3] || []).forEach(function (a) { d.push({ k: "evenement", id: a.id, t: a.titre, s: a.lieu, x: a.description }); });
      BASE = { t: Date.now(), d: d }; return d;
    });
  }
  function norm(t) { return String(t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  X.chercher = function () {
    var q = norm(document.getElementById("xtrQ").value.trim()), z = document.getElementById("xtrRes");
    if (q.length < 2) { z.innerHTML = '<p class="item-desc">Tapez au moins 2 lettres.</p>'; return; }
    z.innerHTML = '<div class="loading">Recherche…</div>';
    chargerBase().then(function (d) {
      var mots = q.split(/\s+/);
      var res = d.filter(function (x) { var s = norm(x.t + " " + x.s + " " + x.x); return mots.every(function (m) { return s.indexOf(m) !== -1; }); });
      if (!res.length) { z.innerHTML = '<p class="empty-state">Aucun résultat pour « ' + esc(q) + " ».</p>"; return; }
      var h = "";
      ["audio", "video", "document", "evenement"].forEach(function (k) {
        var l = res.filter(function (x) { return x.k === k; }).slice(0, 20); if (!l.length) return;
        h += '<div class="card"><div class="evt-titre">' + NOMS_K[k] + "</div>" + l.map(function (x) {
          return '<div class="xtr-ligne"><div class="tt"><b>' + esc(x.t) + "</b>" + (x.s ? '<span class="item-desc">' + esc(x.s) + "</span>" : "") + '</div><button class="small" onclick="XTR.ouvrir(\'' + k + "','" + esc(x.id) + "','" + jsq_(x.t) + '\')">Ouvrir</button></div>';
        }).join("") + "</div>";
      });
      z.innerHTML = h;
    }, function (e) { z.innerHTML = '<p class="error">' + esc(e.message) + "</p>"; });
  };
  X.enregistrer({ id: "recherche", label: "🔎 Recherche", rendre: function (z) {
    z.innerHTML = '<div class="card"><input id="xtrQ" type="search" placeholder="🔎 Audios, vidéos, documents, événements…" autocomplete="off" onkeydown="if(event.key===\'Enter\')XTR.chercher()"><button class="small" onclick="XTR.chercher()">Rechercher</button></div><div id="xtrRes"></div>';
    var i = document.getElementById("xtrQ"); if (i) i.focus();
  } });

  // ---- Notifications push
  function b64Vers(s) { var p = "=".repeat((4 - s.length % 4) % 4), b = atob((s + p).replace(/-/g, "+").replace(/_/g, "/")); return Uint8Array.from(b, function (c) { return c.charCodeAt(0); }); }
  function pushPossible() { return "serviceWorker" in navigator && "PushManager" in window && "Notification" in window; }
  function abonnementActuel() {
    if (!pushPossible()) return Promise.resolve(null);
    return navigator.serviceWorker.ready.then(function (r) { return r.pushManager.getSubscription(); }).catch(function () { return null; });
  }
  X.activerPush = function () {
    appelServeur("cleVapidPublique").then(function (r) {
      return Notification.requestPermission().then(function (perm) {
        if (perm !== "granted") throw new Error("Notifications refusées : autorisez-les dans les réglages du navigateur.");
        return navigator.serviceWorker.ready;
      }).then(function (reg) { return reg.pushManager.subscribe({ userVisibleOnly: true, applicationServerKey: b64Vers(r.cle) }); });
    }).then(function (sub) { return appelServeur("abonnerPush", code(), sub.toJSON()); }).then(function () { window.chargerCommunaute(); }, echec);
  };
  X.desactiverPush = function () {
    abonnementActuel().then(function (s) { if (!s) return; var ep = s.endpoint; return s.unsubscribe().then(function () { return appelServeur("desabonnerPush", ep).catch(function () {}); }); }).then(function () { window.chargerCommunaute(); });
  };
  X.diffuser = function () {
    var t = document.getElementById("xnTitre").value, m = document.getElementById("xnMsg").value, l = document.getElementById("xnLien").value, s = document.getElementById("xnEtat");
    if (!t.trim() || !m.trim()) { alert("Titre et message obligatoires."); return; }
    var ok = 0, ko = 0;
    var boucle = function (debut) {
      s.textContent = "Envoi en cours… " + ok + " envoyé(s)";
      return appelServeur("diffuserPush", code(), t, m, l, debut).then(function (r) {
        ok += r.envoyes; ko += r.echecs;
        if (r.suivant != null) return boucle(r.suivant);
        s.textContent = "✅ Terminé : " + ok + " appareil(s) notifié(s)" + (ko ? ", " + ko + " échec(s)" : "") + ".";
      });
    };
    boucle(0).catch(function (e) { s.textContent = "Erreur : " + e.message; });
  };
  X.enregistrer({ id: "notifs", label: "🔔 Notifications", rendre: function (z) {
    z.innerHTML = '<div class="card"><div class="loading">Chargement…</div></div>';
    abonnementActuel().then(function (sub) {
      var h = '<div class="card"><div class="evt-titre">🔔 Notifications</div>';
      if (!pushPossible()) h += '<p class="item-desc">Ce navigateur ne gère pas les notifications. Sur iPhone : installez d\'abord l\'application sur l\'écran d\'accueil (Partager → Sur l\'écran d\'accueil).</p>';
      else if (sub) h += '<p class="item-desc">✅ Activées sur cet appareil : vous serez prévenu des nouveautés.</p><button class="small secondary" onclick="XTR.desactiverPush()">Désactiver</button>';
      else h += '<p class="item-desc">Recevez une alerte pour les nouveaux contenus, les événements et les annonces importantes.</p><button onclick="XTR.activerPush()">🔔 Activer les notifications</button>';
      h += "</div>";
      if (estAdminContenus()) h += '<div class="card"><div class="evt-titre">⚙ Envoyer une notification (équipe)</div><input id="xnTitre" maxlength="80" placeholder="Titre"><textarea id="xnMsg" rows="2" maxlength="200" placeholder="Message"></textarea><input id="xnLien" maxlength="200" placeholder="Lien (facultatif)"><button onclick="XTR.diffuser()">Envoyer à tous les abonnés</button><p id="xnEtat" class="item-desc"></p><p id="xnStat" class="item-desc"></p></div>';
      z.innerHTML = h;
      if (estAdminContenus()) appelServeur("statPush", code()).then(function (r) { var e = document.getElementById("xnStat"); if (e) e.textContent = r.configure ? r.total + " appareil(s) abonné(s)." : "⚠️ Clés VAPID non configurées sur le Worker."; }, function () {});
    });
  } });

  // Reconnexion : synchronise les favoris du compte
  setTimeout(function () { synchroFav(); }, 4000);

  // ======================================================================= LOT 3
  // Badge vérifié, auteurs suivis, cellules, annuaire d'églises
  var VERIF = {};
  function cleAut(n) { return "a:" + String(n || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, " ").trim().slice(0, 80); }
  function chargerVerifies() { return appelServeur("listerVerifies").then(function (r) { VERIF = {}; ((r && r.cles) || []).forEach(function (c) { VERIF[c] = 1; }); }, function () {}); }
  X.badgeVerifie = function (cle) { return VERIF[cle] ? ' <span class="xtr-verif" title="Compte vérifié">✔</span>' : ""; };
  X.lienAuteur = function (nom) {
    if (!nom) return "";
    return '<a href="#" class="xtr-lien-aut" onclick="event.stopPropagation();XTR.auteur(\'' + jsq_(nom) + '\');return false;">' + esc(nom) + "</a>" + X.badgeVerifie(cleAut(nom));
  };
  var css3 = document.createElement("style");
  css3.textContent = ".xtr-verif{display:inline-flex;align-items:center;justify-content:center;width:15px;height:15px;border-radius:50%;background:#1d9bf0;color:#fff;font-size:10px;font-weight:900;vertical-align:middle}" +
    ".xtr-lien-aut{color:inherit;text-decoration:underline dotted}.xtr-avatar{width:64px;height:64px;border-radius:50%;object-fit:cover;background:#eef3f9;display:flex;align-items:center;justify-content:center;font-size:26px;flex-shrink:0}";
  document.head.appendChild(css3);
  setTimeout(chargerVerifies, 2500);

  // ---- Auteurs
  var AUT = { liste: null, suivis: null };
  function vusAut() { return lsGet("jesus_aut_vus", {}); }
  function chargerAuteurs() {
    return Promise.all([
      AUT.liste ? Promise.resolve(AUT.liste) : appelServeur("getAuteurs").then(function (l) { AUT.liste = l || []; return AUT.liste; }, function () { return []; }),
      membreCourant ? appelServeur("mesAbonnements", code()).then(function (r) { AUT.suivis = r.auteurs || []; }, function () { AUT.suivis = []; }) : (AUT.suivis = [])
    ]);
  }
  function estSuivi(nom) { var c = cleAut(nom); return (AUT.suivis || []).some(function (a) { return cleAut(a.nom) === c; }); }
  X.auteur = function (nom) { S.aut = nom; afficherOnglet("communaute"); X.vue("auteur"); };
  X.suivre = function (nom, oui) {
    if (!besoinMembre()) return;
    appelServeur(oui ? "suivreAuteur" : "nePlusSuivreAuteur", code(), nom).then(function () {
      if (oui) { // ce qui existe déjà n'est pas une « nouveauté »
        var v = vusAut(); (BASE.d || []).forEach(function (x) { if (cleAut(x.s) === cleAut(nom)) v[x.k + ":" + x.id] = 1; }); lsSet("jesus_aut_vus", v);
      }
      window.chargerCommunaute();
    }, echec);
  };
  X.toutVu = function () {
    var v = vusAut(); (BASE.d || []).forEach(function (x) { v[x.k + ":" + x.id] = 1; }); lsSet("jesus_aut_vus", v); window.chargerCommunaute();
  };
  X.enregistrer({ id: "auteurs", label: "🧑‍🎤 Auteurs", rendre: function (z) {
    z.innerHTML = '<div class="card"><div class="loading">Chargement…</div></div>';
    Promise.all([chargerAuteurs(), chargerBase()]).then(function (r) {
      var liste = r[0][0] || [], base = r[1] || [], h = "";
      if (membreCourant && AUT.suivis.length) {
        var cles = AUT.suivis.map(function (a) { return cleAut(a.nom); }), vus = vusAut();
        var neufs = base.filter(function (x) { return x.k !== "evenement" && cles.indexOf(cleAut(x.s)) !== -1 && !vus[x.k + ":" + x.id]; });
        h += '<div class="card"><div class="evt-titre">🆕 Nouveautés de vos auteurs' + (neufs.length ? " (" + neufs.length + ")" : "") + "</div>" +
          (neufs.length ? neufs.slice(0, 30).map(function (x) {
            return '<div class="xtr-ligne"><div class="tt"><b>' + esc(x.t) + '</b><span class="item-desc">' + (NOMS_K[x.k] || "") + " · " + esc(x.s) + '</span></div><button class="small" onclick="XTR.ouvrir(\'' + x.k + "','" + esc(x.id) + "','" + jsq_(x.t) + '\')">Ouvrir</button></div>';
          }).join("") + '<button class="small secondary" style="margin-top:8px;" onclick="XTR.toutVu()">Tout marquer comme vu</button>' : '<p class="item-desc">Rien de nouveau pour le moment.</p>') + "</div>";
      } else if (!membreCourant) h += '<div class="card"><p class="item-desc">Connectez-vous pour suivre vos auteurs préférés et voir leurs nouveautés.</p></div>';
      h += '<div class="card"><div class="evt-titre">Tous les auteurs</div>' + (liste.length ? liste.map(function (a) {
        var photo = a.PhotoBase64 ? '<img class="xtr-avatar" style="width:46px;height:46px;" src="data:image/jpeg;base64,' + a.PhotoBase64 + '" alt="">' : '<div class="xtr-avatar" style="width:46px;height:46px;font-size:20px;">🧑‍🎤</div>';
        return '<div class="xtr-ligne" onclick="XTR.auteur(\'' + jsq_(a.Nom) + '\')" style="cursor:pointer;">' + photo + '<div class="tt"><b>' + esc(a.Nom) + X.badgeVerifie(cleAut(a.Nom)) + "</b>" + (estSuivi(a.Nom) ? '<span class="item-desc">✓ Suivi</span>' : "") + "</div></div>";
      }).join("") : '<p class="empty-state">Aucun auteur.</p>') + "</div>";
      z.innerHTML = h;
    });
  } });
  X.enregistrer({ id: "auteur", cachee: true, label: "Auteur", rendre: function (z) {
    var nom = S.aut; z.innerHTML = '<div class="card"><div class="loading">Chargement…</div></div>';
    Promise.all([chargerAuteurs(), chargerBase(), appelServeur("infosAuteur", membreCourant ? code() : null, nom).catch(function () { return { abonnes: 0, suivi: false }; })]).then(function (r) {
      var a = (r[0][0] || []).filter(function (x) { return cleAut(x.Nom) === cleAut(nom); })[0] || { Nom: nom }, info = r[2], c = cleAut(nom);
      var photo = a.PhotoBase64 ? '<img class="xtr-avatar" src="data:image/jpeg;base64,' + a.PhotoBase64 + '" alt="">' : '<div class="xtr-avatar">🧑‍🎤</div>';
      var suivi = membreCourant ? estSuivi(nom) : false;
      var h = '<button class="small secondary" onclick="XTR.vue(\'auteurs\')">← Auteurs</button><div class="card" style="margin-top:10px;"><div style="display:flex;gap:12px;align-items:center;">' + photo +
        '<div><div class="evt-titre" style="margin:0;">' + esc(a.Nom) + X.badgeVerifie(c) + '</div><div class="item-desc">' + info.abonnes + " abonné(s)</div></div></div>" +
        (a.Biographie ? '<p class="item-desc" style="white-space:pre-wrap;margin-top:10px;">' + esc(a.Biographie) + "</p>" : "") +
        '<button class="small ' + (suivi ? "secondary" : "") + '" style="margin-top:10px;" onclick="XTR.suivre(\'' + jsq_(nom) + "'," + (suivi ? "false" : "true") + ')">' + (suivi ? "✓ Suivi — ne plus suivre" : "➕ Suivre") + "</button></div>";
      ["audio", "video", "document"].forEach(function (k) {
        var l = r[1].filter(function (x) { return x.k === k && cleAut(x.s) === c; }); if (!l.length) return;
        h += '<div class="card"><div class="evt-titre">' + NOMS_K[k] + "</div>" + l.map(function (x) {
          return '<div class="xtr-ligne"><div class="tt"><b>' + esc(x.t) + '</b></div><button class="small" onclick="XTR.ouvrir(\'' + k + "','" + esc(x.id) + "','" + jsq_(x.t) + '\')">Ouvrir</button></div>';
        }).join("") + "</div>";
      });
      z.innerHTML = h;
    });
  } });

  // ---- Cellules
  S.cel = null;
  X.ouvrirCel = function (id) { S.cel = id; window.chargerCommunaute(); };
  X.fermerCel = function () { S.cel = null; window.chargerCommunaute(); };
  X.creerCel = function () {
    if (!besoinMembre()) return;
    appelServeur("creerCellule", code(), document.getElementById("clNom").value, document.getElementById("clVille").value, document.getElementById("clDesc").value, document.getElementById("clPays").value).then(function (r) { S.cel = r.id; window.chargerCommunaute(); }, echec);
  };
  X.rejoindre = function (id) { if (!besoinMembre()) return; appelServeur("rejoindreCellule", code(), id).then(function () { S.cel = id; window.chargerCommunaute(); }, echec); };
  X.quitter = function (id) { confirmerApp_("Quitter ce groupe ?", function () { appelServeur("quitterCellule", code(), id).then(function () { S.cel = null; window.chargerCommunaute(); }, echec); }); };
  X.supprimerCel = function (id) { confirmerApp_("Supprimer définitivement ce groupe et ses messages ?", function () { appelServeur("supprimerCellule", code(), id).then(function () { S.cel = null; window.chargerCommunaute(); }, echec); }); };
  X.postCel = function (id) {
    var t = document.getElementById("clMsg"), a = document.getElementById("clAnn");
    appelServeur("publierCellule", code(), id, t.value, !!(a && a.checked)).then(function () { window.chargerCommunaute(); }, echec);
  };
  X.supprMsgCel = function (id) { appelServeur("supprimerMsgCellule", code(), id).then(function () { window.chargerCommunaute(); }, echec); };
  X.retirerMembre = function (id, c) { confirmerApp_("Retirer ce membre du groupe ?", function () { appelServeur("retirerMembreCellule", code(), id, c).then(function () { window.chargerCommunaute(); }, echec); }); };
  X.enregistrer({ id: "cellules", label: "👥 Cellules", rendre: function (z) {
    z.innerHTML = '<div class="card"><div class="loading">Chargement…</div></div>';
    if (S.cel) {
      appelServeur("lireCellule", code(), S.cel).then(function (r) {
        var c = r.cellule, id = c.id;
        z.innerHTML = '<button class="small secondary" onclick="XTR.fermerCel()">← Cellules</button><div class="card" style="margin-top:10px;"><div class="evt-titre">' + esc(c.nom) + '</div><div class="item-desc">📍 ' + esc(c.ville) + " · " + c.nb + " membre(s) · Responsable : " + esc(c.responsable) + "</div>" +
          (c.description ? '<p class="item-desc">' + esc(c.description) + "</p>" : "") +
          '<button class="small secondary" onclick="' + (r.estResponsable ? "XTR.supprimerCel" : "XTR.quitter") + "('" + esc(id) + '\')">' + (r.estResponsable ? "🗑️ Supprimer le groupe" : "Quitter le groupe") + "</button></div>" +
          '<div class="card"><textarea id="clMsg" rows="2" maxlength="400" placeholder="Écrire au groupe…"></textarea>' +
          (r.estResponsable ? '<label style="display:flex;gap:8px;align-items:center;font-size:13px;margin:6px 0;"><input type="checkbox" id="clAnn" style="width:auto;"> 📢 Annonce (mise en avant)</label>' : "") +
          '<button onclick="XTR.postCel(\'' + esc(id) + '\')">Envoyer</button></div>' +
          '<div class="card">' + (r.messages.length ? r.messages.map(function (m) {
            return '<div class="xtr-post" style="' + (m.type === "Annonce" ? "background:#fff8e1;border-radius:10px;padding:10px;" : "") + '"><div class="evt-meta"><b>' + esc(m.nom) + "</b>" + (m.type === "Annonce" ? " · 📢 Annonce" : "") + " · " + esc(ilya(m.date)) + '</div><div class="tx">' + esc(m.texte) + "</div>" +
              ((membreCourant && m.auteur === code()) || r.estResponsable ? '<button class="small secondary" onclick="XTR.supprMsgCel(\'' + esc(m.id) + '\')">🗑️</button>' : "") + "</div>";
          }).join("") : '<p class="empty-state">Aucun message. Lancez la conversation !</p>') + "</div>" +
          (r.estResponsable && r.membres.length ? '<div class="card"><div class="evt-titre">Membres</div>' + r.membres.map(function (m) {
            return '<div class="xtr-ligne"><div class="tt">' + esc(m.nom) + "</div>" + (m.code !== code() ? '<button class="small secondary" onclick="XTR.retirerMembre(\'' + esc(id) + "','" + esc(m.code) + '\')">Retirer</button>' : "") + "</div>";
          }).join("") + "</div>" : "");
      }, function (e) { z.innerHTML = '<button class="small secondary" onclick="XTR.fermerCel()">← Cellules</button><div class="card"><p class="error">' + esc(e.message) + '</p><button class="small" onclick="XTR.rejoindre(\'' + esc(S.cel) + '\')">Rejoindre ce groupe</button></div>'; });
      return;
    }
    Promise.all([appelServeur("listerCellules"), membreCourant ? appelServeur("mesCellules", code()) : Promise.resolve({ cellules: [] })]).then(function (r) {
      var toutes = r[0].cellules || [], mes = r[1].cellules || [], mesIds = mes.map(function (c) { return c.id; });
      var ligne = function (c, rejoint) {
        return '<div class="xtr-ligne"><div class="tt"><b>' + esc(c.nom) + '</b><span class="item-desc">📍 ' + esc(c.ville) + ' · ' + c.nb + ' membre(s)</span></div>' +
          '<button class="small ' + (rejoint ? '' : 'secondary') + '" onclick="XTR.ouvrirCel(\'' + esc(c.id) + '\')">' + (rejoint ? 'Ouvrir' : 'Voir') + '</button></div>';
      };
      var h = '<div class="card"><p class="item-desc">Les cellules sont des petits groupes (ville, quartier, église, jeunes…) avec annonces et discussion.</p></div>';
      if (mes.length) h += '<div class="card"><div class="evt-titre">Mes cellules</div>' + mes.map(function (c) { return ligne(c, true); }).join("") + "</div>";
      var autres = toutes.filter(function (c) { return mesIds.indexOf(c.id) === -1; });
      h += '<div class="card"><div class="evt-titre">Découvrir</div><input type="search" id="clRech" placeholder="🔎 Ville ou nom…" oninput="XTR.filtrerCel()">' + '<div id="clListe">' + (autres.length ? autres.map(function (c) { return '<div class="xtr-cel" data-s="' + esc(norm(c.nom + " " + c.ville)) + '">' + ligne(c, false) + "</div>"; }).join("") : '<p class="empty-state">Aucun groupe pour le moment.</p>') + "</div></div>";
      h += membreCourant ? '<div class="card"><div class="evt-titre">➕ Créer une cellule</div><input id="clNom" maxlength="60" placeholder="Nom du groupe"><input id="clVille" maxlength="60" placeholder="Ville"><select id="clPays">' + PAYS.options(PAYS.code(), "🌍 Pays (facultatif)") + '</select><textarea id="clDesc" rows="2" maxlength="300" placeholder="Description (facultatif)"></textarea><button onclick="XTR.creerCel()">Créer</button></div>'
        : '<div class="card"><p class="item-desc">Connectez-vous pour rejoindre ou créer une cellule.</p></div>';
      z.innerHTML = h;
    }, function (e) { z.innerHTML = '<div class="card"><p class="error">' + esc(e.message) + "</p></div>"; });
  } });
  X.filtrerCel = function () {
    var q = norm(document.getElementById("clRech").value);
    document.querySelectorAll(".xtr-cel").forEach(function (el) { el.style.display = el.getAttribute("data-s").indexOf(q) !== -1 ? "" : "none"; });
  };

  // ---- Annuaire d'églises
  var EGL = { liste: [], q: "" };
  // Logo réduit en carré (144 px) pour rester léger
  function logoCarre(fichier) {
    return new Promise(function (ok, ko) {
      var r = new FileReader();
      r.onerror = function () { ko(new Error("Image illisible.")); };
      r.onload = function () {
        var im = new Image();
        im.onerror = function () { ko(new Error("Image illisible.")); };
        im.onload = function () {
          var c = document.createElement("canvas"); c.width = c.height = 144;
          var x = c.getContext("2d"); x.fillStyle = "#fff"; x.fillRect(0, 0, 144, 144);
          var t = Math.min(im.width, im.height);
          x.drawImage(im, (im.width - t) / 2, (im.height - t) / 2, t, t, 0, 0, 144, 144);
          var d = c.toDataURL("image/jpeg", 0.72);
          if (d.length > 38000) d = c.toDataURL("image/jpeg", 0.5);
          ok(d);
        };
        im.src = r.result;
      };
      r.readAsDataURL(fichier);
    });
  }
  X.logoCarre = logoCarre;
  function lienCarte(e) { if (e.localisation) return e.localisation; return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent([e.nom, e.adresse, e.ville, e.pays].filter(Boolean).join(", ")); }
  function carteEglise(e, modo) {
    return '<div class="evt-carte xtr-egl" style="margin-bottom:10px;" data-s="' + esc(norm(e.nom + " " + e.ville + " " + e.pays + " " + e.pasteur)) + '"><div class="evt-titre">' + (e.logo ? '<img src="' + esc(e.logo) + '" alt="" style="width:34px;height:34px;border-radius:9px;object-fit:cover;vertical-align:middle;margin-right:8px;">' : "⛪ ") + esc(e.nom) + '</div><div class="evt-meta">📍 ' + esc([e.adresse, e.ville, e.pays].filter(Boolean).join(", ")) + "</div>" +
      (e.pasteur ? '<div class="evt-meta">👤 ' + esc(e.pasteur) + "</div>" : "") + (e.horaires ? '<div class="evt-meta">🕒 ' + esc(e.horaires) + "</div>" : "") + (e.description ? '<p class="item-desc">' + esc(e.description) + "</p>" : "") +
      '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;"><a class="small-lien" href="' + lienCarte(e) + '" target="_blank" rel="noopener"><button class="small" type="button">🧭 Itinéraire</button></a>' +
      (e.telephone ? '<a href="tel:' + esc(e.telephone.replace(/[^+\d]/g, "")) + '"><button class="small secondary" type="button">📞 Appeler</button></a>' : "") +
      (e.lien ? '<a href="' + esc(e.lien) + '" target="_blank" rel="noopener"><button class="small secondary" type="button">🌐 Site</button></a>' : "") +
      (modo ? '<button class="small secondary" onclick="XTR.supprEglise(\'' + esc(e.id) + '\')">🗑️</button>' : "") + "</div></div>";
  }
  X.supprEglise = function (id) { confirmerApp_("Supprimer cette église de l'annuaire ?", function () { appelServeur("supprimerEglise", code(), id).then(function () { window.chargerCommunaute(); }, echec); }); };
  X.validerEgl = function (id, ok) { appelServeur("validerEglise", code(), id, ok).then(function () { window.chargerCommunaute(); }, echec); };
  X.filtrerEgl = function () {
    var q = norm(document.getElementById("eglQ").value);
    document.querySelectorAll(".xtr-egl[data-s]").forEach(function (el) { if (el.closest("#eglAtt")) return; el.style.display = el.getAttribute("data-s").indexOf(q) !== -1 ? "" : "none"; });
  };
  X.proposerEglise = function () {
    if (!besoinMembre()) return;
    var m = modalX('<div class="evt-titre">⛪ Proposer une église</div><input id="egN" maxlength="80" placeholder="Nom de l\'église *"><input id="egV" maxlength="60" placeholder="Ville *"><select id="egP">' + PAYS.liste.map(function (x) { return '<option value="' + x[1].replace(/"/g, "&quot;") + '"' + (x[0] === PAYS.code() ? " selected" : "") + ">" + PAYS.drapeau(x[0]) + " " + x[1] + "</option>"; }).join("") + '</select><input id="egA" maxlength="160" placeholder="Adresse / quartier"><label class="field-label">Localisation * (lien Google Maps, Waze… ou coordonnées)</label><input id="egLoc" maxlength="400" placeholder="https://maps.app.goo.gl/… ou 6.3703, 2.3912"><label class="field-label">Logo de l\'église *</label><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><img id="egLogoApercu" alt="" style="display:none;width:56px;height:56px;border-radius:12px;object-fit:cover;"><label class="file-btn-label" style="margin:0;">🖼️ Choisir le logo<input type="file" id="egLogoFic" accept="image/*" style="display:none;"></label></div><input id="egPa" maxlength="80" placeholder="Pasteur / responsable"><input id="egT" maxlength="30" placeholder="Téléphone de l\'église"><input id="egH" maxlength="200" placeholder="Horaires (ex. Dimanche 9h)"><input id="egL" maxlength="200" placeholder="Site ou page Facebook (https://…)"><textarea id="egD" rows="2" maxlength="300" placeholder="Description"></textarea><p class="item-desc">Ces informations seront visibles par tous les utilisateurs. N\'indiquez que des coordonnées d\'église.</p><button id="egOk">Envoyer</button> <button class="secondary" id="egKo">Annuler</button>');
    var g = function (i) { return m.el.querySelector("#" + i).value; };
    m.el.querySelector("#egKo").onclick = m.close;
    var logoDonnees = "";
    m.el.querySelector("#egLogoFic").onchange = function () {
      var f = this.files[0]; if (!f) return;
      logoCarre(f).then(function (d) { logoDonnees = d; var im = m.el.querySelector("#egLogoApercu"); im.src = d; im.style.display = "block"; }, echec);
    };
    m.el.querySelector("#egOk").onclick = function () {
      if (!g("egLoc").trim()) { alert("Ajoutez la localisation de l'église (lien Google Maps ou autre)."); return; }
      if (!logoDonnees) { alert("Ajoutez le logo de l'église."); return; }
      appelServeur("proposerEglise", code(), { localisation: g("egLoc"), logo: logoDonnees, nom: g("egN"), ville: g("egV"), pays: g("egP"), adresse: g("egA"), pasteur: g("egPa"), telephone: g("egT"), horaires: g("egH"), lien: g("egL"), description: g("egD") })
        .then(function (r) { m.close(); alert(r.publie ? "Église ajoutée à l'annuaire." : "Merci ! Votre proposition sera publiée après vérification par l'équipe."); window.chargerCommunaute(); }, echec);
    };
  };
  X.enregistrer({ id: "eglises", label: "⛪ Églises", rendre: function (z) {
    z.innerHTML = '<div class="card"><div class="loading">Chargement…</div></div>';
    var modo = estAdminContenus();
    Promise.all([appelServeur("listerEglises"), modo ? appelServeur("eglisesAModerer", code()) : Promise.resolve({ eglises: [] })]).then(function (r) {
      var l = r[0].eglises || [], att = r[1].eglises || [];
      var h = '<div class="card"><input type="search" id="eglQ" placeholder="🔎 Ville, nom d\'église, pasteur…" oninput="XTR.filtrerEgl()"><button class="small" onclick="XTR.proposerEglise()">➕ Proposer une église</button></div>';
      if (att.length) h += '<div class="card" id="eglAtt"><div class="evt-titre">⏳ À valider (' + att.length + ")</div>" + att.map(function (e) { return carteEglise(e, false).replace(/<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;">/, '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:8px;"><button class="small" onclick="XTR.validerEgl(\'' + esc(e.id) + '\',true)">✓ Publier</button><button class="small secondary" onclick="XTR.validerEgl(\'' + esc(e.id) + '\',false)">✕ Refuser</button>'); }).join("") + "</div>";
      h += l.length ? l.map(function (e) { return carteEglise(e, modo); }).join("") : '<div class="card"><p class="empty-state">Aucune église dans l\'annuaire pour le moment.</p></div>';
      z.innerHTML = h;
    }, function (e) { z.innerHTML = '<div class="card"><p class="error">' + esc(e.message) + "</p></div>"; });
  } });

  // ---- Administration des comptes vérifiés
  X.ajouterVerifie = function () {
    appelServeur("ajouterVerifie", code(), document.getElementById("vfType").value, document.getElementById("vfVal").value).then(function () { return chargerVerifies(); }).then(function () { window.chargerCommunaute(); }, echec);
  };
  X.retirerVerifie = function (cle) { appelServeur("retirerVerifie", code(), cle).then(function () { return chargerVerifies(); }).then(function () { window.chargerCommunaute(); }, echec); };
  X.enregistrer({ id: "verifies", label: "✔ Vérifiés", visible: estAdminContenus, rendre: function (z) {
    appelServeur("adminVerifies", code()).then(function (r) {
      z.innerHTML = '<div class="card"><div class="evt-titre">✔ Comptes vérifiés</div><p class="item-desc">Le badge apparaît à côté du nom d\'un auteur (sur ses contenus) ou d\'un organisateur d\'événements.</p>' +
        '<select id="vfType"><option value="auteur">Auteur (nom exact)</option><option value="membre">Membre / organisateur (code)</option></select><input id="vfVal" maxlength="80" placeholder="Nom de l\'auteur ou code du membre"><button class="small" onclick="XTR.ajouterVerifie()">Ajouter le badge</button></div>' +
        '<div class="card">' + (r.verifies.length ? r.verifies.map(function (v) { return '<div class="xtr-ligne"><div class="tt"><b>' + esc(v.nom) + ' <span class="xtr-verif">✔</span></b><span class="item-desc">' + (v.type === "membre" ? "Membre" : "Auteur") + '</span></div><button class="small secondary" onclick="XTR.retirerVerifie(\'' + esc(v.cle) + '\')">Retirer</button></div>'; }).join("") : '<p class="empty-state">Aucun compte vérifié.</p>') + "</div>";
    }, function (e) { z.innerHTML = '<div class="card"><p class="error">' + esc(e.message) + "</p></div>"; });
  } });

  // ======================================================================= LOT 4
  // Liens partagés (événement + parrainage), promos, parrainage, dons mensuels, reçus
  function urlPage() { return location.origin + location.pathname; }
  // 1) Arrivée par un lien : ?e=<événement>&c=<canal> et/ou ?ref=<code parrain>
  (function lireLien() {
    try {
      var q = new URLSearchParams(location.search), e = q.get("e"), c = q.get("c"), ref = q.get("ref");
      if (ref && /^[A-Za-z0-9-]{4,40}$/.test(ref)) localStorage.setItem("jesus_ref", ref);
      if (e && /^[A-Za-z0-9_-]{3,60}$/.test(e)) {
        c = ["whatsapp", "facebook", "sms", "lien"].indexOf(c) !== -1 ? c : "autre";
        sessionStorage.setItem("jesus_ouvrir_evt", e);
        localStorage.setItem("jesus_part_" + e, JSON.stringify({ c: c, t: Date.now() }));
        if (!localStorage.getItem("jesus_pv_" + e)) { localStorage.setItem("jesus_pv_" + e, "1"); appelServeur("compterPartage", e, c).catch(function () {}); }
      }
      if (e || ref) history.replaceState(null, "", location.pathname);
    } catch (x) { /* navigation privée : sans effet */ }
  })();
  // Ouvre l'événement du lien dès que la personne est entrée dans l'application ; enregistre le parrain après la connexion.
  setInterval(function () {
    try {
      if (document.querySelector(".auth-screen.active") || !document.getElementById("topbar") || document.getElementById("topbar").style.display === "none") return;
      var e = sessionStorage.getItem("jesus_ouvrir_evt");
      if (e) { sessionStorage.removeItem("jesus_ouvrir_evt"); afficherOnglet("evenements"); setTimeout(function () { EVT.ouvrir(e); }, 500); }
      var ref = localStorage.getItem("jesus_ref");
      if (ref && membreCourant) { localStorage.removeItem("jesus_ref"); appelServeur("enregistrerParrain", code(), ref).catch(function () {}); }
    } catch (x) { /* ignoré */ }
  }, 1200);
  X.lienEvenement = function (id, canal) { return urlPage() + "?e=" + encodeURIComponent(id) + "&c=" + canal; };
  X.partagerEvt = function (id, titre, canal) {
    var url = X.lienEvenement(id, canal), txt = "🎫 " + titre + "\n" + url;
    if (canal === "whatsapp") window.open("https://wa.me/?text=" + encodeURIComponent(txt), "_blank");
    else if (canal === "facebook") window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url), "_blank");
    else if (canal === "sms") location.href = "sms:?&body=" + encodeURIComponent(txt);
    else if (navigator.clipboard) navigator.clipboard.writeText(url).then(function () { alert("Lien copié !"); }, function () { prompt("Copiez ce lien :", url); });
    else prompt("Copiez ce lien :", url);
  };
  // Lecteur intégré d'un direct / d'une rediffusion (YouTube, Facebook) ; autre lien : simple bouton.
  X.integrer = function (url) {
    var m = String(url || "").match(/(?:youtube\.com\/(?:watch\?(?:.*&)?v=|live\/|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,20})/);
    if (m) return "https://www.youtube-nocookie.com/embed/" + m[1];
    if (/^https:\/\/(www\.|m\.|fb\.)?facebook\.com\//i.test(url) || /^https:\/\/fb\.watch\//i.test(url)) return "https://www.facebook.com/plugins/video.php?show_text=false&href=" + encodeURIComponent(url);
    var v = String(url || "").match(/^https:\/\/(?:www\.)?vimeo\.com\/(\d{5,12})/);
    if (v) return "https://player.vimeo.com/video/" + v[1];
    return "";
  };
  X.blocDirect = function (e) {
    if (!e.lienDirect && !e.lienReplay) return "";
    var un = function (titre, url) {
      var emb = X.integrer(url);
      return '<div class="card"><div class="evt-titre">' + titre + "</div>" + (emb ? '<div style="position:relative;padding-top:56.25%;border-radius:12px;overflow:hidden;background:#000;"><iframe src="' + esc(emb) + '" style="position:absolute;inset:0;width:100%;height:100%;border:0;" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe></div>' : "") +
        '<a href="' + esc(url) + '" target="_blank" rel="noopener"><button class="small secondary" type="button" style="margin-top:8px;">↗ Ouvrir dans un nouvel onglet</button></a></div>';
    };
    return (e.lienDirect ? un("🔴 En direct", e.lienDirect) : "") + (e.lienReplay ? un("▶️ Rediffusion", e.lienReplay) : "");
  };
  X.blocPartage = function (e) {
    var t = jsq_(e.titre), i = jsq_(e.id);
    return '<div class="card"><div class="evt-titre">📤 Partager cet événement</div><div style="display:flex;gap:6px;flex-wrap:wrap;">' +
      ["whatsapp:💬 WhatsApp", "facebook:📘 Facebook", "sms:✉️ SMS", "lien:🔗 Copier le lien"].map(function (x) { var p = x.split(":"); return '<button class="small secondary" style="width:auto;" onclick="XTR.partagerEvt(\'' + i + "','" + t + "','" + p[0] + '\')">' + p[1] + "</button>"; }).join("") + "</div></div>";
  };
  X.sourcePartage = function (idEvt) {
    try { var s = JSON.parse(localStorage.getItem("jesus_part_" + idEvt) || "null"); return s && Date.now() - s.t < 7 * 86400000 ? s.c : ""; } catch (x) { return ""; }
  };
  X.statsPartage = function (r) {
    if (!(r.partages || []).length && !Object.keys(r.conversions || {}).length) return "";
    var noms = { whatsapp: "WhatsApp", facebook: "Facebook", sms: "SMS", lien: "Lien copié", autre: "Autre" };
    return '<p class="field-label" style="margin-top:12px;">📤 Partages</p>' + r.partages.map(function (p) {
      return '<div class="item-desc">' + esc(noms[p.canal] || p.canal) + " — " + p.visites + " visite(s) · " + ((r.conversions || {})[p.canal] || 0) + " billet(s) pris</div>";
    }).join("");
  };
  // Notifier les porteurs de billets + WhatsApp individuel
  X.notifierPorteurs = function (id) {
    var m = prompt("Message de rappel aux participants (laisser vide pour le message par défaut) :", "");
    if (m === null) return;
    var env = 0, boucle = function (debut) {
      return appelServeur("rappelerParticipants", code(), id, m, debut).then(function (r) { env += r.envoyes; return r.suivant != null ? boucle(r.suivant) : env; });
    };
    boucle(0).then(function (n) { alert(n + " notification(s) envoyée(s) (aux participants ayant activé les notifications)."); }, echec);
  };
  X.lienWhatsApp = function (tel, texte) {
    var n = String(tel || "").replace(/[^\d]/g, ""); if (n.length < 8) return "";
    return "https://wa.me/" + n + "?text=" + encodeURIComponent(texte || "");
  };

  // 2) Codes promo
  var NOMS_PORTEE = { tout: "Tout", billet: "Billets", document: "Documents", audio: "Audios", video: "Vidéos" };
  X.creerPromo = function () {
    var v = function (i) { return document.getElementById(i).value; }, ev = document.getElementById("prEvt");
    appelServeur("creerPromo", code(), { code: v("prCode"), type: v("prType"), valeur: v("prVal"), max: v("prMax"), expire: v("prExp"), evenementId: ev ? ev.value : "", portee: document.getElementById("prPortee") ? v("prPortee") : "billet" })
      .then(function () { window.chargerCommunaute(); }, echec);
  };
  X.basculerPromo = function (c) { appelServeur("basculerPromo", code(), c).then(function () { window.chargerCommunaute(); }, echec); };
  X.supprimerPromo = function (c) { confirmerApp_("Supprimer ce code promo ?", function () { appelServeur("supprimerPromo", code(), c).then(function () { window.chargerCommunaute(); }, echec); }); };
  X.enregistrer({ id: "promos", label: "🏷️ Promos", visible: function () { return !!membreCourant; }, rendre: function (z) {
    z.innerHTML = '<div class="card"><div class="loading">Chargement…</div></div>';
    var modo = estAdminContenus() || (permissionsDe_(membreCourant).indexOf("evenements") !== -1);
    Promise.all([appelServeur("getMesEvenements", code()), appelServeur("mesPromos", code())]).then(function (r) {
      var org = r[0].organisateur, evts = r[0].evenements || [], promos = r[1].promos || [];
      if (!org && !modo) { z.innerHTML = '<div class="card"><p class="item-desc">Les codes promo sont réservés aux organisateurs d\'événements et à l\'équipe.</p></div>'; return; }
      z.innerHTML = '<div class="card"><div class="evt-titre">🏷️ Créer un code promo</div><input id="prCode" maxlength="20" placeholder="CODE (ex. NOEL20)" style="text-transform:uppercase;">' +
        '<div class="evt-2col"><select id="prType"><option value="pourcent">Réduction en %</option><option value="montant">Réduction en FCFA</option></select><input id="prVal" type="number" min="1" placeholder="Valeur"></div>' +
        '<div class="evt-2col"><input id="prMax" type="number" min="0" placeholder="Utilisations max (0 = illimité)"><input id="prExp" type="date" title="Date limite"></div>' +
        '<select id="prEvt"><option value="">' + (modo ? "Toute la plateforme" : "— Choisir l'événement —") + "</option>" + evts.map(function (e) { return '<option value="' + esc(e.id) + '">' + esc(e.titre) + "</option>"; }).join("") + "</select>" +
        (modo ? '<select id="prPortee"><option value="tout">Tout (si aucun événement choisi)</option><option value="billet">Billets</option><option value="document">Documents</option><option value="audio">Audios</option><option value="video">Vidéos</option></select>' : "") +
        '<button onclick="XTR.creerPromo()">Créer</button><p class="item-desc">Chaque membre ne peut utiliser un code qu\'une fois. Le code se saisit dans le panier ou sur la page de l\'événement.</p></div>' +
        '<div class="card"><div class="evt-titre">Mes codes</div>' + (promos.length ? promos.map(function (p) {
          return '<div class="xtr-ligne"><div class="tt"><b>' + esc(p.code) + "</b><span class=\"item-desc\">-" + p.valeur + (p.type === "pourcent" ? " %" : " F") + " · " + esc(NOMS_PORTEE[p.portee] || p.portee) + " · " + p.utilisations + (p.max ? "/" + p.max : "") + " util." + (p.expire ? " · jusqu'au " + esc(p.expire) : "") + (p.actif ? "" : " · ⏸ désactivé") + '</span></div><button class="small secondary" onclick="XTR.basculerPromo(\'' + esc(p.code) + '\')">' + (p.actif ? "Pause" : "Activer") + '</button><button class="small secondary" onclick="XTR.supprimerPromo(\'' + esc(p.code) + '\')">🗑️</button></div>';
        }).join("") : '<p class="empty-state">Aucun code.</p>') + "</div>";
    }, function (e) { z.innerHTML = '<div class="card"><p class="error">' + esc(e.message) + "</p></div>"; });
  } });

  // 3) Parrainage
  X.copierParrain = function () {
    var url = urlPage() + "?ref=" + encodeURIComponent(code());
    if (navigator.share) navigator.share({ title: "JESUS — Réveil Chrétien", text: "Rejoins-moi sur l'application JESUS :", url: url }).catch(function () {});
    else if (navigator.clipboard) navigator.clipboard.writeText(url).then(function () { alert("Lien copié !"); }, function () { prompt("Copiez ce lien :", url); });
    else prompt("Copiez ce lien :", url);
  };
  X.whatsappParrain = function () { window.open("https://wa.me/?text=" + encodeURIComponent("Rejoins-moi sur l'application JESUS — Réveil Chrétien : " + urlPage() + "?ref=" + encodeURIComponent(code())), "_blank"); };
  X.enregistrer({ id: "parrainage", label: "🎁 Parrainage", visible: function () { return !!membreCourant; }, rendre: function (z) {
    z.innerHTML = '<div class="card"><div class="loading">Chargement…</div></div>';
    appelServeur("monParrainage", code()).then(function (r) {
      z.innerHTML = '<div class="card"><div class="evt-titre">🎁 Invitez vos proches</div><p class="item-desc">Partagez votre lien personnel : chaque nouveau membre qui s\'inscrit avec ce lien compte comme votre filleul.</p>' +
        '<div class="xtr-serie"><div class="n">' + r.filleuls + '</div><div><b>filleul(s)</b>' + (r.prochain ? '<div class="item-desc">Prochain badge à ' + r.prochain + "</div>" : "") + "</div></div>" +
        (r.badges.length ? '<div class="xtr-badges">' + r.badges.map(function (b) { return '<span class="xtr-badge">' + esc(b.ic) + " " + esc(b.nom) + "</span>"; }).join("") + "</div>" : "") +
        '<div class="xtr-actions"><button onclick="XTR.whatsappParrain()">💬 Inviter sur WhatsApp</button><button class="secondary" onclick="XTR.copierParrain()">🔗 Partager mon lien</button></div></div>';
    }, function (e) { z.innerHTML = '<div class="card"><p class="error">' + esc(e.message) + "</p></div>"; });
  } });

  // 4) Dons mensuels
  X.engager = function (id, nom) {
    var def = document.getElementById("dm-" + id).value;
    appelServeur("definirEngagement", code(), id, nom, def).then(function () { window.chargerCommunaute(); }, echec);
  };
  X.retirerEng = function (id) { confirmerApp_("Arrêter cet engagement mensuel ?", function () { appelServeur("retirerEngagement", code(), id).then(function () { window.chargerCommunaute(); }, echec); }); };
  X.rappelerEngages = function () {
    var env = 0, rap = 0, s = document.getElementById("dmEtat");
    var boucle = function (debut) {
      s.textContent = "Envoi… " + env + " notification(s)";
      return appelServeur("rappelerEngages", code(), debut).then(function (r) { env += r.envoyes; rap += r.rappeles; return r.suivant != null ? boucle(r.suivant) : null; });
    };
    boucle(0).then(function () { s.textContent = "✅ " + rap + " engagé(s) à relancer, " + env + " notification(s) envoyée(s)."; }, function (e) { s.textContent = "Erreur : " + e.message; });
  };
  X.enregistrer({ id: "dons", label: "💝 Dons mensuels", visible: function () { return !!membreCourant; }, rendre: function (z) {
    z.innerHTML = '<div class="card"><div class="loading">Chargement…</div></div>';
    var p = permissionsDe_(membreCourant), fin = p.indexOf("finances") !== -1 || p.indexOf("systeme") !== -1;
    Promise.all([appelServeur("getTypesCotisation"), appelServeur("mesEngagements", code()), fin ? appelServeur("statEngagements", code()) : Promise.resolve(null)]).then(function (r) {
      var types = r[0] || [], mes = r[1].engagements || [], ids = mes.map(function (e) { return e.typeId; });
      var h = '<div class="card"><p class="item-desc">Engagez-vous à donner chaque mois pour une collecte. Chaque mois, vous donnez en un clic ; vous pouvez recevoir un rappel si vous avez activé les notifications.</p></div>';
      if (mes.length) h += '<div class="card"><div class="evt-titre">Mes engagements</div>' + mes.map(function (e) {
        return '<div class="xtr-ligne"><div class="tt"><b>' + esc(e.nom) + "</b><span class=\"item-desc\">" + Number(e.montant).toLocaleString("fr-FR") + " F / mois · " + (e.aJour ? "✅ donné ce mois-ci" : "⏳ pas encore ce mois-ci") + '</span></div>' +
          (e.aJour ? "" : '<button class="small" onclick="afficherOnglet(\'cotisation\')">Donner</button>') + '<button class="small secondary" onclick="XTR.retirerEng(\'' + esc(e.typeId) + '\')">✕</button></div>';
      }).join("") + "</div>";
      var dispo = types.filter(function (t) { return ids.indexOf(t.ID) === -1; });
      h += '<div class="card"><div class="evt-titre">S\'engager sur une collecte</div>' + (dispo.length ? dispo.map(function (t) {
        return '<div class="xtr-ligne"><div class="tt"><b>' + esc(t.Nom) + '</b></div><input id="dm-' + esc(t.ID) + '" type="number" min="100" value="' + Number(t.Montant || 1000) + '" style="width:100px;margin:0;"><button class="small" onclick="XTR.engager(\'' + esc(t.ID) + "','" + jsq_(t.Nom) + '\')">S\'engager</button></div>';
      }).join("") : '<p class="empty-state">Aucune collecte disponible.</p>') + "</div>";
      if (fin && r[2]) h += '<div class="card"><div class="evt-titre">⚙ Équipe finances</div><p class="item-desc">' + r[2].total + " engagement(s) actif(s) · " + Number(r[2].montantMensuel).toLocaleString("fr-FR") + ' F attendus par mois.</p><button class="small" onclick="XTR.rappelerEngages()">🔔 Rappeler ceux qui n\'ont pas donné ce mois-ci</button><p id="dmEtat" class="item-desc"></p></div>';
      z.innerHTML = h;
    }, function (e) { z.innerHTML = '<div class="card"><p class="error">' + esc(e.message) + "</p></div>"; });
  } });

  // 5) Reçus des achats (billets, panier) : impression / PDF
  var RECUS = [];
  X.recu = function (i) {
    var r = RECUS[i], mem = X.membreRecu || {}; if (!r) return;
    var w = window.open("", "_blank"); if (!w) { alert("Autorisez les fenêtres pop-up pour imprimer le reçu."); return; }
    var d = r.date ? new Date(r.date).toLocaleString("fr-FR") : "";
    w.document.write('<!doctype html><meta charset="utf-8"><title>Reçu ' + esc(r.id) + '</title><style>body{font-family:Arial,sans-serif;max-width:520px;margin:24px auto;padding:0 16px;color:#1b2430}h1{color:#0b2f68;margin:0}table{width:100%;border-collapse:collapse;margin:14px 0}td,th{padding:8px;border-bottom:1px solid #dfe6f0;text-align:left;font-size:14px}.t{font-size:24px;font-weight:800;color:#0b2f68;text-align:center;margin:16px 0}small{color:#5b6b82}</style>' +
      "<h1>JESUS — Réveil Chrétien</h1><p><b>Reçu d'achat</b><br><small>N° " + esc(r.id) + " · " + esc(d) + "</small></p><p>Membre : " + esc(mem.nom || "") + " (" + esc(mem.code || "") + ")<br>Objet : " + esc(r.libelle) + (r.transactionId ? "<br>Référence de paiement : " + esc(r.transactionId) : "") + "</p>" +
      "<table><tr><th>Article</th><th>Qté</th><th>Prix</th></tr>" + r.lignes.map(function (l) { return "<tr><td>" + esc(l.nom) + "</td><td>" + l.quantite + "</td><td>" + Number(l.prix).toLocaleString("fr-FR") + " F</td></tr>"; }).join("") + "</table>" +
      (r.reduction ? "<p>Code promo " + esc(r.promo) + " : −" + Number(r.reduction).toLocaleString("fr-FR") + " F</p>" : "") +
      '<div class="t">' + Number(r.montant).toLocaleString("fr-FR") + ' FCFA</div><p style="text-align:center"><small>Merci. Conservez ce reçu comme preuve de paiement.</small></p><script>window.onload=function(){setTimeout(function(){window.print()},300)}<\/script>');
    w.document.close();
  };
  X.enregistrer({ id: "recus", label: "🧾 Mes reçus", visible: function () { return !!membreCourant; }, rendre: function (z) {
    z.innerHTML = '<div class="card"><div class="loading">Chargement…</div></div>';
    appelServeur("mesRecus", code()).then(function (r) {
      RECUS = r.recus || []; X.membreRecu = r.membre;
      z.innerHTML = '<div class="card"><p class="item-desc">Reçus de vos achats de billets et du panier. Pour les collectes et offrandes, utilisez « Voir » dans l\'historique de la rubrique.</p></div>' +
        '<div class="card">' + (RECUS.length ? RECUS.map(function (x, i) {
          return '<div class="xtr-ligne"><div class="tt"><b>' + esc(x.libelle) + "</b><span class=\"item-desc\">" + esc(x.date ? new Date(x.date).toLocaleDateString("fr-FR") : "") + " · " + Number(x.montant).toLocaleString("fr-FR") + ' F</span></div><button class="small" onclick="XTR.recu(' + i + ')">🖨️ Reçu / PDF</button></div>';
        }).join("") : '<p class="empty-state">Aucun achat payé pour le moment.</p>') + "</div>";
    }, function (e) { z.innerHTML = '<div class="card"><p class="error">' + esc(e.message) + "</p></div>"; });
  } });

  // ===== FIN VUES =====
})();

</script>
<script>
/* ===== PAYS : choix du pays (en-tête), filtrage des contenus, langue automatique ===== */
(function () {
  "use strict";
  var LISTE = [
    ["DZ","Algérie","ar",1],
    ["AO","Angola","pt",1],
    ["BJ","Bénin","fr",1],
    ["BW","Botswana","en",1],
    ["BF","Burkina Faso","fr",1],
    ["BI","Burundi","fr",1],
    ["CV","Cap-Vert","pt",1],
    ["CM","Cameroun","fr",1],
    ["CF","Centrafrique","fr",1],
    ["TD","Tchad","fr",1],
    ["KM","Comores","fr",1],
    ["CG","Congo-Brazzaville","fr",1],
    ["CD","RD Congo","fr",1],
    ["CI","Côte d'Ivoire","fr",1],
    ["DJ","Djibouti","fr",1],
    ["EG","Égypte","ar",1],
    ["GQ","Guinée équatoriale","es",1],
    ["ER","Érythrée","ti",1],
    ["SZ","Eswatini","en",1],
    ["ET","Éthiopie","am",1],
    ["GA","Gabon","fr",1],
    ["GM","Gambie","en",1],
    ["GH","Ghana","en",1],
    ["GN","Guinée","fr",1],
    ["GW","Guinée-Bissau","pt",1],
    ["KE","Kenya","en",1],
    ["LS","Lesotho","st",1],
    ["LR","Libéria","en",1],
    ["LY","Libye","ar",1],
    ["MG","Madagascar","mg",1],
    ["MW","Malawi","ny",1],
    ["ML","Mali","fr",1],
    ["MR","Mauritanie","ar",1],
    ["MU","Maurice","fr",1],
    ["MA","Maroc","ar",1],
    ["MZ","Mozambique","pt",1],
    ["NA","Namibie","en",1],
    ["NE","Niger","fr",1],
    ["NG","Nigéria","en",1],
    ["RW","Rwanda","rw",1],
    ["ST","Sao Tomé-et-Principe","pt",1],
    ["SN","Sénégal","fr",1],
    ["SC","Seychelles","fr",1],
    ["SL","Sierra Leone","en",1],
    ["SO","Somalie","so",1],
    ["ZA","Afrique du Sud","en",1],
    ["SS","Soudan du Sud","en",1],
    ["SD","Soudan","ar",1],
    ["TZ","Tanzanie","sw",1],
    ["TG","Togo","fr",1],
    ["TN","Tunisie","ar",1],
    ["UG","Ouganda","en",1],
    ["ZM","Zambie","en",1],
    ["ZW","Zimbabwe","en",1],
    ["AL","Albanie","sq",0],
    ["AD","Andorre","ca",0],
    ["DE","Allemagne","de",0],
    ["AT","Autriche","de",0],
    ["BE","Belgique","fr",0],
    ["BY","Biélorussie","be",0],
    ["BA","Bosnie-Herzégovine","bs",0],
    ["BG","Bulgarie","bg",0],
    ["CY","Chypre","el",0],
    ["HR","Croatie","hr",0],
    ["DK","Danemark","da",0],
    ["ES","Espagne","es",0],
    ["EE","Estonie","et",0],
    ["FI","Finlande","fi",0],
    ["FR","France","fr",0],
    ["GR","Grèce","el",0],
    ["HU","Hongrie","hu",0],
    ["IE","Irlande","en",0],
    ["IS","Islande","is",0],
    ["IT","Italie","it",0],
    ["LV","Lettonie","lv",0],
    ["LI","Liechtenstein","de",0],
    ["LT","Lituanie","lt",0],
    ["LU","Luxembourg","fr",0],
    ["MK","Macédoine du Nord","mk",0],
    ["MT","Malte","mt",0],
    ["MD","Moldavie","ro",0],
    ["MC","Monaco","fr",0],
    ["ME","Monténégro","sr",0],
    ["NO","Norvège","no",0],
    ["NL","Pays-Bas","nl",0],
    ["PL","Pologne","pl",0],
    ["PT","Portugal","pt",0],
    ["CZ","Tchéquie","cs",0],
    ["RO","Roumanie","ro",0],
    ["GB","Royaume-Uni","en",0],
    ["RU","Russie","ru",0],
    ["SM","Saint-Marin","it",0],
    ["RS","Serbie","sr",0],
    ["SK","Slovaquie","sk",0],
    ["SI","Slovénie","sl",0],
    ["SE","Suède","sv",0],
    ["CH","Suisse","fr",0],
    ["UA","Ukraine","uk",0],
    ["VA","Vatican","it",0],
    ["AG","Antigua-et-Barbuda","en",0],
    ["AR","Argentine","es",0],
    ["BS","Bahamas","en",0],
    ["BB","Barbade","en",0],
    ["BZ","Belize","en",0],
    ["BO","Bolivie","es",0],
    ["BR","Brésil","pt",0],
    ["CA","Canada","en",0],
    ["CL","Chili","es",0],
    ["CO","Colombie","es",0],
    ["CR","Costa Rica","es",0],
    ["CU","Cuba","es",0],
    ["DM","Dominique","en",0],
    ["DO","République dominicaine","es",0],
    ["EC","Équateur","es",0],
    ["US","États-Unis","en",0],
    ["GD","Grenade","en",0],
    ["GT","Guatemala","es",0],
    ["GY","Guyana","en",0],
    ["HT","Haïti","fr",0],
    ["HN","Honduras","es",0],
    ["JM","Jamaïque","en",0],
    ["MX","Mexique","es",0],
    ["NI","Nicaragua","es",0],
    ["PA","Panama","es",0],
    ["PY","Paraguay","es",0],
    ["PE","Pérou","es",0],
    ["KN","Saint-Christophe-et-Niévès","en",0],
    ["LC","Sainte-Lucie","en",0],
    ["VC","Saint-Vincent-et-les-Grenadines","en",0],
    ["SV","Salvador","es",0],
    ["SR","Suriname","nl",0],
    ["TT","Trinité-et-Tobago","en",0],
    ["UY","Uruguay","es",0],
    ["VE","Venezuela","es",0],
    ["AF","Afghanistan","fa",0],
    ["SA","Arabie saoudite","ar",0],
    ["AM","Arménie","hy",0],
    ["AZ","Azerbaïdjan","az",0],
    ["BH","Bahreïn","ar",0],
    ["BD","Bangladesh","bn",0],
    ["BT","Bhoutan","en",0],
    ["BN","Brunéi","ms",0],
    ["KH","Cambodge","km",0],
    ["CN","Chine","zh-CN",0],
    ["KR","Corée du Sud","ko",0],
    ["KP","Corée du Nord","ko",0],
    ["AE","Émirats arabes unis","ar",0],
    ["GE","Géorgie","ka",0],
    ["IN","Inde","hi",0],
    ["ID","Indonésie","id",0],
    ["IQ","Irak","ar",0],
    ["IR","Iran","fa",0],
    ["IL","Israël","iw",0],
    ["JP","Japon","ja",0],
    ["JO","Jordanie","ar",0],
    ["KZ","Kazakhstan","kk",0],
    ["KG","Kirghizistan","ky",0],
    ["KW","Koweït","ar",0],
    ["LA","Laos","lo",0],
    ["LB","Liban","ar",0],
    ["MY","Malaisie","ms",0],
    ["MV","Maldives","en",0],
    ["MN","Mongolie","mn",0],
    ["MM","Birmanie","my",0],
    ["NP","Népal","ne",0],
    ["OM","Oman","ar",0],
    ["UZ","Ouzbékistan","uz",0],
    ["PK","Pakistan","ur",0],
    ["PS","Palestine","ar",0],
    ["PH","Philippines","tl",0],
    ["QA","Qatar","ar",0],
    ["SG","Singapour","en",0],
    ["LK","Sri Lanka","si",0],
    ["SY","Syrie","ar",0],
    ["TJ","Tadjikistan","tg",0],
    ["TW","Taïwan","zh-TW",0],
    ["TH","Thaïlande","th",0],
    ["TL","Timor oriental","pt",0],
    ["TM","Turkménistan","tk",0],
    ["TR","Turquie","tr",0],
    ["VN","Vietnam","vi",0],
    ["YE","Yémen","ar",0],
    ["AU","Australie","en",0],
    ["FJ","Fidji","en",0],
    ["KI","Kiribati","en",0],
    ["MH","Îles Marshall","en",0],
    ["FM","Micronésie","en",0],
    ["NR","Nauru","en",0],
    ["NZ","Nouvelle-Zélande","en",0],
    ["PW","Palaos","en",0],
    ["PG","Papouasie-Nouvelle-Guinée","en",0],
    ["WS","Samoa","en",0],
    ["SB","Îles Salomon","en",0],
    ["TO","Tonga","en",0],
    ["TV","Tuvalu","en",0],
    ["VU","Vanuatu","en",0]
  ].sort(function (a, b) { return a[1].localeCompare(b[1], "fr"); });
  var NOMS_LANGUES = { de: "Deutsch", it: "Italiano", nl: "Nederlands", ru: "Русский", "zh-CN": "中文", "zh-TW": "中文 (繁體)", ja: "日本語", ko: "한국어", hi: "हिन्दी", tr: "Türkçe", pl: "Polski", uk: "Українська", el: "Ελληνικά", sv: "Svenska", no: "Norsk", da: "Dansk", fi: "Suomi", cs: "Čeština", hu: "Magyar", ro: "Română", bg: "Български", sr: "Српски", hr: "Hrvatski", sk: "Slovenčina", sl: "Slovenščina", lt: "Lietuvių", lv: "Latviešu", et: "Eesti", iw: "עברית", fa: "فارسی", ur: "اردو", bn: "বাংলা", th: "ไทย", vi: "Tiếng Việt", id: "Bahasa Indonesia", ms: "Bahasa Melayu", tl: "Filipino", ka: "ქართული", hy: "Հայերեն", az: "Azərbaycan", kk: "Қазақша", uz: "Oʻzbekcha", ky: "Кыргызча", tg: "Тоҷикӣ", tk: "Türkmençe", mn: "Монгол", ne: "नेपाली", si: "සිංහල", km: "ខ្មែរ", lo: "ລາວ", my: "မြန်မာ", is: "Íslenska", sq: "Shqip", mk: "Македонски", bs: "Bosanski", be: "Беларуская", ca: "Català", mt: "Malti", fr: "français", en: "English", pt: "Português", ar: "العربية", es: "Español", sw: "Kiswahili", am: "አማርኛ", ti: "ትግርኛ", mg: "Malagasy", ny: "Chichewa", rw: "Kinyarwanda", so: "Soomaali", st: "Sesotho" };
  var CLE = "jesus_pays", CLE_VU = "jesus_pays_vu";
  var P = window.PAYS = { liste: LISTE, bypass: 0 };

  function lire(k) { try { return localStorage.getItem(k) || ""; } catch (e) { return ""; } }
  function ecrire(k, v) { try { if (v) localStorage.setItem(k, v); else localStorage.removeItem(k); } catch (e) { /* ignoré */ } }
  function norm(t) { return String(t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, ""); }
  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function drapeau(c) { return /^[A-Z]{2}$/.test(c || "") ? String.fromCodePoint(0x1F1E6 + c.charCodeAt(0) - 65, 0x1F1E6 + c.charCodeAt(1) - 65) : "🌍"; }

  P.code = function () { var c = lire(CLE); return LISTE.some(function (x) { return x[0] === c; }) ? c : ""; };
  // Accepte un code (« BJ ») ou un nom écrit à la main (« Benin », « RDC »…) et renvoie le code, ou "".
  P.codeDe = function (v) {
    var t = String(v || "").trim(); if (!t) return "";
    var u = t.toUpperCase();
    for (var i = 0; i < LISTE.length; i++) if (LISTE[i][0] === u) return u;
    var n = norm(t);
    if (n === "rdc" || n === "congokinshasa" || n === "republiquedemocratiqueducongo") return "CD";
    if (n === "congo") return "CG";
    if (n === "cotedivoire" || n === "ivorycoast") return "CI";
    for (var j = 0; j < LISTE.length; j++) if (norm(LISTE[j][1]) === n) return LISTE[j][0];
    return "";
  };
  P.nom = function (v) { var c = P.codeDe(v); if (!c) return String(v || ""); return LISTE.filter(function (x) { return x[0] === c; })[0][1]; };
  P.drapeau = drapeau;
  P.options = function (valeur, libTous) {
    var v = P.codeDe(valeur);
    return '<option value="">' + esc(libTous || "🌍 Tous les pays") + "</option>" + LISTE.map(function (x) { return '<option value="' + x[0] + '"' + (x[0] === v ? " selected" : "") + ">" + drapeau(x[0]) + " " + esc(x[1]) + "</option>"; }).join("");
  };
  P.paysParDefaut = function () { return P.code(); };

  // ---- Langue : cookie lu par le widget Google Translate au rechargement
  function langueDe(c) { var x = LISTE.filter(function (y) { return y[0] === c; })[0]; return x ? x[2] : "fr"; }
  function poserLangue(lg) {
    try {
      if (lg === "fr") document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      else document.cookie = "googtrans=/fr/" + lg + "; path=/";
    } catch (e) { /* ignoré */ }
  }

  P.choisir = function (c) {
    c = c || "";
    var ancien = P.code();
    ecrire(CLE, c); ecrire(CLE_VU, "1");
    if (c) poserLangue(langueDe(c));
    else if (ancien) poserLangue("fr");     // « tous les pays » : retour à l'original
    var m = document.getElementById("paysOverlay"); if (m) m.remove();
    if (c !== ancien) location.reload(); else majBoutons();
  };

  function majBoutons() {
    var c = P.code(), f = drapeau(c);
    var b = document.getElementById("btnPays"); if (b) { b.textContent = f; b.title = c ? "Pays : " + P.nom(c) + " (changer)" : "Choisir mon pays"; }
    var a = document.getElementById("btnPaysAccueil"); if (a) a.textContent = c ? f + " " + P.nom(c) + " — changer de pays" : "🌍 Choisir mon pays";
  }

  P.ouvrir = function () {
    if (document.getElementById("paysOverlay")) return;
    ecrire(CLE_VU, "1");
    var cur = P.code();
    var o = document.createElement("div");
    o.id = "paysOverlay";
    o.style.cssText = "position:fixed;inset:0;z-index:10050;background:rgba(10,20,40,.6);display:flex;align-items:center;justify-content:center;padding:14px;";
    o.innerHTML = '<div style="background:#fff;color:#1b2430;border-radius:18px;width:100%;max-width:420px;max-height:88vh;display:flex;flex-direction:column;box-shadow:0 20px 60px rgba(0,0,0,.4);">' +
      '<div style="padding:16px 16px 8px;"><div style="font-weight:800;font-size:17px;">🌍 Choisissez votre pays</div>' +
      '<div style="font-size:12.5px;opacity:.75;margin:4px 0 8px;">Vous ne verrez que les contenus de votre pays, et l\'application sera traduite dans sa langue.</div>' +
      '<input id="paysRech" placeholder="Rechercher un pays…" autocomplete="off" style="margin:0;"></div>' +
      '<div id="paysListe" style="overflow-y:auto;padding:4px 10px 12px;"></div>' +
      '<div style="padding:8px 16px 14px;border-top:1px solid #e3e9f1;"><button type="button" class="secondary" id="paysFermer" style="width:100%;margin:0;">Fermer</button></div></div>';
    document.body.appendChild(o);
    function ligne(c, nom, sous) {
      return '<button type="button" data-c="' + c + '" style="display:flex;width:100%;align-items:center;gap:10px;text-align:left;background:' + (c === cur ? "#e8f0fb" : "#fff") + ';color:#1b2430;border:1px solid #e3e9f1;border-radius:12px;padding:10px 12px;margin:5px 0;box-shadow:none;font-size:14px;">' +
        '<span style="font-size:22px;">' + drapeau(c) + '</span><span style="flex:1;"><b>' + esc(nom) + "</b>" + (sous ? '<br><span style="font-size:11.5px;opacity:.7;">' + esc(sous) + "</span>" : "") + "</span>" + (c === cur ? "✓" : "") + "</button>";
    }
    function rendre(q) {
      var n = norm(q), h = "";
      if (!n) h += ligne("", "Tous les pays", "Mélange des contenus de tous les pays");
      var visibles = LISTE.filter(function (x) { return !n || norm(x[1]).indexOf(n) !== -1; });
      var titre = function (t) { return '<div style="font-size:12px;font-weight:800;color:#0c2f68;margin:10px 4px 2px;">' + t + "</div>"; };
      var afr = visibles.filter(function (x) { return x[3] === 1; }), aut = visibles.filter(function (x) { return x[3] !== 1; });
      var rl = function (x) { return ligne(x[0], x[1], "Langue : " + (NOMS_LANGUES[x[2]] || x[2])); };
      if (afr.length) h += titre("🌍 Afrique") + afr.map(rl).join("");
      if (aut.length) h += titre("🌐 Autres pays du monde") + aut.map(rl).join("");
      document.getElementById("paysListe").innerHTML = h || '<p style="padding:14px;opacity:.7;">Aucun pays trouvé.</p>';
    }
    rendre("");
    o.querySelector("#paysRech").addEventListener("input", function () { rendre(this.value); });
    o.querySelector("#paysListe").addEventListener("click", function (ev) { var b = ev.target.closest("button[data-c]"); if (b) P.choisir(b.getAttribute("data-c")); });
    o.querySelector("#paysFermer").addEventListener("click", function () { o.remove(); });
    o.addEventListener("click", function (ev) { if (ev.target === o) o.remove(); });
  };

  // ---- Filtrage des réponses du serveur
  var NATIF = { getEvenements: "evenements", getConcours: "concours", listerEglises: "eglises", listerCellules: "cellules" };
  var PAR_TYPE = { getEnregistrements: "audio", getEnregistrementsPublic: "audio", getVideos: "video", getDocuments: "document", getActualites: "actualite",
    getPlaylists: "playlist", getTypesCotisation: "cotisation", getTvChaines: "tv", getSeances: "seance", getSeancesPublic: "seance", getAffiches: "affiche" };
  var carte = null, carteT = 0, carteP = null;
  function chargerCarte() {
    if (carte && Date.now() - carteT < 60000) return Promise.resolve(carte);
    if (carteP) return carteP;
    carteP = appelServeur("getPaysContenus").then(function (r) { carte = (r && r.carte) || {}; carteT = Date.now(); return carte; }).then(function (c) { carteP = null; return c; }, function (e) { carteP = null; throw e; });
    return carteP;
  }
  function visible(codeContenu, pc) { return !codeContenu || codeContenu === pc; }
  P.filtrer = function (action, res, sauter) {
    var pc = P.code();
    if (!pc || sauter || !res) return res;
    if (NATIF[action]) {
      var l = res[NATIF[action]];
      if (!Array.isArray(l)) return res;
      var copie = {}; for (var k in res) copie[k] = res[k];
      copie[NATIF[action]] = l.filter(function (x) { return visible(P.codeDe(x.pays), pc); });
      return copie;
    }
    var type = PAR_TYPE[action];
    if (!type || !Array.isArray(res)) return res;
    return chargerCarte().then(function (c) {
      return res.filter(function (x) { return visible(c[type + ":" + (x.ID != null ? x.ID : x.id)], pc); });
    }, function () { return res; });
  };
  // Appel sans filtre (écrans d'administration)
  P.brut = function (fn) { P.bypass++; try { return fn(); } finally { P.bypass--; } };
  P.majCarte = function (c) { carte = c; carteT = Date.now(); };

  // ---- Administration : pays des contenus (audios, vidéos, documents…)
  function initAdmin() {
    if (!window.XTR || !XTR.enregistrer) return;
    var SOURCES = [
      ["audio", "🎵 Audios", function () { return appelServeur("getEnregistrements"); }],
      ["video", "🎬 Vidéos", function () { return appelServeur("getVideos"); }],
      ["document", "📄 Documents", function () { return appelServeur("getDocuments"); }],
      ["actualite", "📰 Actualités", function () { return appelServeur("getActualites", ""); }],
      ["playlist", "📺 Playlists", function () { return appelServeur("getPlaylists"); }],
      ["cotisation", "💝 Collectes", function () { return appelServeur("getTypesCotisation"); }],
      ["tv", "📡 Chaînes TV", function () { return appelServeur("getTvChaines", true); }],
      ["seance", "🎥 Séances", function () { return appelServeur("getSeancesAdmin", membreCourant && membreCourant.code); }],
      ["affiche", "🖼️ Affiches", function () { return appelServeur("getAffiches"); }]
    ];
    var etat = { type: "audio" };
    function libelle(x, i) { return x.Titre || x.Nom || x.TypeNom || x.Libelle || x.titre || x.nom || (x.ImageBase64 ? "Affiche " + (i + 1) : "") || String(x.ID || x.id || ""); }
    function dessiner(z) {
      var src = SOURCES.filter(function (s) { return s[0] === etat.type; })[0];
      z.innerHTML = '<div class="card"><div class="evt-titre">🌍 Pays des contenus</div><p class="item-desc">Choisissez le pays auquel un contenu est destiné. « Tous les pays » = visible partout. Les contenus sans pays restent visibles dans tous les pays.</p>' +
        '<select id="paysType">' + SOURCES.map(function (s) { return '<option value="' + s[0] + '"' + (s[0] === etat.type ? " selected" : "") + ">" + s[1] + "</option>"; }).join("") + '</select><div id="paysLignes"><p class="item-desc">Chargement…</p></div></div>';
      z.querySelector("#paysType").onchange = function () { etat.type = this.value; dessiner(z); };
      Promise.all([P.brut(src[2]), appelServeur("getPaysContenus")]).then(function (rs) {
        var liste = Array.isArray(rs[0]) ? rs[0] : [], c = (rs[1] && rs[1].carte) || {};
        P.majCarte(c);
        var h = liste.length ? liste.map(function (x, i) {
          var id = x.ID != null ? x.ID : x.id;
          return '<div class="xtr-ligne" style="gap:8px;"><div class="tt" style="flex:1;min-width:0;"><b>' + esc(libelle(x, i)) + '</b></div><select data-id="' + esc(id) + '" style="width:auto;max-width:48%;margin:0;">' + P.options(c[etat.type + ":" + id]) + "</select></div>";
        }).join("") : '<p class="item-desc">Aucun contenu de ce type.</p>';
        z.querySelector("#paysLignes").innerHTML = h;
        Array.prototype.forEach.call(z.querySelectorAll("#paysLignes select"), function (sel) {
          sel.onchange = function () {
            var s = this; s.disabled = true;
            appelServeur("definirPaysContenu", membreCourant.code, etat.type, s.getAttribute("data-id"), s.value).then(function () {
              s.disabled = false; carte = null; s.style.outline = "2px solid #2e9d5b"; setTimeout(function () { s.style.outline = ""; }, 900);
            }, function (e) { s.disabled = false; alert(e.message); });
          };
        });
      }, function (e) { z.querySelector("#paysLignes").innerHTML = '<p class="error">' + esc(e.message) + "</p>"; });
    }
    XTR.enregistrer({ id: "pays", label: "🌍 Pays", visible: function () { return XTR.estAdminContenus(); }, rendre: dessiner });
  }

  function demarrer() {
    // Bouton dans l'en-tête
    var topbar = document.getElementById("topbar"), langue = document.getElementById("btnLangue");
    if (topbar && langue && !document.getElementById("btnPays")) {
      var b = document.createElement("button");
      b.id = "btnPays"; b.className = "btn-langue"; b.type = "button"; b.setAttribute("aria-label", "Choisir mon pays");
      b.onclick = function (ev) { ev.stopPropagation(); P.ouvrir(); };
      langue.parentNode.insertBefore(b, langue);
    }
    // Bouton sur l'écran d'accueil
    var sel = document.getElementById("selecteurTraduction");
    if (sel && !document.getElementById("btnPaysAccueil")) {
      var a = document.createElement("button");
      a.id = "btnPaysAccueil"; a.type = "button"; a.className = "secondary full-mt"; a.onclick = P.ouvrir;
      sel.parentNode.insertBefore(a, sel);
    }
    majBoutons();
    initAdmin();
    if (!lire(CLE_VU)) setTimeout(P.ouvrir, 900);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", demarrer); else demarrer();
})();
</script>

<script>
/* ===== SUPER ADMIN : contrôle total de la rubrique Communauté ===== */
(function () {
  "use strict";
  function esc(t) { return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function estSuper() { var p = window.membreCourant ? permissionsDe_(membreCourant) : []; return p.indexOf("systeme") !== -1; }
  function code() { return membreCourant && membreCourant.code; }
  function erreur(e) { alert((e && e.message) || "Erreur."); }
  var etat = { onglet: "apercu", zone: null, donnees: {} };

  function fenetre(html) {
    var o = document.createElement("div");
    o.style.cssText = "position:fixed;inset:0;z-index:10040;background:rgba(10,20,40,.6);display:flex;align-items:center;justify-content:center;padding:14px;";
    o.innerHTML = '<div style="background:#fff;color:#1b2430;border-radius:18px;width:100%;max-width:460px;max-height:90vh;overflow-y:auto;padding:16px;box-shadow:0 20px 60px rgba(0,0,0,.4);">' + html + "</div>";
    document.body.appendChild(o);
    o.close = function () { o.remove(); };
    return o;
  }
  function recharger() { if (etat.zone) dessiner(etat.zone); }

  var ONGLETS = [["apercu", "📊 Aperçu"], ["cellules", "👥 Groupes"], ["eglises", "⛪ Églises"], ["mur", "🙏 Mur de prière"]];
  function dessiner(z) {
    etat.zone = z;
    z.innerHTML = '<div class="card"><div class="evt-titre">🛡️ Contrôle total — Super Admin</div><p class="item-desc">Vous pouvez modifier ou supprimer n\'importe quel élément de la rubrique Communauté. Les versets, notifications, comptes vérifiés, codes promo, engagements et pays des contenus se gèrent dans leurs onglets dédiés.</p>' +
      '<div style="display:flex;gap:6px;flex-wrap:wrap;">' + ONGLETS.map(function (o) { return '<button type="button" class="small ' + (o[0] === etat.onglet ? "" : "secondary") + '" style="width:auto;" data-o="' + o[0] + '">' + o[1] + "</button>"; }).join("") + '</div></div><div id="scCorps"><div class="card"><p class="item-desc">Chargement…</p></div></div>';
    Array.prototype.forEach.call(z.querySelectorAll("[data-o]"), function (b) { b.onclick = function () { etat.onglet = b.getAttribute("data-o"); dessiner(z); }; });
    var c = z.querySelector("#scCorps");
    ({ apercu: vueApercu, cellules: vueCellules, eglises: vueEglises, mur: vueMur })[etat.onglet](c);
  }
  function enErreur(c) { return function (e) { c.innerHTML = '<div class="card"><p class="error">' + esc(e.message) + "</p></div>"; }; }

  function vueApercu(c) {
    appelServeur("scApercu", code()).then(function (r) {
      var k = r.compteurs, t = [["👥 Groupes", k.cellules], ["⛪ Églises publiées", k.eglises], ["⏳ Églises à valider", k.eglisesAttente], ["🙏 Messages publiés", k.murPublies], ["🚫 Messages masqués", k.murMasques],
        ["🔔 Appareils abonnés", k.abonnesPush], ["🏷️ Codes promo", k.promos], ["💝 Dons mensuels actifs", k.engagementsActifs], ["🤝 Parrains", k.parrains], ["✔ Comptes vérifiés", k.verifies]];
      c.innerHTML = '<div class="card"><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">' + t.map(function (x) { return '<div style="background:#eef3f9;border-radius:12px;padding:10px;"><div class="item-desc">' + x[0] + '</div><div class="item-nom" style="font-size:20px;">' + x[1] + "</div></div>"; }).join("") + "</div></div>";
    }, enErreur(c));
  }

  // ---- Groupes
  function vueCellules(c) {
    appelServeur("scCellules", code()).then(function (r) {
      etat.donnees.cellules = r.cellules;
      c.innerHTML = '<div class="card">' + (r.cellules.length ? r.cellules.map(function (g) {
        return '<div class="xtr-ligne" style="gap:8px;"><div class="tt" style="flex:1;min-width:0;"><b>' + esc(g.nom) + '</b><span class="item-desc">' + esc(g.ville) + (g.pays ? " · " + esc(PAYS.nom(g.pays)) : "") + " · " + g.nb + " membre(s) · resp. " + esc(g.responsableNom) + " (" + esc(g.responsable) + ")</span></div>" +
          '<button class="small secondary" style="width:auto;" data-m="' + esc(g.id) + '">✏️</button><button class="small secondary" style="width:auto;" data-s="' + esc(g.id) + '">🗑️</button></div>';
      }).join("") : '<p class="item-desc">Aucun groupe.</p>') + "</div>";
      Array.prototype.forEach.call(c.querySelectorAll("[data-m]"), function (b) { b.onclick = function () { modifierCellule(etat.donnees.cellules.filter(function (g) { return g.id === b.getAttribute("data-m"); })[0]); }; });
      Array.prototype.forEach.call(c.querySelectorAll("[data-s]"), function (b) { b.onclick = function () {
        confirmerApp_("Supprimer définitivement ce groupe et ses messages ?", function () { appelServeur("supprimerCellule", code(), b.getAttribute("data-s")).then(recharger, erreur); });
      }; });
    }, enErreur(c));
  }
  function modifierCellule(g) {
    var f = fenetre('<div class="evt-titre">✏️ Modifier le groupe</div><input id="scN" maxlength="60" value="' + esc(g.nom) + '"><input id="scV" maxlength="60" value="' + esc(g.ville) + '"><select id="scP">' + PAYS.options(g.pays, "🌍 Tous les pays") + '</select><textarea id="scD" rows="3" maxlength="300">' + esc(g.description) + '</textarea>' +
      '<label class="field-label">Nouveau responsable (code d\'un membre du groupe — facultatif)</label><input id="scR" placeholder="' + esc(g.responsable) + '"><div style="display:flex;gap:8px;"><button id="scOk">Enregistrer</button><button class="secondary" id="scKo">Annuler</button></div>');
    f.querySelector("#scKo").onclick = f.close;
    f.querySelector("#scOk").onclick = function () {
      appelServeur("scModifierCellule", code(), g.id, { nom: f.querySelector("#scN").value, ville: f.querySelector("#scV").value, pays: f.querySelector("#scP").value, description: f.querySelector("#scD").value, responsable: f.querySelector("#scR").value })
        .then(function () { f.close(); recharger(); }, erreur);
    };
  }

  // ---- Églises
  function vueEglises(c) {
    appelServeur("scEglises", code()).then(function (r) {
      etat.donnees.eglises = r.eglises;
      c.innerHTML = '<div class="card"><input type="search" id="scRechE" placeholder="Rechercher une église…">' + (r.eglises.length ? r.eglises.map(function (e) {
        return '<div class="xtr-ligne sc-egl" style="gap:8px;" data-t="' + esc((e.nom + " " + e.ville + " " + e.pays).toLowerCase()) + '"><div class="tt" style="flex:1;min-width:0;"><b>' + esc(e.nom) + (e.statut === "EnAttente" ? " ⏳" : "") + '</b><span class="item-desc">' + esc([e.ville, e.pays].filter(Boolean).join(", ")) + (e.statut === "EnAttente" ? " · à valider" : "") + "</span></div>" +
          '<button class="small secondary" style="width:auto;" data-m="' + esc(e.id) + '">✏️</button><button class="small secondary" style="width:auto;" data-s="' + esc(e.id) + '">🗑️</button></div>';
      }).join("") : '<p class="item-desc">Aucune église.</p>') + "</div>";
      c.querySelector("#scRechE").oninput = function () { var q = this.value.toLowerCase(); Array.prototype.forEach.call(c.querySelectorAll(".sc-egl"), function (l) { l.style.display = l.getAttribute("data-t").indexOf(q) !== -1 ? "" : "none"; }); };
      Array.prototype.forEach.call(c.querySelectorAll("[data-m]"), function (b) { b.onclick = function () { modifierEglise(etat.donnees.eglises.filter(function (e) { return e.id === b.getAttribute("data-m"); })[0]); }; });
      Array.prototype.forEach.call(c.querySelectorAll("[data-s]"), function (b) { b.onclick = function () {
        confirmerApp_("Supprimer cette église de l'annuaire ?", function () { appelServeur("supprimerEglise", code(), b.getAttribute("data-s")).then(recharger, erreur); });
      }; });
    }, enErreur(c));
  }
  function modifierEglise(e) {
    var champ = function (id, val, ph, max) { return '<input id="' + id + '" maxlength="' + max + '" placeholder="' + ph + '" value="' + esc(val) + '">'; };
    var f = fenetre('<div class="evt-titre">✏️ Modifier l\'église</div>' + champ("seN", e.nom, "Nom *", 80) + champ("seV", e.ville, "Ville *", 60) +
      '<select id="seP">' + PAYS.liste.map(function (x) { return '<option value="' + esc(x[1]) + '"' + (PAYS.codeDe(e.pays) === x[0] ? " selected" : "") + ">" + PAYS.drapeau(x[0]) + " " + esc(x[1]) + "</option>"; }).join("") + '</select>' +
      champ("seA", e.adresse, "Adresse", 160) + champ("seL", e.localisation, "Localisation (lien Google Maps…) *", 400) + champ("sePa", e.pasteur, "Pasteur", 80) + champ("seT", e.telephone, "Téléphone", 30) + champ("seH", e.horaires, "Horaires", 200) + champ("seW", e.lien, "Site (https://…)", 200) +
      '<textarea id="seD" rows="2" maxlength="300" placeholder="Description">' + esc(e.description) + '</textarea>' +
      '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><img id="seLogo" src="' + esc(e.logo) + '" alt="" style="' + (e.logo ? "" : "display:none;") + 'width:56px;height:56px;border-radius:12px;object-fit:cover;"><label class="file-btn-label" style="margin:0;">🖼️ Changer le logo<input type="file" id="seLogoF" accept="image/*" style="display:none;"></label></div>' +
      '<select id="seS"><option value="Publié"' + (e.statut !== "EnAttente" ? " selected" : "") + '>✅ Publiée</option><option value="EnAttente"' + (e.statut === "EnAttente" ? " selected" : "") + '>⏳ En attente</option></select>' +
      '<div style="display:flex;gap:8px;"><button id="seOk">Enregistrer</button><button class="secondary" id="seKo">Annuler</button></div>');
    var nouveauLogo = "";
    f.querySelector("#seKo").onclick = f.close;
    f.querySelector("#seLogoF").onchange = function () { var fi = this.files[0]; if (!fi) return; XTR.logoCarre(fi).then(function (d) { nouveauLogo = d; var im = f.querySelector("#seLogo"); im.src = d; im.style.display = "block"; }, erreur); };
    var g = function (i) { return f.querySelector("#" + i).value; };
    f.querySelector("#seOk").onclick = function () {
      appelServeur("scModifierEglise", code(), e.id, { nom: g("seN"), ville: g("seV"), pays: g("seP"), adresse: g("seA"), localisation: g("seL"), pasteur: g("sePa"), telephone: g("seT"), horaires: g("seH"), lien: g("seW"), description: g("seD"), statut: g("seS"), logo: nouveauLogo })
        .then(function () { f.close(); recharger(); }, erreur);
    };
  }

  // ---- Mur de prière
  function vueMur(c) {
    var statut = etat.statutMur || "Publié";
    appelServeur("scMur", code(), statut).then(function (r) {
      etat.donnees.mur = r.posts;
      c.innerHTML = '<div class="card"><div style="display:flex;gap:6px;margin-bottom:8px;"><button class="small ' + (statut === "Publié" ? "" : "secondary") + '" style="width:auto;" data-st="Publié">Publiés</button><button class="small ' + (statut === "Masqué" ? "" : "secondary") + '" style="width:auto;" data-st="Masqué">Masqués (signalés)</button></div>' +
        (r.posts.length ? r.posts.map(function (p) {
          return '<div class="xtr-ligne" style="gap:8px;align-items:flex-start;"><div class="tt" style="flex:1;min-width:0;"><span class="item-desc">' + esc(p.type) + " · " + esc(p.nom) + (p.signalements ? " · 🚩" + p.signalements : "") + '</span><div style="white-space:pre-wrap;font-size:13px;">' + esc(p.texteBrut) + "</div></div>" +
            '<div style="display:flex;flex-direction:column;gap:4px;">' + (statut === "Masqué" ? '<button class="small secondary" style="width:auto;" data-r="' + esc(p.id) + '">↩️</button>' : "") + '<button class="small secondary" style="width:auto;" data-m="' + esc(p.id) + '">✏️</button><button class="small secondary" style="width:auto;" data-s="' + esc(p.id) + '">🗑️</button></div></div>';
        }).join("") : '<p class="item-desc">Aucun message.</p>') + "</div>";
      Array.prototype.forEach.call(c.querySelectorAll("[data-st]"), function (b) { b.onclick = function () { etat.statutMur = b.getAttribute("data-st"); recharger(); }; });
      Array.prototype.forEach.call(c.querySelectorAll("[data-r]"), function (b) { b.onclick = function () { appelServeur("retablirMur", code(), b.getAttribute("data-r")).then(recharger, erreur); }; });
      Array.prototype.forEach.call(c.querySelectorAll("[data-s]"), function (b) { b.onclick = function () { confirmerApp_("Supprimer ce message ?", function () { appelServeur("supprimerMur", code(), b.getAttribute("data-s")).then(recharger, erreur); }); }; });
      Array.prototype.forEach.call(c.querySelectorAll("[data-m]"), function (b) { b.onclick = function () {
        var p = etat.donnees.mur.filter(function (x) { return x.id === b.getAttribute("data-m"); })[0];
        var f = fenetre('<div class="evt-titre">✏️ Modifier le message</div><textarea id="smT" rows="5" maxlength="600">' + esc(p.texteBrut) + '</textarea><div style="display:flex;gap:8px;"><button id="smOk">Enregistrer</button><button class="secondary" id="smKo">Annuler</button></div>');
        f.querySelector("#smKo").onclick = f.close;
        f.querySelector("#smOk").onclick = function () { appelServeur("scModifierMur", code(), p.id, { texte: f.querySelector("#smT").value, categorie: p.categorie }).then(function () { f.close(); recharger(); }, erreur); };
      }; });
    }, enErreur(c));
  }

  function init() { if (window.XTR && XTR.enregistrer) XTR.enregistrer({ id: "controle", label: "🛡️ Contrôle", visible: estSuper, rendre: dessiner }); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
</script>

</body>
</html>
