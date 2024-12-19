"use client"

import { Download, LayoutGrid, Link, Mail, CloudUpload, Paperclip, Files, Trash2 as RemoveIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";


export default function QrCodesGenerator() {

    const [url, setUrl] = useState("");
    const [color, setColor] = useState("#ffffff");
    const [bgColor, setBgColor] = useState("#037fff");
    const [logo, setLogo] = useState<string | null>(null);
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [qrType, setQrType] = useState("url");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleDownload = (type: "png" | "svg") => {
        const qrCodeElem = document.getElementById("qr-code");

        if (qrCodeElem) {
            if (type === "png") {
                toPng(qrCodeElem)
                    .then((dataUrl) => {
                        saveAs(dataUrl, "qr-code.png");
                    })
                    .catch((err) => {
                        console.log("Error generating QR code", err);
                    });
            } else if (type === "svg") {
                const svgElem = qrCodeElem.querySelector("svg");

                if (svgElem) {
                    const saveData = new Blob([svgElem.outerHTML], {
                        type: "image/svg+xml;charset=utf-8",
                    });
                    saveAs(saveData, "qr-code.svg");
                }
            }
        }
    };

    const handleEmailInput = () => {
        const mailToLink = `mailto:${email}?subject=${subject}&body=${encodeURIComponent(
            message
        )}`;

        setUrl(mailToLink);
    };

    const removelogoFile = () => {
        setLogo(null);
        setLogoFile(null);
    }

    const reset = () => {
        setUrl('')
        setEmail('')
        setSubject('')
        setMessage('');
        setColor('#ffffff')
        setBgColor('#037fff')
    }

    return (
        <div className="relative z-30 mx-6 my-4 flex max-w-[1250px] w-full min-h-[650px] h-full">
            <Card className="flex-1 flex flex-col w-full h-auto mx-auto bg-white/80 backdrop-blur-md shadow-sm border-2 border-white/40 rounded-xl">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center text-blue">
                        QR Code Generator
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                    <div className="h-full flex flex-col md:flex-row gap-8">
                        <div className="flex-1 space-y-6">
                            <Tabs
                                defaultValue="url"
                                className="space-y-6"
                                onValueChange={(val) => setQrType(val)}
                            >
                                <TabsList className="h-10 w-full grid grid-cols-2 bg-[#057FFF] text-lg">
                                    <TabsTrigger value="url" className="text-white font-bold">
                                        <Link className="w-4 h-4 mr-2" />
                                        Url
                                    </TabsTrigger>
                                    <TabsTrigger value="email" className="text-white font-bold">
                                        <Mail className="w-4 h-4 mr-2" />
                                        Email
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="url">
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="url" className="font-semibold text-blue">Url</Label>
                                            <Input type="text" id="url"
                                                value={url}
                                                onChange={(e) => setUrl(e.target.value)}
                                                className="w-full border-2 bg-transparent border-white/70 rounded-md focus:border-blue outline-none focus-visible:ring-0 placeholder:text-grey"
                                                placeholder="https://exemple.com"
                                            />
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="email">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="font-semibold text-blue">Email destinataire</Label>
                                            <Input type="email" id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full border-2 bg-transparent border-white/70 rounded-md focus:border-blue outline-none focus-visible:ring-0 placeholder:text-grey"
                                                placeholder="exemple@exemple.com"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="subject" className="font-semibold text-blue">Sujet</Label>
                                            <Input type="text" id="subject"
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                                className="w-full border-2 bg-transparent border-white/70 rounded-md focus:border-blue outline-none focus-visible:ring-0 placeholder:text-grey"
                                                placeholder="Saisir l'objet de l'email"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="su" className="font-semibold text-blue">Message</Label>
                                            <Textarea id="message"
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                className="resize-none w-full border-2 bg-transparent border-white/70 rounded-md focus:border-blue outline-none focus-visible:ring-0 placeholder:text-grey h-25"
                                                placeholder="Saisir le message de l'email"
                                            />
                                        </div>
                                        <Button
                                            className="py-7 px-8 bg-[#057FFF] font-bold rounded-full uppercase"
                                            onClick={handleEmailInput}
                                        >
                                            Generate Email QR Code
                                        </Button>
                                    </div>
                                </TabsContent>
                            </Tabs>
                            <div className="space-y-4'">
                                <div className="flex space-x-4">
                                    <div className="space-y-2 flex-1">
                                        <Label htmlFor="color" className="font-semibold text-blue">Couleur Qr Code</Label>
                                        <div className="flex items-center gap-1">
                                            <div className="relative w-12 flex-1 h-12 rounded-md border-2 border-white/70"
                                                style={{ backgroundColor: color }} >
                                                <Input type="color" id="color"
                                                    value={color}
                                                    onChange={(e) => setColor(e.target.value)}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                />
                                            </div>
                                            <Input type="text"
                                                value={color}
                                                onChange={(e) => setColor(e.target.value)}
                                                className="flex-1 border-2 bg-transparent border-white/70 rounded-md focus:border-blue outline-none focus-visible:ring-0 placeholder:text-grey"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2 flex-1">
                                        <Label htmlFor="bgcolor" className="font-semibold text-blue">Couleur Arrière Plan</Label>
                                        <div className="flex items-center gap-1">
                                            <div className="relative w-12 flex-1 h-12 rounded-md border-2 border-white/70"
                                                style={{ backgroundColor: bgColor }} >
                                                <Input type="color" id="bgcolor"
                                                    value={bgColor}
                                                    onChange={(e) => setBgColor(e.target.value)}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                />
                                            </div>
                                            <Input type="text"
                                                value={bgColor}
                                                onChange={(e) => setBgColor(e.target.value)}
                                                className="flex-1 border-2 bg-transparent border-white/70 rounded-md focus:border-blue outline-none focus-visible:ring-0 placeholder:text-grey"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="logo" className="font-semibold text-blue">Logo</Label>
                                    <Input type="file" id="logo" accept="image/*"
                                        onChange={(e) => {
                                            if (e.target.files && e.target.files[0]) {
                                                setLogoFile(e.target.files[0]);

                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    setLogo(reader.result as string)
                                                };
                                                reader.readAsDataURL(e.target.files[0]);
                                            }
                                        }}
                                        className="w-full border-2 bg-transparent border-white/70 rounded-md focus:border-blue outline-none focus-visible:ring-0 placeholder:text-grey"
                                    />
                                    {logoFile &&
                                        <div className="flex flex-1 gap-2 items-center justify-start">
                                            <Paperclip className="w-4 h-4" />
                                            <span>{logoFile.name}</span>
                                            <RemoveIcon
                                                onClick={removelogoFile}
                                                className="w-4 h-4 ml-8 hover:cursor-pointer hover:stroke-destructive duration-200 ease-in-out" />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="relative flex-1 bg-blue rounded-lg flex flex-col justify-center space-y-6">
                            <span>
                                <LayoutGrid className="absolute top-4 right-4 w-8 h-8 text-white" />
                            </span>
                            <div id="qr-code" className="flex justify-center">
                                <div className="relative">
                                    <QRCodeSVG
                                        value={url}
                                        size={256}
                                        fgColor={color}
                                        bgColor={bgColor}
                                        imageSettings={
                                            logo ? { src: logo, height: 50, width: 50, excavate: true } : undefined
                                        }
                                    />
                                    {logo && (
                                        <img
                                            src={logo}
                                            alt="logo"
                                            className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-md border-none"
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-center space-x-4 pb-6">
                                <Button variant="outline" onClick={() => handleDownload("png")}>
                                    <Download className="w-4 h-4 mr-2" />
                                    Télécharger PNG
                                </Button>
                                <Button variant="outline" onClick={() => handleDownload("svg")}>
                                    <Download className="w-4 h-4 mr-2" />
                                    Télécharger SVG
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div >
    );
};