function Animacao(context) {

    this.context = context;

    this.sprites = [];
    this.spritesExcluir = [];
    this.processamentos = [];
    this.processamentosExcluir = [];
    this.ligado = false;

}

Animacao.prototype = {

    novoSprite: function(sprite) {

        this.sprites.push(sprite);
        sprite.animacao = this;

    },

    excluirSprite: function(sprite) {

        this.spritesExcluir.push(sprite);

    },

    excluirProcessamento: function(processamento) {

        this.processamentosExcluir.push(sprite);

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

        for (let i in this.processamentos) {

            this.processamentos[i].processar();

        }

        this.processarExclusoes();

        let animacao = this;

        requestAnimationFrame(function() {

            animacao.proximoFrame();

        });

    },

    processarExclusoes: function() {

        novoSprites = [];
        novoProcessamentos = [];

        for (i in this.sprites) {

            if (this.spritesExcluir.indexOf(this.sprites[i]) == -1) {

                novoSprites.push(this.sprites[i]);

            }

        }

        for (i in this.processamentos) {

            if (this.processamentosExcluir.indexOf(this.processamentos[i]) == -1) {

                novoProcessamentos.push(this.processamentos[i]);

            }

        }

        this.spritesExcluir = [];
        this.processamentosExcluir = [];

        this.sprites = novoSprites;
        this.processamentos = novoProcessamentos;

    },

    limparTela: function() {

        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);

    },

    novoProcessamento: function(processamento) {

        this.processamentos.push(processamento);
        processamento.animacao = this;

    }

}