function Animacao(context) {

    this.context = context;

    this.sprites = [];
    this.ligado = false;

}

Animacao.prototype = {

    novoSprite: function(sprite) {

        this.sprites.push(sprite);
        sprite.animacao = this;

    },

    ligar: function() {

        this.ligado = true;
        this.proximoFrame();

    },

    desligar: function() {

        this.ligado = false;

    },

    proximoFrame: function() {

        if (this.ligado == false) {
            
            return;

        }

        this.limparTela();

        for (let i in this.sprites) {

            this.sprites[i].atualizar();

        }

        for (let i in this.sprites) {

            this.sprites[i].desenhar();

        }

        let animacao = this;

        requestAnimationFrame(function() {

            animacao.proximoFrame();

        });

    },

    limparTela: function() {

        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    }

}